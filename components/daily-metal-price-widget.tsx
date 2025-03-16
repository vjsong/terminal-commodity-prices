"use client"

import React, { useEffect, useRef, memo } from 'react'

function TickerTapeWidget() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "NYMEX:CL1!",
          "title": "Crude Oil"
        },
        {
          "proName": "NYMEX:NG1!",
          "title": "Natural Gas"
        },
        {
          "proName": "COMEX:HG1!",
          "title": "Copper"
        },
        {
          "proName": "COMEX:HRC1!",
          "title": "Steel"
        },
        {
          "proName": "COMEX:GC1!",
          "title": "Gold"
        },
        {
          "proName": "COMEX:SI1!",
          "title": "Silver"
        },
        {
          "proName": "NYMEX:PA1!",
          "title": "Palladium"
        }
      ],
      "showSymbolLogo": false,
      "isTransparent": true,
      "displayMode": "compact",
      "colorTheme": "dark",
      "locale": "en"
    })

    container.current.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="tradingview-widget-container mb-4" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  )
}

function MiniSymbolWidget({ symbol, containerId }: { symbol: string; containerId: string }) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = JSON.stringify({
      "symbol": symbol,
      "width": "350",
      "height": "220",
      "locale": "en",
      "dateRange": "12M",
      "colorTheme": "dark",
      "isTransparent": true,
      "autosize": true,
      "largeChartUrl": "",
      "trendLineColor": "rgba(34, 197, 94, 1)",
      "underLineColor": "rgba(34, 197, 94, 0.1)",
      "underLineBottomColor": "rgba(34, 197, 94, 0.15)",
      "chartOnly": false,
      "noTimeScale": false,
      "gridLineColor": "rgba(255, 255, 255, 0.1)"
    })

    container.current.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [symbol])

  return (
    <div className="tradingview-widget-container w-[360px] h-[220px]" ref={container}>
      <div className="tradingview-widget-container__widget h-full"></div>
    </div>
  )
}

function MetalPriceGrid() {
  const metals = [
    { symbol: "COMEX:HG1!", name: "Copper" },
    { symbol: "COMEX:LTH1!", name: "Lithium" },
    { symbol: "COMEX:SI1!", name: "Silver" },
    { symbol: "COMEX:TIO1!", name: "Iron Ore" }
  ]

  return (
    <div className="w-full px-4 py-6">
      <TickerTapeWidget />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {metals.map((metal, index) => (
          <div 
            key={metal.symbol}
            className="bg-black overflow-hidden w-[350px] rounded-lg border border-white/20"
          >
            <MiniSymbolWidget 
              symbol={metal.symbol} 
              containerId={`widget-${index}`} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(MetalPriceGrid)
