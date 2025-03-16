"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function TradingViewWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = JSON.stringify({
      "title": "Commodities",
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "showSymbolLogo": true,
      "symbolsGroups": [
        {
          "name": "Energy",
          "symbols": [
            { "name": "NYMEX:CL1!", "displayName": "WTI Crude Oil" },
            { "name": "NYMEX:NG1!", "displayName": "Gas" },
            { "name": "TVC:UKOIL", "displayName": "Brent Oil" },
            { "name": "NYMEX:RB1!", "displayName": "Gasoline" },
            { "name": "NYMEX:HO1!", "displayName": "Heating Oil" },
            { "name": "NYMEX:AEZ1!", "displayName": "Ethanol" }
          ]
        },
        {
          "name": "Metals",
          "symbols": [
            { "name": "COMEX:GC1!", "displayName": "Gold" },
            { "name": "COMEX:SI1!", "displayName": "Silver" },
            { "name": "NYMEX:PL1!", "displayName": "Platinum" },
            { "name": "COMEX_MINI:QC1!", "displayName": "Copper" },
            { "name": "COMEX:ZNC1!", "displayName": "Zinc" },
            { "name": "COMEX:TIO1!", "displayName": "Iron Ore" }
          ]
        }
      ],
      "colorTheme": "dark"
    })

    const widgetContainer = document.getElementById('tradingview-widget')
    if (widgetContainer) {
      widgetContainer.appendChild(script)
    }

    return () => {
      if (widgetContainer && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="relative h-[600px] border rounded-lg shadow-lg bg-white overflow-hidden">
        <div id="tradingview-widget" className="tradingview-widget-container h-full">
          <div className="tradingview-widget-container__widget h-full"></div>
        </div>
        <div className="tradingview-widget-copyright absolute bottom-2 right-2">
          <a 
            href="https://www.tradingview.com/" 
            rel="noopener nofollow" 
            target="_blank"
            className="text-sm text-gray-600 hover:text-blue-500"
          >
          </a>
        </div>
      </div>
    </div>
  )
}
