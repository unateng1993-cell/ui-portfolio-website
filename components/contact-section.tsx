const contacts = [
  { label: "邮箱", value: "379125311@QQ.COM", href: "mailto:379125311@qq.com" },
  { label: "电话", value: "123 4567 8901", href: "tel:12345678901" },
  { label: "地点", value: "深圳市 · 中国", href: null },
]

export function ContactSection() {
  return (
    <footer id="contact" className="py-24 border-t border-border/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <p className="font-mono text-xs tracking-[0.35em] uppercase text-accent">联系合作</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-balance">
              让品牌视觉
              <br />
              更进一步。
            </h2>
            <a
              href="mailto:379125311@qq.com"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase text-accent-foreground hover:opacity-90 transition-opacity"
            >
              发送邮件
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 border-t border-border/60 pt-10">
            {contacts.map((c) => (
              <div key={c.label} className="space-y-2">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="text-lg text-foreground hover:text-accent transition-colors break-all">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-lg text-foreground">{c.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border/60 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            <span>© 2026 DENG SHUFENG · ALL RIGHTS RESERVED</span>
            <span>Portfolio Design 2024 — 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
