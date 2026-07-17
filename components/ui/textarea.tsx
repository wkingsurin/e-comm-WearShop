import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full max-h-32 rounded-md border border-black/15 bg-white px-3 py-[6px] text-base shadow-xs outline-none placeholder:text-black/25 font-sans focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-black/15 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 disabled:hover:border-black/15 hover:border-black/25 transtion-brand transition-[color,box-shadow,border] tracking-wider leading-lg",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
