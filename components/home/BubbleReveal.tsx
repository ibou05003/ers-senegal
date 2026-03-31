'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import Button from '@/components/ui/Button'
import { Sun, Battery, Zap } from 'lucide-react'

const bubbles = [
  { src: '/images/wind-sunset.jpg', size: 200, x: '8%', y: '12%', delay: 0, float: 8 },
  { src: '/images/about-preview.jpg', size: 160, x: '68%', y: '8%', delay: 0.5, float: 10 },
  { src: '/images/renewable-sunset.jpg', size: 180, x: '72%', y: '56%', delay: 0.8, float: 9 },
  { src: '/images/community-education.jpg', size: 150, x: '10%', y: '55%', delay: 0.3, float: 12 },
  { src: '/images/battery-storage.jpg', size: 130, x: '60%', y: '76%', delay: 1, float: 11 },
]

export default function BubbleReveal() {
  const t = useTranslations('home')
  const locale = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Central bubble: expand from circle to fullscreen
  // Start small (circle), end covering viewport
  const centralScale = useTransform(scrollYProgress, [0.05, 0.45], [0.35, 1.5])
  const centralBorderRadius = useTransform(scrollYProgress, [0.05, 0.4], ['50%', '0%'])

  // Small bubbles fade and scale down
  const bubblesOpacity = useTransform(scrollYProgress, [0.05, 0.3], [1, 0])
  const bubblesScale = useTransform(scrollYProgress, [0.05, 0.3], [1, 0.3])

  // Overlay darkens as bubble expands
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 0.65])

  // Text fades in after bubble fills screen
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1])
  const textY = useTransform(scrollYProgress, [0.5, 0.65], [60, 0])

  // Service pills appear last
  const pillsOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1])
  const pillsY = useTransform(scrollYProgress, [0.65, 0.8], [40, 0])

  const services = [
    { icon: Sun, label: t('bubbleSolar'), color: 'border-ers-gold-400 text-ers-gold-400' },
    { icon: Battery, label: t('bubbleStorage'), color: 'border-ers-blue-300 text-ers-blue-300' },
    { icon: Zap, label: t('bubbleHybrid'), color: 'border-ers-green-300 text-ers-green-300' },
  ]

  return (
    <div ref={containerRef} className="relative" style={{ height: '350vh' }}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>

        {/* Floating bubbles with individual bob animation */}
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            style={{
              opacity: bubblesOpacity,
              scale: bubblesScale,
              position: 'absolute',
              left: bubble.x,
              top: bubble.y,
              width: bubble.size,
              height: bubble.size,
            }}
            className="z-[1] overflow-hidden rounded-full ring-4 ring-white/80"
            animate={{
              y: [0, -bubble.float, 0, bubble.float * 0.6, 0],
            }}
            transition={{
              duration: 5 + bubble.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bubble.delay,
            }}
          >
            <Image
              src={bubble.src}
              alt=""
              fill
              className="object-cover"
              sizes={`${bubble.size}px`}
            />
          </motion.div>
        ))}

        {/* Decorative gradient orbs (depth effect) */}
        <motion.div
          style={{ opacity: bubblesOpacity }}
          className="absolute left-[30%] top-[70%] z-0 h-20 w-20 rounded-full bg-ers-gold-200/40 blur-xl"
        />
        <motion.div
          style={{ opacity: bubblesOpacity }}
          className="absolute left-[65%] top-[15%] z-0 h-16 w-16 rounded-full bg-ers-blue-200/40 blur-xl"
        />
        <motion.div
          style={{ opacity: bubblesOpacity }}
          className="absolute left-[45%] top-[85%] z-0 h-12 w-12 rounded-full bg-ers-green-200/40 blur-lg"
        />

        {/* Central expanding bubble */}
        <motion.div
          style={{
            width: '100vmax',
            height: '100vmax',
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
            scale: centralScale,
            borderRadius: centralBorderRadius,
          }}
          className="absolute z-[2] overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/kahone-solar.jpg"
            alt="Centrale solaire de Kahone"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          {/* Dark overlay for text */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-ers-blue-900/70 via-ers-blue-900/50 to-ers-blue-900/80"
          />
        </motion.div>

        {/* Text content — revealed after expansion */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-[3] flex flex-col items-center px-4 text-center"
        >
          <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
            {t('bubbleTitle')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light text-white/80 md:text-lg">
            {t('bubbleSubtitle')}
          </p>

          {/* Service pills */}
          <motion.div
            style={{ opacity: pillsOpacity, y: pillsY }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.label}
                  className={`flex items-center gap-2.5 rounded-full border-2 bg-white/10 px-5 py-2.5 backdrop-blur-sm ${service.color}`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium text-white md:text-base">{service.label}</span>
                </div>
              )
            })}
          </motion.div>

          <motion.div
            style={{ opacity: pillsOpacity }}
            className="mt-8"
          >
            <Button href={`/${locale}/services`} variant="secondary" size="lg">
              {t('bubbleCta')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
