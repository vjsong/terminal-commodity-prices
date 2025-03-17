import * as React from "react"
import { cn } from "@/lib/utils"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Terminal({
  children,
  className,
  ...props
}: TerminalProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-green-800/50 bg-black/50 p-2 sm:p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Terminal.displayName = "Terminal"

