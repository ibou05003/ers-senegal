import { useTranslations } from 'next-intl'

export default function FactBar() {
  const t = useTranslations('home.facts')
  const facts = [t('fact1'), t('fact2'), t('fact3')]

  return (
    <div className="mx-auto mt-12 max-w-3xl px-4">
      <p className="flex flex-col items-center gap-2 font-serif text-sm italic text-white/75 sm:flex-row sm:justify-center sm:gap-0 md:text-base">
        {facts.map((f, i) => (
          <span key={f} className="flex items-center">
            <span>{f}</span>
            {i < facts.length - 1 && (
              <span aria-hidden className="mx-4 hidden text-white/30 sm:inline">
                ·
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  )
}
