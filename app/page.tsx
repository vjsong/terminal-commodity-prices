"use client"

import { useEffect, useState } from "react"
import { Terminal } from "@/components/ui/terminal"
import TerminalHeader from "@/components/terminal-header"
import DailyMetalPriceWidget from "@/components/daily-metal-price-widget"
import Link from "next/link"
import { FileText } from "lucide-react"

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-black text-green-500 font-mono p-4">
      <div className="container mx-auto max-w-4xl">
        <TerminalHeader currentTime={currentTime} />

        <Terminal className="mt-4">
          <div className="space-y-4">
            <div className="border-b border-green-800 pb-2">
              <p className="text-xs text-green-400">$ whoami</p>
              <h1 className="text-xl font-bold">John Doe</h1>
              <p className="text-sm opacity-80">Software Engineer | Commodity Enthusiast</p>
            </div>

            <div className="border-b border-green-800 pb-2">
              <p className="text-xs text-green-400">$ cat about.txt</p>
              <p className="text-sm mt-1">
                Welcome to my terminal. I'm a software engineer with an interest in commodity markets. This page
                displays real-time prices of key metals and minerals.
              </p>
            </div>

            <div className="border-b border-green-800 pb-4">
              <p className="text-xs text-green-400">$ ./fetch-metal-prices</p>
              <div className="mt-2">
                <DailyMetalPriceWidget />
              </div>
            </div>

            <div>
              <p className="text-xs text-green-400">$ ls -la ./pages/</p>
              <div className="grid grid-cols-1 gap-2 mt-2 text-sm">
                <Link href="/market-analysis" className="flex items-center hover:bg-green-900/30 p-1 rounded">
                  <FileText className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-green-300 mr-2">-rw-r--r--</span>
                  <span>market-analysis.txt</span>
                  <span className="ml-auto text-green-700 text-xs">Last updated: 2023-07-15</span>
                </Link>
                <Link href="/copper-outlook" className="flex items-center hover:bg-green-900/30 p-1 rounded">
                  <FileText className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-green-300 mr-2">-rw-r--r--</span>
                  <span>copper-outlook.txt</span>
                  <span className="ml-auto text-green-700 text-xs">Last updated: 2023-08-22</span>
                </Link>
                <Link href="/gold-analysis" className="flex items-center hover:bg-green-900/30 p-1 rounded">
                  <FileText className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-green-300 mr-2">-rw-r--r--</span>
                  <span>gold-analysis.txt</span>
                  <span className="ml-auto text-green-700 text-xs">Last updated: 2023-09-05</span>
                </Link>
                <Link href="/lithium-market" className="flex items-center hover:bg-green-900/30 p-1 rounded">
                  <FileText className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-green-300 mr-2">-rw-r--r--</span>
                  <span>lithium-market.txt</span>
                  <span className="ml-auto text-green-700 text-xs">Last updated: 2023-09-18</span>
                </Link>
                <Link href="/silver-trends" className="flex items-center hover:bg-green-900/30 p-1 rounded">
                  <FileText className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-green-300 mr-2">-rw-r--r--</span>
                  <span>silver-trends.txt</span>
                  <span className="ml-auto text-green-700 text-xs">Last updated: 2023-10-01</span>
                </Link>
              </div>
            </div>
          </div>
        </Terminal>
      </div>
    </main>
  )
}

