'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useLocale } from 'next-intl'
import { ArrowRight } from 'lucide-react'

const VALUE_PROPS_FR = [
  'Développer l\'énergie solaire',
  'Créer des emplois locaux',
  'Protéger l\'environnement',
]

const VALUE_PROPS_EN = [
  'Develop solar energy',
  'Create local jobs',
  'Protect the environment',
]

export default function HeroSection() {
  const t = useTranslations('home')
  const locale = useLocale()
  const valueProps = locale === 'fr' ? VALUE_PROPS_FR : VALUE_PROPS_EN

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Fallback image (behind video) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/placeholder-hero.jpg')" }}
      />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/placeholder-hero.jpg"
        className="absolute inset-0 z-[1] h-full w-full object-cover"
      >
        <source src="/videos/hero-solar.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-ers-blue-900/75 via-ers-blue-900/50 to-ers-blue-900/85" />

      {/* Content */}
      <div className="container-wide relative z-[3] mx-auto px-4 py-32 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            Energy Resources Sénégal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-5xl text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl lg:text-7xl"
        >
          {t('heroTitle')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/75 md:text-xl"
        >
          {t('heroSubtitle')}
        </motion.p>

        {/* Value props — Atlas style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mx-auto mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 md:gap-8"
        >
          {valueProps.map((prop, i) => (
            <motion.span
              key={prop}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm md:text-base"
            >
              <span className="h-2 w-2 rounded-full bg-ers-gold-400" />
              {prop}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={`/${locale}/projets`} variant="secondary" size="lg">
            {t('heroCta')}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={`/${locale}/contact`} variant="white" size="lg">
            {t('heroCtaSecondary')}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 z-[3] -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  )
}
