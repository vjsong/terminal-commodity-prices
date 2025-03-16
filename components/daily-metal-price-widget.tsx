"use client"

import { useEffect } from "react"

export default function DailyMetalPriceWidget() {
  return (
    <div className="metal-price-widget">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
        <script
          type="text/javascript"
          src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
          async
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              title: "Commodities",
              width: "100%", 
              height: "100%",
              locale: "en",
              showSymbolLogo: true,
              symbolsGroups: [
                {
                  name: "Energy",
                  symbols: [
                    { name: "NYMEX:CL1!", displayName: "WTI Crude Oil" },
                    { name: "NYMEX:NG1!", displayName: "Gas" },
                    { name: "TVC:UKOIL", displayName: "Brent Oil" },
                    { name: "NYMEX:RB1!", displayName: "Gasoline" },
                    { name: "NYMEX:HO1!", displayName: "Heating Oil" },
                    { name: "NYMEX:AEZ1!", displayName: "Ethanol" }
                  ]
                },
                {
                  name: "Metals",
                  symbols: [
                    { name: "COMEX:GC1!", displayName: "Gold" },
                    { name: "COMEX:SI1!", displayName: "Silver" },
                    { name: "NYMEX:PL1!", displayName: "Platinum" },
                    { name: "COMEX_MINI:QC1!", displayName: "Copper" },
                    { name: "COMEX:ZNC1!", displayName: "Zinc" },
                    { name: "COMEX:TIO1!", displayName: "Iron Ore" }
                  ]
                },
                {
                  name: "Agricultural",
                  symbols: [
                    { name: "NYMEX:KT1!", displayName: "Coffee" },
                    { name: "NYMEX:TT1!", displayName: "Cotton" },
                    { name: "CBOT:ZS1!", displayName: "Soybean" },
                    { name: "CBOT:ZW1!", displayName: "Wheat" },
                    { name: "NYMEX:YO1!", displayName: "Sugar" },
                    { name: "CBOT:ZC1!", displayName: "Corn" }
                  ]
                },
                {
                  name: "Currencies",
                  symbols: [
                    { name: "CME:6E1!", displayName: "Euro" },
                    { name: "CME:6B1!", displayName: "British Pound" },
                    { name: "CME:6J1!", displayName: "Japanese Yen" },
                    { name: "CME:6S1!", displayName: "Swiss Franc" },
                    { name: "CME:6A1!", displayName: "Australian Dollar" },
                    { name: "CME:6C1!", displayName: "Canadian Dollar" }
                  ]
                },
                {
                  name: "Indices",
                  symbols: [
                    { name: "CME_MINI:ES1!", displayName: "S&P 500" },
                    { name: "CME_MINI:NQ1!", displayName: "Nasdaq 100" },
                    { name: "CBOT_MINI:YM1!", displayName: "Dow 30" },
                    { name: "CME:NKD1!", displayName: "Nikkei 225" },
                    { name: "EUREX:FDAX1!", displayName: "DAX" },
                    { name: "CME:IBV1!", displayName: "IBovespa" }
                  ]
                },
                {
                  name: "Interest Rates",
                  symbols: [
                    { name: "CBOT:ZN1!", displayName: "10-Year T-Note" },
                    { name: "CBOT:ZF1!", displayName: "5-Year T-Note" },
                    { name: "CBOT:Z3N1!", displayName: "3-Year T-Note" },
                    { name: "CBOT:ZT1!", displayName: "2-Year T-Note" },
                    { name: "CBOT:ZQ1!", displayName: "30-Day FED Funds IR" },
                    { name: "CBOT:ZB1!", displayName: "T-Bond" }
                  ]
                }
              ],
              colorTheme: "light"
            })
          }}
        />
      </div>
    </div>
  )
}

