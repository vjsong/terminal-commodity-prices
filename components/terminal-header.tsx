"use client"

import { Clock, Terminal } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface TerminalHeaderProps {
  currentTime: Date
}

export default function TerminalHeader({ currentTime }: TerminalHeaderProps) {
  const pathname = usePathname()
  const isMainPage = pathname === "/"

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-green-800 pb-2">
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Clock className="h-4 w-4 flex-shrink-0" />
        <span className="text-sm whitespace-nowrap">
          {formattedDate} {formattedTime}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
        {!isMainPage && (
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm border border-green-700 hover:bg-green-900/30 px-2 py-0.5 rounded transition-colors"
          >
            <Terminal className="h-4 w-4" />
            <span className="text-green-400">return ~/main</span>
          </Link>
        )}
        <span className="bg-green-900 px-2 py-0.5 rounded text-green-300">TERMINAL v1.0</span>
      </div>
    </div>
  )
}

