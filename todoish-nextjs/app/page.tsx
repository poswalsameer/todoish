"use client"

import { useState, useCallback } from "react"
import { Copy, Check, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const INSTALL_CMD = "npm install -g todoish"
const NPM_URL = "https://www.npmjs.com/package/todoish"

export default function Home() {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD)
    } catch {
      const el = document.createElement("textarea")
      el.value = INSTALL_CMD
      el.style.position = "absolute"
      el.style.left = "-9999px"
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center px-6 text-[#0f172a] font-sans">
      <main className="flex flex-col items-center w-full max-w-[700px] gap-8 sm:gap-10 text-center">
        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold font-mono tracking-tight bg-linear-to-r from-grad-start to-grad-end bg-clip-text text-transparent pb-3 select-none">
          Todoish
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#475569] max-w-[500px] leading-relaxed">
          A beautifully minimal terminal todo manager for developers.
        </p>

        {/* Install Command Block */}
        <Card className="flex items-center w-full max-w-[420px] bg-[#f8fafc] border-slate-200/60 rounded-xl shadow-sm p-1.5 transition-all hover:shadow-md">
          <div className="flex-1 overflow-x-auto text-left py-2 px-3 text-base font-mono text-[#0f172a] whitespace-nowrap scrollbar-hide">
            <span className="text-grad-end font-bold mr-2 select-none">$</span>
            {INSTALL_CMD}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className={`shrink-0 h-10 w-10 transition-colors ${copied
              ? "text-grad-end hover:text-grad-end bg-grad-end/10 hover:bg-grad-end/20"
              : "text-slate-400 hover:text-slate-700 hover:bg-slate-200/50"
              }`}
            aria-label={copied ? "Copied to clipboard" : "Copy install command"}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </Card>

        {/* npm Link */}
        <a
          href={NPM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-accent font-medium transition-all hover:text-grad-end"
        >
          <span className="group-hover:underline underline-offset-4">View on npm</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </main>
    </div>
  )
}

