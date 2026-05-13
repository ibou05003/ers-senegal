import dynamic from 'next/dynamic'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import { Landmark, Globe, Shuffle, Award, ArrowRight } from 'lucide-react'

// Below-the-fold animations heavy with framer-motion — defer until scroll into view
const AboutBubbles = dynamic(() => import('@/components/home/AboutBubbles'), {
  loading: () => <div style={{ height: '600px' }} />,
})

export default function AboutPage() {
  const t = useTranslations('about')
  const locale = useLocale()

  const values = [
    { icon: Landmark, title: t('valueSouverainete'), desc: t('valueSouveraineteDesc'), color: 'from-ers-blue-400 to-ers-blue-600' },
    { icon: Globe, title: t('valueOuverture'), desc: t('valueOuvertureDesc'), color: 'from-ers-blue-600 to-ers-blue-800' },
    { icon: Shuffle, title: t('valuePolyvalence'), desc: t('valuePolyvalenceDesc'), color: 'from-ers-gold-400 to-ers-gold-600' },
    { icon: Award, title: t('valueExpertise'), desc: t('valueExpertiseDesc'), color: 'from-ers-green-400 to-ers-green-600' },
  ]

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/team/equipe-corporate.jpg" />

      <AboutBubbles />

      {/* Mission & Vision — text left, bubbles right */}
      <section className="py-24 md:py-32">
        <div className="container-wide mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Left — Text */}
            <div className="flex flex-col justify-center">
              
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  {t('missionTitle')}
                </h2>
                <p className="mt-2 text-base text-gray-500">{t('missionSubtitle')}</p>
                <div className="mt-4 h-1 w-16 rounded-full bg-ers-gold-500" />
              

              
                <div className="mt-10 space-y-6">
                  <div className="rounded-2xl border border-ers-blue-100 bg-ers-blue-50/50 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-ers-blue-600">Mission</h3>
                    <p className="mt-3 text-base font-light leading-relaxed text-gray-700">{t('mission')}</p>
                  </div>
                  <div className="rounded-2xl border border-ers-gold-100 bg-ers-gold-50/50 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-ers-gold-600">Vision 2030</h3>
                    <p className="mt-3 text-base font-light leading-relaxed text-gray-700">{t('vision')}</p>
                  </div>
                </div>
              
            </div>

            {/* Right — 3 Bubbles */}
            <div className="relative mx-auto h-[460px] w-full max-w-[500px] lg:h-[500px]">
              {/* Main bubble — Kahone solar */}
              
                <div className="absolute left-[5%] top-[12%] z-10 h-[300px] w-[300px] overflow-hidden rounded-full shadow-2xl ring-[6px] ring-white lg:h-[340px] lg:w-[340px]">
                  <Image src="/images/projects/kahone-centrale-solaire-aerienne.jpg" alt="Centrale de Kahone" fill className="object-cover" sizes="340px" />
                </div>
              
              {/* Small bubble — team */}
              
                <div className="absolute right-[0%] top-[0%] z-20 h-[150px] w-[150px] overflow-hidden rounded-full shadow-lg ring-4 ring-white">
                  <Image src="/images/team/equipe-corporate.jpg" alt="Équipe" fill className="object-cover" sizes="150px" />
                </div>
              
              {/* Small bubble — sunset */}
              
                <div className="absolute bottom-[2%] right-[5%] z-20 h-[140px] w-[140px] overflow-hidden rounded-full shadow-lg ring-4 ring-white">
                  <Image src="/images/projects/kahone-vue-panoramique.jpg" alt="Énergie renouvelable" fill className="object-cover" sizes="140px" />
                </div>
              
              {/* Decorative orbs */}
              <div className="absolute bottom-[25%] left-[0%] h-20 w-20 rounded-full bg-ers-gold-200/30 blur-2xl" />
              <div className="absolute right-[30%] top-[0%] h-12 w-12 rounded-full bg-ers-blue-200/30 blur-xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Values — 2x2 premium cards */}
      <section className="py-24 md:py-32">
        <div className="container-wide mx-auto px-4 lg:px-8">
          
            <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              {t('values')}
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-ers-gold-500" />
          

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-10 transition-all duration-300 hover:shadow-xl">
                  {/* Colored top accent */}
                  <div className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${v.color}`} />
                  {/* Number watermark */}
                  <span className="absolute right-6 top-4 text-7xl font-bold text-gray-100">
                    0{i + 1}
                  </span>
                  <div className="relative">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.color} text-white`}>
                      <v.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{v.title}</h3>
                    <p className="text-base font-light leading-relaxed text-gray-500">{v.desc}</p>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </section>

      {/* Quick links to sub-pages */}
      <section className="py-24 md:py-32 bg-ers-blue-900">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Découvrez notre histoire et notre équipe
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg font-light text-white/60">
              Plus de 10 ans d&apos;engagement pour la transition énergétique au Sénégal
            </p>
          

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Notre Histoire', href: `/${locale}/a-propos/histoire` },
              { label: 'Mission & Vision', href: `/${locale}/a-propos/mission` },
              { label: 'Notre Équipe', href: `/${locale}/a-propos/equipe` },
              { label: 'Nos Partenaires', href: `/${locale}/a-propos/partenaires` },
            ].map((link, i) => (
              
                <Button href={link.href} variant="white" className="w-full justify-between">
                  {link.label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
