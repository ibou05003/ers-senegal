'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useLocale } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import FactBar from '@/components/home/FactBar'

export default function HeroSection() {
  const t = useTranslations('home')
  const locale = useLocale()
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 768px)')
    setShowVideo(mq.matches)
    const handler = (e: MediaQueryListEvent) => setShowVideo(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Hero poster image — <picture> with AVIF (155 KB) → WebP (180 KB) → JPG (550 KB) fallback. */}
      <picture aria-hidden>
        <source srcSet="/images/hero/video-poster.avif" type="image/avif" />
        <source srcSet="/images/hero/video-poster.webp" type="image/webp" />
        <img
          src="/images/hero/video-poster.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      </picture>

      {/* Video Background — desktop only, mounted client-side after media query check */}
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero/video-poster.jpg"
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          aria-label="Vue aérienne d'une centrale solaire ERS au Sénégal"
        >
          <source src="/videos/hero-solar.mp4" type="video/mp4" />
        </video>
      )}

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

        {/* Editorial fact bar — replaces chip pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <FactBar />
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
