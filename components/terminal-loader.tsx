"use client"

import { useEffect, useState } from "react"

export default function TerminalLoader() {
  const [dots, setDots] = useState("")
  const [loadingText, setLoadingText] = useState("Initializing terminal")
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  // Animate the loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return ""
        return prev + "."
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        if (newProgress >= 100) {
          // Start fade out when progress reaches 100%
          setFadeOut(true)
          clearInterval(interval)
          return 100
        }
        return newProgress
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Change loading messages
  useEffect(() => {
    const messages = [
      "Initializing terminal",
      "Connecting to commodity servers",
      "Fetching market data",
      "Rendering interface",
      "Loading complete",
    ]

    const interval = setInterval(() => {
      const messageIndex = Math.min(Math.floor(progress / (100 / messages.length)), messages.length - 1)
      setLoadingText(messages[messageIndex])
    }, 1000)

    return () => clearInterval(interval)
  }, [progress])

  return (
    <div
      className={`min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4 transition-opacity duration-500 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="max-w-md w-full">
        <div className="mb-8">
          <pre className="text-green-500 text-center">
            {`
 __  __      _        _   _____        _           
|  \\/  | ___| |_ __ _| | |_   _|__ _ _(_)_ __  ___ 
| |\\/| |/ _ \\ __/ _\` | |   | |/ -_) '_| | '  \\/ -_)
|_|  |_|\\___/\\__\\__,_|_|   |_|\\___|_| |_|_|_|_\\___|
                                                   
`}
          </pre>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-green-400">$</span>
            <span className="ml-2">
              {loadingText}
              {dots}
            </span>
          </div>

          <div className="w-full bg-green-900/20 rounded-sm h-2">
            <div
              className="bg-green-500 h-2 rounded-sm transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-xs text-green-700">
            <span>[{Math.floor(progress)}%]</span>
            <span className="ml-2">Press Ctrl+C to abort</span>
          </div>
        </div>
      </div>
    </div>
  )
}

