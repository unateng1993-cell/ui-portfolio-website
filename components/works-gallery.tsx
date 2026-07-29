"use client"

import { useState } from "react"
import { VideoCard } from "./video-card"
import { CustomCursor } from "./custom-cursor"

const projects = [
  {
    id: 1,
    title: "隐形贴身内衣",
    category: "拍摄 · 精修 · 排版",
    year: "AMAZON BS",
    description: "隐形无痕粘性文胸橱窗视觉，修图、拍摄、排版创意结合 AIGC 合成，打造干净高级的商品呈现。",
    thumbnail: "/works-bg/intimate-apparel.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 2,
    title: "AIGC 材质渲染",
    category: "智能实时渲染",
    year: "AIGC",
    description: "AI 智能实时渲染，仿真还原多元面料肌理，自动优化光影质感，风格统一高效出图。",
    thumbnail: "/works-bg/aigc-material.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 3,
    title: "产品拍摄精修",
    category: "实景拍摄 · 调色",
    year: "STUDIO",
    description: "专业产品实景拍摄，精准还原色彩与材质细节，精细修图调色，去除瑕疵，打造精致高级商品视觉。",
    thumbnail: "/works-bg/product-retouch.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 4,
    title: "工具金属产品",
    category: "拍摄 · 精修 · 排版",
    year: "HARDWARE",
    description: "聚焦金属产品拍摄，精准还原拉丝、镜面、磨砂质感，优化反光瑕疵，统一色调光影。",
    thumbnail: "/works-bg/tools-metal.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 5,
    title: "家居场景整合",
    category: "场景拍摄 · 精修",
    year: "HOME",
    description: "聚焦家居整合场景拍摄，还原居家实景氛围，融合空间搭配与产品细节，营造自然治愈的全屋视觉。",
    thumbnail: "/works-bg/home-scene.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: 6,
    title: "品牌旗舰店页面",
    category: "全页面 · A+ 设计",
    year: "BRAND",
    description: "沉浸式连屏视觉排版，全屏无缝衔接设计，统一色调光影，强化品牌质感，提升浏览观感与转化。",
    thumbnail: "/works-bg/brand-store.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
]

export function WorksGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <>
      <CustomCursor isActive={hoveredId !== null} />
      <div className="container mx-auto px-6">
        <div className="flex flex-row gap-4 items-stretch overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:snap-none">
          {projects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHoverChange={(hovered) => setHoveredId(hovered ? project.id : null)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
