import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function QuoteBanner() {
  const t = useTranslations('home')

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <Image
        src="/images/projects/kahone-centrale-solaire-aerienne.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="container-wide relative z-10 mx-auto px-6 py-24 text-center lg:px-8">
        <blockquote className="mx-auto max-w-4xl">
          <p className="font-serif text-3xl italic leading-[1.15] text-white md:text-5xl lg:text-6xl">
            {t('quoteText')}
          </p>
          <footer className="mt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              — {t('quoteAuthor')}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
              {t('quoteRole')}
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
