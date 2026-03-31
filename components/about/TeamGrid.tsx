'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { TEAM_MEMBERS } from '@/lib/constants'

export default function TeamGrid() {
  const locale = useLocale()

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {TEAM_MEMBERS.map((member, i) => (
        <ScrollReveal key={member.name} delay={i * 0.1}>
          <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
            <div className="relative h-72 overflow-hidden bg-gray-200">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm text-ers-blue-700">
                {locale === 'fr' ? member.role : member.roleEn}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
