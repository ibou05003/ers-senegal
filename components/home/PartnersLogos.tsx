'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

const partners = [
  { name: 'SENELEC' },
  { name: 'Ministère de l\'Énergie' },
  { name: 'CRSE' },
  { name: 'IFC' },
  { name: 'BAD' },
  { name: 'ASER' },
  { name: 'FONSIS' },
]

export default function PartnersLogos() {
  const t = useTranslations('home')

  return (
    <section className="py-24 md:py-32">
      <div className="container-wide mx-auto px-4 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          {t('partnersTitle').split('confiance')[0]}
          <span className="text-gradient-gold">confiance</span>
        </h2>
        <div className="mx-auto mt-16 grid grid-cols-3 items-center gap-8 sm:grid-cols-4 md:grid-cols-7 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3 opacity-50 transition-all duration-300 hover:opacity-100"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 p-3 md:h-20 md:w-20">
                <Image
                  src="/images/logo.png"
                  alt={partner.name}
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain opacity-40 md:h-12 md:w-12"
                />
              </div>
              <span className="text-xs font-medium text-gray-500 md:text-sm">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
