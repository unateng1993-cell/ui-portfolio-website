const skills = [
  {
    title: "品牌视觉设计",
    desc: "构思视觉呈现与风格把控，统一跨平台风格，强化品牌识别度，助力品牌形象升级。",
  },
  {
    title: "跨境平台图片",
    desc: "旗舰店首页、活动节日、新品、类目首页，商品橱窗 / A+ / 品牌故事页面全套制作排版。",
  },
  {
    title: "拍摄与精修",
    desc: "熟练使用相机，独立拍摄制作图片；精细修图调色，优化光影质感，去除瑕疵杂质。",
  },
  {
    title: "AIGC 合成渲染",
    desc: "AI 智能实时渲染，仿真还原多元面料肌理，自动优化光影质感，高效打造高级商品视觉。",
  },
  {
    title: "视频剪辑",
    desc: "产品视频拍摄、剪辑、后期制作与全平台视频素材输出，TikTok 内容策划与运营。",
  },
  {
    title: "团队管理",
    desc: "丰富的美工部门管理经验，统筹分工排期、绩效考核，具备跨部门沟通协调能力。",
  },
]

const categories = ["服装", "家居", "母婴", "汽配", "工具", "玩具", "美妆", "户外", "3C"]

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-border/60">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16">
          <div className="space-y-8">
            <div className="rounded-3xl border border-border/60 bg-secondary/40 p-8 space-y-6">
              <div className="space-y-2">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">邓书峰</p>
                <p className="text-lg font-medium leading-snug">视觉设计师 · 8 年平面设计实战经验</p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  深圳 · 专注品牌视觉与跨境电商图片设计
                </p>
              </div>
              <div className="space-y-4 border-t border-border/60 pt-6">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">擅长类目</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border px-3 py-1 text-sm text-foreground/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <p className="font-mono text-xs tracking-[0.35em] uppercase text-accent">关于我</p>
              <h2 className="text-3xl md:text-4xl font-medium leading-snug text-balance">
                具备完整的品牌视觉设计与项目执行经验，从构思到落地全流程把控。
              </h2>
              <p className="text-foreground/70 leading-relaxed text-pretty">
                8 年平面设计实战经验，熟悉多个跨境平台的图片要求与卖点。严格遵循平台图片规范，定期优化主图与
                A+，配合运营做 AB 测试与数据复盘，助力品牌在海外市场高效传播。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {skills.map((skill, i) => (
                <div key={skill.title} className="space-y-2 border-t border-border/60 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-medium">{skill.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
