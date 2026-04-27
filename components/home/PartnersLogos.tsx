import { useTranslations } from 'next-intl'
import Image from 'next/image'

const partners = [
  { name: "Ministère de l'Énergie", logo: '/images/partners/ministere-energie.png' },
  { name: 'SENELEC', logo: '/images/partners/senelec.jpeg' },
  { name: 'CRSE', logo: '/images/partners/crse.png' },
  { name: 'ASER', logo: '/images/partners/aser.png' },
  { name: 'IFC', logo: '/images/partners/ifc.png' },
  { name: 'BAD', logo: '/images/partners/bad.png' },
  { name: 'FONSIS', logo: '/images/partners/fonsis.png' },
]

export default function PartnersLogos() {
  const t = useTranslations('home')

  return (
    <section className="border-y border-gray-200 bg-white py-20">
      <div className="container-wide mx-auto px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500">
          {t('partnersTitle')}
        </p>
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative flex h-16 w-full max-w-[140px] items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
              title={partner.name}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={64}
                sizes="140px"
                className="h-auto max-h-16 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
