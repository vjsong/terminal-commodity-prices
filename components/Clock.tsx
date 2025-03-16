"use client"
import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    // Only start updating time after component mounts on client
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }))
    }

    // Initial update
    updateTime()
    
    // Update every second
    const interval = setInterval(updateTime, 1000)

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [])

  // Return empty string during SSR
  if (!time) {
    return <span className="text-sm">--:--:--</span>
  }

  return <span className="text-sm">{time}</span>
} 