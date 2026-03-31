import { useTranslations } from 'next-intl'

export default function AntiCorruptionPage() {
  const t = useTranslations('antiCorruption')

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t('title')}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto prose prose-lg max-w-4xl">
          <p>{t('intro')}</p>

          <h2>{t('principlesTitle')}</h2>
          <p>{t('principlesInfo')}</p>

          <h2>{t('giftsTitle')}</h2>
          <p>{t('giftsInfo')}</p>

          <h2>{t('thirdPartyTitle')}</h2>
          <p>{t('thirdPartyInfo')}</p>

          <h2>{t('sanctionsTitle')}</h2>
          <p>{t('sanctionsInfo')}</p>

          <h2>{t('reportingTitle')}</h2>
          <p>{t('reportingInfo')}</p>
        </div>
      </section>
    </>
  )
}
