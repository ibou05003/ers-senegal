import { useTranslations } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'

const partnerGroups = [
  {
    key: 'partnersInstitutional',
    partners: [
      {
        name: 'République du Sénégal — Ministère de l\'Énergie, du Pétrole et des Mines',
        shortName: 'Ministère de l\'Énergie',
        logo: '/images/partners/ministere-energie.png',
        desc: 'Tutelle institutionnelle du secteur énergétique sénégalais',
      },
      {
        name: 'SENELEC',
        shortName: 'SENELEC',
        logo: '/images/partners/senelec.jpeg',
        desc: 'Société nationale d\'électricité du Sénégal — partenaire d\'achat d\'électricité',
      },
      {
        name: 'CRSE',
        shortName: 'CRSE',
        logo: '/images/partners/crse.png',
        desc: 'Commission de Régulation du Secteur de l\'Énergie',
      },
      {
        name: 'ASER',
        shortName: 'ASER',
        logo: '/images/partners/aser.png',
        desc: 'Agence Sénégalaise d\'Électrification Rurale',
      },
    ],
  },
  {
    key: 'partnersFinancial',
    partners: [
      {
        name: 'Banque Ouest Africaine de Développement',
        shortName: 'BOAD',
        logo: '/images/partners/boad.svg',
        desc: 'Institution communautaire de financement du développement de l\'Afrique de l\'Ouest',
      },
      {
        name: 'UniCredit',
        shortName: 'UniCredit',
        logo: '/images/partners/unicredit.svg',
        desc: 'Groupe bancaire international, partenaire de financement de projets énergétiques',
      },
    ],
  },
]

export default function PartnersPage() {
  const t = useTranslations('about')

  return (
    <>
      <PageHero
        title={t('partnersTitle')}
        subtitle={t('partnersSubtitle')}
        image="/images/team/equipe-salle-controle-electrique.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-serif text-xl italic leading-relaxed text-gray-700 md:text-2xl">
              {t('partnersIntro')}
            </p>
          </div>
        </div>
      </section>

      {partnerGroups.map((group, gi) => (
        <section
          key={group.key}
          className={`py-24 md:py-32 ${gi % 2 === 0 ? 'bg-[#FAF7F2]' : 'bg-white'}`}
        >
          <div className="container-wide mx-auto px-6 lg:px-8">
            <p className="mb-12 text-xs uppercase tracking-[0.3em] text-gray-500">
              {t(group.key)}
            </p>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {group.partners.map((partner) => (
                <article
                  key={partner.shortName}
                  className="flex flex-col items-start gap-6 border-t border-gray-200 pt-8"
                >
                  <div className="relative flex h-24 w-full max-w-[180px] items-center justify-start">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={180}
                      height={96}
                      sizes="180px"
                      className="h-auto max-h-24 w-auto max-w-[180px] object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                      {partner.shortName}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">
                      {partner.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
