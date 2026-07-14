import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WorksGallery } from "@/components/works-gallery"
import { ImageGallery } from "@/components/image-gallery"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <HeroSection />

        {/* Works Gallery */}
        <section id="works" className="py-16">
          <div className="container mx-auto px-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="space-y-3">
                <p className="font-mono text-xs tracking-[0.35em] uppercase text-accent">精选作品</p>
                <h2 className="text-3xl md:text-4xl font-medium leading-snug text-balance">
                  拍摄 · 精修 · 排版 · AIGC
                </h2>
              </div>
              <p className="text-foreground/60 text-sm max-w-sm leading-relaxed">
                悬停查看每个项目的视觉呈现，涵盖跨境电商全品类的商品视觉与品牌页面设计。
              </p>
            </div>
          </div>
          <WorksGallery />
        </section>

        <ImageGallery />

        <AboutSection />
        <ExperienceSection />
      </main>

      <ContactSection />
    </div>
  )
}
