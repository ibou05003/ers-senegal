import { useTranslations } from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('privacy')

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
          <p>{t('intro')}</p>

          <h2>{t('collectionTitle')}</h2>
          <p>{t('collectionInfo')}</p>

          <h2>{t('purposeTitle')}</h2>
          <p>{t('purposeInfo')}</p>

          <h2>{t('retentionTitle')}</h2>
          <p>{t('retentionInfo')}</p>

          <h2>{t('rightsTitle')}</h2>
          <p>{t('rightsInfo')}</p>

          <h2>{t('securityTitle')}</h2>
          <p>{t('securityInfo')}</p>

          <h2>{t('contactTitle')}</h2>
          <p>{t('contactInfo')}</p>
        </div>
      </section>
    </>
  )
}
