'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'

const partners = [
  { name: 'SENELEC', logo: '/images/partners/senelec.svg' },
  { name: 'Ministère du Pétrole et des Énergies', logo: '/images/partners/ministry.svg' },
  { name: 'CRSE', logo: '/images/partners/crse.svg' },
  { name: 'IFC', logo: '/images/partners/ifc.svg' },
  { name: 'BAD', logo: '/images/partners/bad.svg' },
]

export default function PartnersLogos() {
  const t = useTranslations('home')

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide mx-auto">
        <SectionTitle title={t('partnersTitle')} />
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-16 w-32 items-center justify-center grayscale transition-all hover:grayscale-0 md:w-40"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
