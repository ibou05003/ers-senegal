import { useTranslations } from 'next-intl'
import HeroSection from '@/components/home/HeroSection'
import StatsCounter from '@/components/home/StatsCounter'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import PartnersLogos from '@/components/home/PartnersLogos'
import LatestNews from '@/components/home/LatestNews'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <>
      <HeroSection />
      <StatsCounter />

      {/* About preview */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div
                className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url('/images/about-preview.jpg')" }}
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {t('aboutTitle')}
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-ers-orange-500" />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {t('aboutText')}
              </p>
              <div className="mt-8">
                <Button href="/a-propos" variant="primary">
                  {t('aboutCta')}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ProjectsPreview />
      <PartnersLogos />
      <LatestNews />
    </>
  )
}
