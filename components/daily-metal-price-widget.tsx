"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export default function DailyMetalPriceWidget() {
  const widgetLoaded = useRef(false)

  useEffect(() => {
    // This ensures we don't try to initialize the widget multiple times
    if (widgetLoaded.current) return

    // Check if the pym.js script has already been loaded and initialized
    if (window.pym) {
      const pymParent = new window.pym.Parent("DMPC_1", "//dailymetalprice.com/charts.php?dark", {})
      widgetLoaded.current = true
    }
  }, [])

  return (
    <div className="metal-price-widget">
      <div id="DMPC_1" data-pym-src="//dailymetalprice.com/charts.php?dark" className="w-full min-h-[400px]"></div>

      {/* Load the pym.js script */}
      <Script
        src="//dailymetalprice.com/js/pym.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (!widgetLoaded.current && window.pym) {
            const pymParent = new window.pym.Parent("DMPC_1", "//dailymetalprice.com/charts.php?dark", {})
            widgetLoaded.current = true
          }
        }}
      />

      {/* Add a fallback message in case the widget fails to load */}
      <noscript>
        <p className="text-yellow-500 mt-2">
          JavaScript is required to view the metal prices widget. Please enable JavaScript in your browser.
        </p>
      </noscript>
    </div>
  )
}

