import { useTranslations } from 'next-intl'

export default function WhistleblowerPage() {
  const t = useTranslations('whistleblower')

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

          <h2>{t('scopeTitle')}</h2>
          <p>{t('scopeInfo')}</p>

          <h2>{t('protectionTitle')}</h2>
          <p>{t('protectionInfo')}</p>

          <h2>{t('processTitle')}</h2>
          <p>{t('processInfo')}</p>

          <h2>{t('channelTitle')}</h2>
          <p>{t('channelInfo')}</p>
        </div>
      </section>
    </>
  )
}
