const experiences = [
  {
    period: "2023.02 — 2023.12",
    company: "深圳市爱腾途科技有限公司",
    role: "视觉设计师",
    points:
      "亚马逊 / 独立站 / TikTok Shop 全平台视觉设计，涵盖首页、活动、新品、A+ 与品牌故事页；维护跨平台品牌视觉一致性，遵循平台规范并配合运营做 AB 测试与数据复盘。",
  },
  {
    period: "2022.02 — 2022.12",
    company: "深圳市领拓户外用品有限公司",
    role: "设计师",
    points:
      "负责亚马逊与独立站详情页、旗舰店装修及营销活动视觉；产品静物拍摄、精修与图文排版；视频拍摄剪辑与全平台素材输出，搭建并运营 TikTok 账号。",
  },
  {
    period: "2021.04 — 2021.09",
    company: "深圳市拓海德科技有限公司",
    role: "美工主管",
    points:
      "负责亚马逊精品全品类图片与新品印刷图案设计，统筹团队分工排期，对接业务对齐新品节点，做好图片审核、样品管理、周度复盘与绩效考核。",
  },
  {
    period: "2019.09 — 2021.04",
    company: "深圳市佰事德创新科技有限公司",
    role: "产品部主管",
    points:
      "统筹美工组、英文编辑组、知识产权审核组的日常运营与任务分派，负责新员工培训、绩效考核制度落地，推进自研 ERP 系统的使用与迭代优化。",
  },
  {
    period: "2016.07 — 2019.04",
    company: "深圳市兴熠 / 润步科技",
    role: "美工主管",
    points:
      "负责多平台多品类产品拍摄精修、活动海报及店铺 BANNER 设计；开展美工团队技能培训，严格审核版权合规与出品质量，统筹岗位分工与人员绩效。",
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
