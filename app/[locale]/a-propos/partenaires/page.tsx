import { useTranslations } from 'next-intl'
import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'

const partnerGroups = [
  {
    key: 'partnersInstitutional',
    partners: [
      { name: 'SENELEC', logo: '/images/partners/senelec.svg', desc: 'Société nationale d\'électricité du Sénégal' },
      { name: 'Ministère du Pétrole et des Énergies', logo: '/images/partners/ministry.svg', desc: 'Tutelle institutionnelle du secteur énergétique' },
      { name: 'CRSE', logo: '/images/partners/crse.svg', desc: 'Commission de Régulation du Secteur de l\'Énergie' },
    ],
  },
  {
    key: 'partnersTechnical',
    partners: [
      { name: 'Partenaire Technique 1', logo: '/images/partners/tech1.svg', desc: 'Ingénierie et construction' },
      { name: 'Partenaire Technique 2', logo: '/images/partners/tech2.svg', desc: 'Équipements solaires' },
    ],
  },
  {
    key: 'partnersFinancial',
    partners: [
      { name: 'IFC', logo: '/images/partners/ifc.svg', desc: 'International Finance Corporation' },
      { name: 'BAD', logo: '/images/partners/bad.svg', desc: 'Banque Africaine de Développement' },
    ],
  },
]

export default function PartnersPage() {
  const t = useTranslations('about')

  return (
    <>
      <section className="gradient-green pb-24 pt-36 md:pb-28 md:pt-40">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('partnersTitle')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            {t('partnersSubtitle')}
          </p>
        </div>
      </section>

      {partnerGroups.map((group, gi) => (
        <section
          key={group.key}
          className={`section-padding py-20 md:py-28 ${gi % 2 === 1 ? 'bg-gray-50' : ''}`}
        >
          <div className="container-wide mx-auto">
            <SectionTitle title={t(group.key)} />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.partners.map((partner, i) => (
                <ScrollReveal key={partner.name} delay={i * 0.1}>
                  <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{partner.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
