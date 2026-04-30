import { useTranslations } from 'next-intl'

export default function LegalPage() {
  const t = useTranslations('legal')

  return (
    <>
      <section className="gradient-green pb-24 pt-36 md:pb-28 md:pt-40">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto prose prose-lg max-w-4xl">
          <h2>{t('companyTitle')}</h2>
          <p>{t('companyInfo')}</p>

          <h2>{t('ipTitle')}</h2>
          <p>{t('ipInfo')}</p>

          <h2>{t('liabilityTitle')}</h2>
          <p>{t('liabilityInfo')}</p>

          <h2>{t('linksTitle')}</h2>
          <p>{t('linksInfo')}</p>

          <h2>{t('lawTitle')}</h2>
          <p>{t('lawInfo')}</p>
        </div>
      </section>
    </>
  )
}
