'use client'

import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { TIMELINE_EVENTS } from '@/lib/constants'

export default function Timeline() {
  const t = useTranslations('about')

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-ers-green-200 md:block" />

      <div className="space-y-12">
        {TIMELINE_EVENTS.map((event, index) => (
          <ScrollReveal
            key={event.year}
            direction={index % 2 === 0 ? 'left' : 'right'}
            delay={index * 0.1}
          >
            <div
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <span className="text-sm font-bold text-ers-orange-600">
                    {event.year}
                  </span>
                  <p className="mt-2 text-gray-700">{t(event.key)}</p>
                </div>
              </div>

              <div className="relative z-10 hidden md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ers-green-800 text-sm font-bold text-white shadow-lg">
                  {event.year.toString().slice(-2)}
                </div>
              </div>

              <div className="hidden flex-1 md:block" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
