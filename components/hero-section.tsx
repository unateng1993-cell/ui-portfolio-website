const platforms = ["亚马逊", "速卖通", "沃尔玛", "eBay", "Shopee", "Lazada", "独立站", "TikTok Shop"]

export function HeroSection() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8">
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-accent">
            Visual Art Design · Graphic Designer
          </p>

          <h1 className="text-[15vw] md:text-[10vw] leading-[0.9] font-black tracking-tight text-balance">
            视觉设计师
          </h1>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-16 items-end">
            <p className="text-lg md:text-2xl leading-relaxed text-foreground/80 text-pretty max-w-2xl">
              你好，我是<span className="text-foreground font-medium">邓书峰</span>。拥有 8
              年平面设计实战经验，擅长品牌视觉设计，拥有丰富的跨境平台图片设计经验，助力品牌形象升级与海外市场传播。
            </p>

            <div className="grid grid-cols-2 gap-6 font-mono text-xs tracking-widest uppercase">
              <div className="space-y-1">
                <p className="text-muted-foreground">经验</p>
                <p className="text-foreground text-sm">8 年 +</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">地点</p>
                <p className="text-foreground text-sm">深圳市</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">方向</p>
                <p className="text-foreground text-sm">跨境电商</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">状态</p>
                <p className="text-accent text-sm">开放合作</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform marquee */}
      <div className="mt-16 border-y border-border/60 py-4 overflow-hidden">
        <div className="flex items-center gap-8 font-mono text-sm tracking-[0.25em] uppercase text-muted-foreground whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {[...platforms, ...platforms, ...platforms].map((p, i) => (
            <span key={i} className="flex items-center gap-8">
              {p}
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
