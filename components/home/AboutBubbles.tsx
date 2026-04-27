'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const bubbles = [
  { src: '/images/projects/kahone-vue-panoramique.jpg', size: 130, top: '0%', left: '0%', delay: 0.2 },
  { src: '/images/team/equipe-corporate.jpg', size: 300, top: '15%', left: '12%', delay: 0, featured: true },
  { src: '/images/team/equipe-controle.jpg', size: 140, top: '0%', left: '55%', delay: 0.3 },
  { src: '/images/projects/kahone-galerie-1.jpg', size: 120, top: '65%', left: '55%', delay: 0.4 },
]

export default function AboutBubbles() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <section className="py-28 md:py-36">
      <div className="container-wide mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — Bubbles */}
          <div className="relative mx-auto h-[480px] w-full max-w-[520px] lg:h-[540px]">
            {bubbles.map((bubble, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.8,
                  delay: bubble.delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`absolute overflow-hidden rounded-full ${
                  bubble.featured
                    ? 'z-10 shadow-2xl ring-[6px] ring-white'
                    : 'z-[5] shadow-lg ring-4 ring-white/80'
                }`}
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  top: bubble.top,
                  left: bubble.left,
                }}
              >
                <Image
                  src={bubble.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes={`${bubble.size}px`}
                />
                {/* Subtle shine overlay on featured */}
                {bubble.featured && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
                )}
              </motion.div>
            ))}

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute left-[40%] top-[75%] h-20 w-20 rounded-full bg-ers-gold-200/30 blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute left-[65%] top-[35%] h-14 w-14 rounded-full bg-ers-blue-200/30 blur-xl"
            />
          </div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-5xl">
              ERS SA
              <br />
              <span className="text-gradient-gold">en un coup d&apos;œil</span>
            </h2>
            <p className="mt-8 text-lg font-light leading-relaxed text-gray-600">
              {t('aboutText')}
            </p>
            <p className="mt-4 text-lg font-light leading-relaxed text-gray-600">
              {t('aboutExtra')}
            </p>
            <div className="mt-10">
              <Button href={`/${locale}/a-propos/histoire`} variant="outline">
                {t('aboutCta')}
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
