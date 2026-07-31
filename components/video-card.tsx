"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  category: string
  year: string
  description: string
  thumbnail: string
  video: string
}

interface VideoCardProps {
  project: Project
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
}

export function VideoCard({ project, isHovered, onHoverChange }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [_isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    } else if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isHovered])

  return (
    <div
      className={cn(
        "group relative rounded-[1.75rem] md:rounded-[2rem] overflow-hidden md:cursor-none",
        "transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
        "h-[460px] md:h-[600px]",
        "w-[76vw] max-w-[300px] shrink-0 snap-center md:w-full md:max-w-none",
        isHovered ? "md:flex-[2.4] shadow-2xl shadow-black/50" : "md:flex-[0.8] md:opacity-90",
      )}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* Index label */}
      <div className="absolute top-6 left-6 z-20">
        <span className="font-mono text-xs tracking-[0.3em] text-foreground/70">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* Thumbnail Image */}
      <div className={cn("absolute inset-0 transition-opacity duration-700", isHovered ? "opacity-0" : "opacity-100")}>
        <img
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            !isHovered && "brightness-[0.8] md:grayscale md:brightness-[0.7]",
          )}
        />
      </div>

      {/* Video */}
      <div className={cn("absolute inset-0 transition-opacity duration-700", isHovered ? "opacity-100" : "opacity-0")}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="none"
          poster={project.thumbnail}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={project.video} type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Vertical title for collapsed state */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500",
          isHovered ? "opacity-0" : "opacity-100 md:opacity-100",
        )}
      >
        <span className="hidden md:inline-block font-mono text-xs tracking-[0.35em] text-foreground/80 [writing-mode:vertical-rl] rotate-180">
          {project.year}
        </span>
      </div>

      {/* Expanded content */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-5 md:p-8",
          "transition-all duration-700",
          isHovered ? "opacity-100" : "opacity-100 md:opacity-0 md:pointer-events-none",
        )}
      >
        <div
          className={cn(
            "relative backdrop-blur-xl bg-black/30 rounded-2xl p-5 md:p-6 border border-white/10 shadow-2xl",
            "transition-all duration-700 ease-out",
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-0 opacity-100 md:translate-y-6 md:opacity-0",
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1 text-left">
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{project.category}</p>
              <h3 className="text-foreground text-xl md:text-2xl font-medium leading-tight text-balance">
                {project.title}
              </h3>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-foreground/50 shrink-0 pt-1">
              {project.year}
            </span>
          </div>
          <p className="mt-4 pt-4 border-t border-white/10 text-sm leading-relaxed text-foreground/70 max-w-md">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}
