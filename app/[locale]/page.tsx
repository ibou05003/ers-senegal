import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'
import HeroSection from '@/components/home/HeroSection'
import StatsCounter from '@/components/home/StatsCounter'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import PartnersLogos from '@/components/home/PartnersLogos'
import LatestNews from '@/components/home/LatestNews'
import QuoteBanner from '@/components/home/QuoteBanner'
import PreFooterCTA from '@/components/home/PreFooterCTA'

// BubbleReveal is heavy (framer-motion + scroll observer + 5 images, 350vh tall) — lazy load below the fold
const BubbleReveal = dynamic(() => import('@/components/home/BubbleReveal'), {
  loading: () => <div style={{ height: '350vh' }} />,
})

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
