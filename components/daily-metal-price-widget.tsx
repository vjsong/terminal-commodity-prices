"use client"

import React, { useEffect, useRef, memo, useState } from 'react'

function LoadingSpinner() {
  const [dots, setDots] = useState('.')
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '.'
        return prev + '.'
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <pre className="font-mono text-green-400">
          {`[*] Fetching market data${dots}`}
        </pre>
      </div>
    </div>
  )
}

function TickerTapeWidget() {
  const container = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

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

    script.onload = () => {
      setIsLoading(false)
    }

    container.current.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="tradingview-widget-container mb-4 relative h-[42px]" ref={container}>
      {isLoading && <LoadingSpinner />}
      <div className={`tradingview-widget-container__widget ${isLoading ? 'invisible' : 'visible'}`}></div>
    </div>
  )
}

function MiniSymbolWidget({ symbol, containerId }: { symbol: string; containerId: string }) {
  const container = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!container.current) return

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = JSON.stringify({
      "symbol": symbol,
      "width": "100%",
      "height": "220",
      "locale": "en",
      "dateRange": "12M",
      "colorTheme": "dark",
      "isTransparent": true,
      "autosize": true,
      "largeChartUrl": "",
      "trendLineColor": "rgba(34, 197, 94, 1)",
      "underLineColor": "rgba(34, 197, 94, 0.1)",
      "underLineBottomColor": "rgba(34, 197, 94, 0.6)",
      "chartOnly": false,
      "noTimeScale": false,
      "gridLineColor": "rgba(255, 255, 255, 0.1)"
    })

    script.onload = () => {
      setIsLoading(false)
    }

    container.current.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [symbol])

  return (
    <div className="tradingview-widget-container relative w-full h-[220px]" ref={container}>
      {isLoading && <LoadingSpinner />}
      <div className={`tradingview-widget-container__widget h-full ${isLoading ? 'invisible' : 'visible'}`}></div>
    </div>
  )
}

function MetalPriceGrid() {
  const metals = [
    { symbol: "COMEX:HG1!", name: "Copper" },
    { symbol: "COMEX:UX1!", name: "Uranium" },
    { symbol: "NYMEX:NG1!", name: "Natural Gas" },
    { symbol: "COMEX:TIO1!", name: "Iron Ore" }
  ]

  return (
    <div className="w-full py-6">
      <TickerTapeWidget />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {metals.map((metal, index) => (
          <div 
            key={metal.symbol}
            className="bg-black overflow-hidden w-full max-w-[500px] rounded-lg border border-white/20"
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
