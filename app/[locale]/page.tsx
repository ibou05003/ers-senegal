import { useTranslations } from 'next-intl'
import HeroSection from '@/components/home/HeroSection'
import StatsCounter from '@/components/home/StatsCounter'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import PartnersLogos from '@/components/home/PartnersLogos'
import LatestNews from '@/components/home/LatestNews'
import QuoteBanner from '@/components/home/QuoteBanner'
import BubbleReveal from '@/components/home/BubbleReveal'
import PreFooterCTA from '@/components/home/PreFooterCTA'

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <>
      <HeroSection />
      <StatsCounter />


      <QuoteBanner />
      <BubbleReveal />
      <ProjectsPreview />
      <PartnersLogos />
      <LatestNews />
      <PreFooterCTA />
    </>
  )
}
