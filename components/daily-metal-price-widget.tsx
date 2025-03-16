"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export default function DailyMetalPriceWidget() {
  const widgetLoaded = useRef({ charts: false, prices: false })

  useEffect(() => {
    // This ensures we don't try to initialize the widgets multiple times
    if (widgetLoaded.current.charts && widgetLoaded.current.prices) return

    // Check if the pym.js script has already been loaded and initialized
    if (window.pym) {
      if (!widgetLoaded.current.charts) {
        new window.pym.Parent("DMPC_1", "//dailymetalprice.com/charts.php?dark&bg=111827&text=ffffff", {})
        widgetLoaded.current.charts = true
      }
      if (!widgetLoaded.current.prices) {
        new window.pym.Parent("DMP_1", "//dailymetalprice.com/prices.php?dark&bg=111827&text=ffffff", {})
        widgetLoaded.current.prices = true
      }
    }
  }, [])

  return (
    <div className="metal-price-widget bg-gray-900 p-6 rounded-lg shadow-xl">
      {/* Container for both widgets with responsive layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Charts widget */}
        <div className="flex-1">
          <div id="DMPC_1" data-pym-src="//dailymetalprice.com/charts.php?dark&bg=111827&text=ffffff" className="w-full min-h-[400px] rounded-md overflow-hidden"></div>
        </div>
        
        {/* Prices widget */}
        <div className="flex-1">
          <div id="DMP_1" data-pym-src="//dailymetalprice.com/prices.php?dark&bg=111827&text=ffffff" className="w-full min-h-[400px] rounded-md overflow-hidden"></div>
        </div>
      </div>

      {/* Load the pym.js script */}
      <Script
        src="//dailymetalprice.com/js/pym.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.pym) {
            if (!widgetLoaded.current.charts) {
              new window.pym.Parent("DMPC_1", "//dailymetalprice.com/charts.php?dark&bg=111827&text=ffffff", {})
              widgetLoaded.current.charts = true
            }
            if (!widgetLoaded.current.prices) {
              new window.pym.Parent("DMP_1", "//dailymetalprice.com/prices.php?dark&bg=111827&text=ffffff", {})
              widgetLoaded.current.prices = true
            }
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

