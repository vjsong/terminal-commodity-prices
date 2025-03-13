import type React from "react"
import { Clock } from "lucide-react"
import Link from "next/link"
import { Terminal } from "@/components/ui/terminal"
import { parseTextWithLinks } from "@/lib/parse-text-links"

interface PlaintextLayoutProps {
  title: string
  filename: string
  lastUpdated: string
  children: React.ReactNode
}

export default function PlaintextLayout({ title, filename, lastUpdated, children }: PlaintextLayoutProps) {
  const currentTime = new Date()

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

  // Parse the text content to render links
  const parsedContent = typeof children === "string" ? parseTextWithLinks(children) : children

  return (
    <main className="min-h-screen bg-black text-green-500 font-mono p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center border-b border-green-800 pb-2">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">
              {formattedDate} {formattedTime}
            </span>
          </div>
          <div className="text-sm">
            <span className="bg-green-900 px-2 py-0.5 rounded text-green-300">TERMINAL v1.0</span>
          </div>
        </div>

        <Terminal className="mt-4">
          <div className="space-y-4">
            <div className="border-b border-green-800 pb-2 flex justify-between items-center">
              <div>
                <p className="text-xs text-green-400">$ cat {filename}</p>
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-sm opacity-80">Last updated: {lastUpdated}</p>
              </div>
              <Link href="/" className="text-xs text-green-400 hover:text-green-300">
                $ cd ..
              </Link>
            </div>

            <div className="plaintext-content text-sm leading-relaxed whitespace-pre-wrap">{parsedContent}</div>
          </div>
        </Terminal>
      </div>
    </main>
  )
}

