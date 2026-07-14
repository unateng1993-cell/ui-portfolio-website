"use client"

import { useState } from "react"

const links = [
  { label: "作品", href: "#works" },
  { label: "图片", href: "#gallery" },
  { label: "关于", href: "#about" },
  { label: "经历", href: "#experience" },
  { label: "联系", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-medium tracking-wide">邓书峰</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Deng Shufeng
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-[0.2em] uppercase">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-accent-foreground hover:opacity-90 transition-opacity"
        >
          合作洽谈
        </a>

        <button
          className="md:hidden flex items-center justify-center w-9 h-9 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="切换菜单"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className="block w-5 h-px bg-foreground" />
            <span className="block w-5 h-px bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/50 bg-background/95 px-6 py-4 flex flex-col gap-4 font-mono text-sm tracking-[0.2em] uppercase">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
