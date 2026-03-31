import { useTranslations } from 'next-intl'

export default function CodeOfConductPage() {
  const t = useTranslations('codeOfConduct')

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

          <h2>{t('ethicsTitle')}</h2>
          <p>{t('ethicsInfo')}</p>

          <h2>{t('respectTitle')}</h2>
          <p>{t('respectInfo')}</p>

          <h2>{t('environmentTitle')}</h2>
          <p>{t('environmentInfo')}</p>

          <h2>{t('conflictTitle')}</h2>
          <p>{t('conflictInfo')}</p>

          <h2>{t('reportingTitle')}</h2>
          <p>{t('reportingInfo')}</p>
        </div>
      </section>
    </>
  )
}
