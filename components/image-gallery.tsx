"use client"

import { useState, useEffect, useCallback, useMemo } from "react"

interface GalleryImage {
  id: number
  src: string
  title: string
  category: string
  description: string
  section: string
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: "/works/niidor-home.jpg",
    title: "Niidor 品牌旗舰店首页",
    category: "整店视觉",
    section: "亚马逊店铺 · 整店视觉",
    description:
      "Niidor 隐形内衣品牌亚马逊旗舰店首页整体视觉设计。以「Best Seller in Adhesive Bras」为核心，串联品牌 Banner、产品分类、场景视频与品牌故事，统一色调与排版节奏，强化品牌调性并引导转化。",
  },
  {
    id: 9,
    src: "/works/falorda-home.jpg",
    title: "Falorda 品牌旗舰店首页",
    category: "整店视觉",
    section: "亚马逊店铺 · 整店视觉",
    description:
      "Falorda「Redefining Comfort, Shaping Confidence」品牌旗舰店首页。涵盖塑身衣、无痕文胸、内裤三大分类，图文层次分明、品牌故事完整，传递舒适与自信的品牌理念。",
  },
  {
    id: 2,
    src: "/works/niidor-nipple-covers.jpg",
    title: "乳贴分类页 · Nipple Covers",
    category: "分类页",
    section: "亚马逊店铺 · 分类页",
    description:
      "「Unleash Your Natural Self / No Bra, No Limits」乳贴分类页。按圆形、微提、三角、组合套装分区陈列，草地与海边场景模特图搭配产品橱窗，画面清爽统一，突出「无束缚」自然穿着体验。",
  },
  {
    id: 3,
    src: "/works/niidor-fabric-sticky-bra.jpg",
    title: "布艺隐形文胸分类页",
    category: "分类页",
    section: "亚马逊店铺 · 分类页",
    description:
      "Niidor Fabric Series 布艺隐形文胸分类页。海边场景大图配合 Best Seller 产品卡片，统一价格、评分与卖点排版，画面高级连贯，引导用户快速浏览与下单。",
  },
  {
    id: 4,
    src: "/works/niidor-silicone-bra.jpg",
    title: "硅胶隐形文胸分类页",
    category: "分类页",
    section: "亚马逊店铺 · 分类页",
    description:
      "Niidor Silicone Series 硅胶隐形文胸分类页。100% 亲肤硅胶卖点主图搭配多色产品卡片，色调干净统一，突出「隐形、聚拢、贴合任意穿搭」的核心卖点。",
  },
  {
    id: 5,
    src: "/works/niidor-bra-inserts.jpg",
    title: "胸垫插片分类页 · Bra Inserts",
    category: "分类页",
    section: "亚马逊店铺 · 分类页",
    description:
      "「Barely-There Natural Lift」胸垫插片分类页。以「Your Secret Weapon for Seamless Style」为主题，场景与产品图交错排版，呈现秒变穿搭的自然提拉效果。",
  },
  {
    id: 6,
    src: "/works/niidor-spring.jpg",
    title: "春季会员日活动页",
    category: "活动专题",
    section: "亚马逊店铺 · 活动专题",
    description:
      "「Hello Spring / Step Into the New Season」春季会员日活动页。清新绿意花园场景，贴合春日氛围统一品牌视觉，涵盖活动 Banner、分类入口与福利引导，助力大促转化。",
  },
  {
    id: 7,
    src: "/works/niidor-wedding.jpg",
    title: "婚礼系列专题页",
    category: "活动专题",
    section: "亚马逊店铺 · 活动专题",
    description:
      "「Your Dream Dress Deserves the Perfect Secret」婚礼系列专题页。以婚纱唯美场景串联硅胶文胸、磁扣、蕾丝款与乳贴，营造婚礼当天的隐形自信氛围。",
  },
  {
    id: 8,
    src: "/works/niidor-new-arrivals.jpg",
    title: "新品上市专题页 · New Arrivals",
    category: "活动专题",
    section: "亚马逊店铺 · 活动专题",
    description:
      "「Invisible Support Reinvented」2026 新品上市专题页。左右图文交错排版呈现磁扣款、硅胶款等新品，画面简洁高级，突出创新科技与穿着体验。",
  },
  {
    id: 10,
    src: "/works/fabric-bra-detail.jpg",
    title: "布艺文胸产品详情页",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "布艺隐形文胸产品详情页设计。以「Soft & Comfortable / Strong Stickiness / Long-lasting Adhesion」六宫格呈现产品卖点，配合材质结构拆解与尺码表，米色调统一高级。修图 / 拍摄 / 排版创意。",
  },
  {
    id: 14,
    src: "/works/thong-white.jpg",
    title: "蕾丝丁字裤详情页 · 白色调",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "「Lace Thong Underwear For Women」蕾丝丁字裤详情页（白色调）。以「White — a fresh start every day」为主题，呈现无痕、防走光、优质面料等卖点，配合穿搭建议与尺码表，画面清透高级。",
  },
  {
    id: 15,
    src: "/works/thong-black-white.jpg",
    title: "蕾丝丁字裤详情页 · 黑白调",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "蕾丝丁字裤详情页（黑白调）。突出「No visible lines, Say Goodbye To VPL」无痕卖点，含面料成分、软硬弹性指数、洗涤图标与尺码表，黑白高对比排版利落干净。",
  },
  {
    id: 16,
    src: "/works/thong-black-pink.jpg",
    title: "蕾丝丁字裤详情页 · 黑粉调",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "蕾丝丁字裤详情页（黑粉调）。以「Seamless & Wedgie-free」为核心，粉黑对比呈现甜酷两种穿搭风格，搭配礼盒场景与尺码信息，风格年轻活力。",
  },
  {
    id: 17,
    src: "/works/thong-black-pink-purple.jpg",
    title: "蕾丝丁字裤详情页 · 黑白粉紫调",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "蕾丝丁字裤详情页（黑白粉紫调）。多配色场景整合呈现，突出无痕、四季适穿与理想礼物卖点，紫粉柔和色调统一，画面温柔高级。",
  },
  {
    id: 11,
    src: "/works/fabric-bra-aplus.jpg",
    title: "布艺文胸 A+ 连屏设计",
    category: "橱窗 A+ 连屏",
    section: "橱窗 A+ · 连屏优化",
    description:
      "Niidor Fabric Series 布艺文胸 A+ 页面连屏设计。沉浸式全屏无缝衔接，串联穿戴步骤、环保理念、3D 杯型与场景搭配，米黄色调统一，层次高级耐看。",
  },
  {
    id: 12,
    src: "/works/falorda-seamless-skin.jpg",
    title: "小 U 领无痕文胸橱窗 · 肤色",
    category: "橱窗 A+ 连屏",
    section: "橱窗 A+ · 连屏优化",
    description:
      "Falorda 小 U 领无痕文胸橱窗优化连屏（肤色版）。以「W Jelly Strip & All-Round Support / Full Coverage & Anti-Spill / Widened Wing」分屏呈现核心卖点，画面连贯统一，突出承托与舒适。",
  },
  {
    id: 13,
    src: "/works/falorda-seamless-pink.jpg",
    title: "小 U 领无痕文胸橱窗 · 粉色",
    category: "橱窗 A+ 连屏",
    section: "橱窗 A+ · 连屏优化",
    description:
      "Falorda 小 U 领无痕文胸橱窗优化连屏（粉色版）。与肤色版共用统一版式与卖点结构，通过色调切换适配不同产品配色，保持品牌视觉一致性。",
  },
]

const sectionOrder = [
  "亚马逊店铺 · 整店视觉",
  "亚马逊店铺 · 分类页",
  "亚马逊店铺 · 活动专题",
  "产品详情页 · A+",
  "橱窗 A+ · 连屏优化",
]

export function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const grouped = useMemo(() => {
    return sectionOrder
      .map((section) => ({
        section,
        items: images.filter((img) => img.section === section),
      }))
      .filter((g) => g.items.length > 0)
  }, [])

  const close = useCallback(() => setActiveIndex(null), [])
  const showNext = useCallback(() => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)), [])
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [],
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [activeIndex, close, showNext, showPrev])

  const active = activeIndex === null ? null : images[activeIndex]

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3">
            <p className="font-mono text-xs tracking-[0.35em] text-accent uppercase">Gallery</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-balance">图片作品集</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            按项目类别分组展示，缩略图预览。点击任意作品可放大查看完整长图与设计说明。
          </p>
        </div>

        <div className="space-y-16">
          {grouped.map((group) => (
            <div key={group.section}>
              <div className="mb-6 flex items-center gap-4">
                <h3 className="text-lg md:text-xl font-medium text-foreground whitespace-nowrap">{group.section}</h3>
                <span className="font-mono text-xs text-muted-foreground">{group.items.length} 件</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((image) => {
                  const globalIndex = images.findIndex((img) => img.id === image.id)
                  return (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => setActiveIndex(globalIndex)}
                      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={`查看作品 ${image.title}`}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase">{image.category}</p>
                        <h4 className="mt-1 text-sm font-medium text-foreground leading-snug text-balance line-clamp-2">
                          {image.title}
                        </h4>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-8">
            <div className="min-w-0" onClick={(e) => e.stopPropagation()}>
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{active.category}</p>
              <h3 className="truncate text-sm md:text-base font-medium text-white">{active.title}</h3>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  showPrev()
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="上一张"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  showNext()
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="下一张"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="关闭"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8" onClick={close}>
            <figure className="mx-auto max-w-3xl" onClick={(e) => e.stopPropagation()}>
              <img
                src={active.src || "/placeholder.svg"}
                alt={active.title}
                className="w-full rounded-xl object-contain shadow-2xl"
              />
              <figcaption className="mx-auto mt-6 max-w-2xl pb-10 text-center">
                <p className="text-sm leading-relaxed text-white/70">{active.description}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </section>
  )
}
