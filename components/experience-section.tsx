const experiences = [
  {
    period: "2024.02 — 至今",
    company: "深圳市爱腾途科技有限公司",
    role: "视觉设计师",
    points:
      "亚马逊平台视觉设计：旗舰店首页、活动节日、新品及各类目首页，商品橱窗 / A+ / 品牌故事页全套独立拍摄制作排版；独立站首页、产品列表页、详情页、活动落地页、关于我们及节日促销海报邮件；TikTok Shop 视频模版、商品图与活动 Banner 素材设计；维护跨平台品牌视觉一致性，遵循亚马逊图片规范，配合运营做 AB 测试与数据复盘。",
  },
  {
    period: "2023.02 — 2023.12",
    company: "深圳市领拓户外用品有限公司",
    role: "设计师",
    points:
      "亚马逊平台商品详情页设计、旗舰店装修与活动页面视觉；独立站详情页、海报 Banner 及营销活动页面设计；产品静物拍摄、精修与图文排版视觉优化；产品视频拍摄剪辑后期与全平台素材输出；TikTok 账号搭建、内容策划及拍摄剪辑发布运营。",
  },
  {
    period: "2022.02 — 2022.12",
    company: "深圳市拓海德科技有限公司",
    role: "美工主管",
    points:
      "负责亚马逊精品全品类图片设计与新品印刷图案设计，统筹团队分工排期，对接业务部门对齐新品节点，做好图片审核、样品管理、周度复盘汇报与人员绩效考核；统筹摄影器材道具运维采购、视频拍摄布景，整理产品合规资料并辅助处理店铺侵权申诉。",
  },
  {
    period: "2021.04 — 2021.09",
    company: "深圳市佰事德创新科技有限公司",
    role: "产品部主管",
    points:
      "统筹美工组、英文编辑组、知识产权审核组多小组日常运营与任务分派，跟进项目进度并完成月度总结汇报；负责新员工入职、岗位技能及 ERP 系统专项培训；制定并落地部门绩效考核制度；推进公司自研 ERP 系统落地使用，收集反馈推动系统优化迭代。",
  },
  {
    period: "2019.09 — 2021.04",
    company: "深圳市兴熠电子商务有限公司",
    role: "美工主管",
    points:
      "负责亚马逊电子产品主图、A+ 页面拍摄精修，独立设计品牌店铺首页视觉，制作产品及广告宣传短视频，同时统筹部门工作分配、日常管理与工作总结汇报。",
  },
  {
    period: "2016.07 — 2019.04",
    company: "深圳市润步科技有限公司",
    role: "美工主管",
    points:
      "负责多平台多品类产品拍摄精修、活动海报及店铺 Banner 设计；开展美工团队专业技能培训，严格审核图片版权合规与出品质量；统筹岗位分工、制定并落地人员绩效考核，定期完成部门工作复盘与汇报。",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-border/60">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div className="space-y-4 md:sticky md:top-24 self-start">
            <p className="font-mono text-xs tracking-[0.35em] uppercase text-accent">工作经历</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-snug text-balance">
              十年跨境电商视觉设计履历
            </h2>
            <p className="text-foreground/60 leading-relaxed text-sm">
              从美工到部门主管，深耕多平台、多品类的视觉设计与团队统筹。
            </p>
          </div>

          <ol className="relative border-l border-border/60 pl-8 space-y-12">
            {experiences.map((exp) => (
              <li key={exp.company} className="relative">
                <span className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-xs tracking-widest text-muted-foreground">{exp.period}</p>
                <h3 className="mt-2 text-xl font-medium">{exp.company}</h3>
                <p className="mt-1 text-sm text-accent">{exp.role}</p>
                <p className="mt-3 text-foreground/60 leading-relaxed text-pretty">{exp.points}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
