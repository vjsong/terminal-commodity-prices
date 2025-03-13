import { Clock } from "lucide-react"

interface TerminalHeaderProps {
  currentTime: Date
}

export default function TerminalHeader({ currentTime }: TerminalHeaderProps) {
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
  )
}

