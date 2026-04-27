import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { TEAM_MEMBERS } from '@/lib/constants'

export default function TeamGrid() {
  const locale = useLocale()
  const t = useTranslations('about')

  return (
    <div className="mx-auto max-w-4xl">
      {TEAM_MEMBERS.map((member) => (
        <article key={member.name} className="overflow-hidden bg-white">
          <div className="grid items-stretch md:grid-cols-2">
            <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[480px]">
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role}, Energy Resources Sénégal`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-xs italic text-white/80">
                {t('sabalyCaption')}
              </p>
            </div>
            <div className="flex flex-col justify-center bg-[#FAF7F2] p-10 md:p-14">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">01</p>
              <h3 className="mt-4 font-serif text-3xl tracking-tight text-gray-900 md:text-4xl">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-ers-blue-700">
                {locale === 'fr' ? member.role : member.roleEn}
              </p>
              <div className="mt-6 h-px w-12 bg-ers-gold-500" />
              <blockquote className="mt-8">
                <p className="font-serif text-xl italic leading-relaxed text-gray-800 md:text-2xl">
                  « {t('sabalyQuote')} »
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-gray-500">
                  — {member.name}
                </footer>
              </blockquote>
            </div>
          </div>
        </article>
      ))}
      <p className="mt-16 text-center font-serif text-sm italic text-gray-500">
        {t('teamNote')}
      </p>
    </div>
  )
}
