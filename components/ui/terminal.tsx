import * as React from "react"
import { cn } from "@/lib/utils"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {}

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded border border-green-800 bg-black p-4 font-mono text-green-500 shadow-md", className)}
      {...props}
    >
      {children}
    </div>
  )
})

Terminal.displayName = "Terminal"

export { Terminal }

