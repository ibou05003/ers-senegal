'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher({ isScrolled = false }: { isScrolled?: boolean }) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <div className={`flex items-center gap-1 rounded-full border p-0.5 text-sm transition-colors ${
      isScrolled ? 'border-gray-200' : 'border-white/30'
    }`}>
      <button
        onClick={() => switchLocale('fr')}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === 'fr'
            ? 'bg-ers-blue-800 text-white'
            : isScrolled
              ? 'text-gray-600 hover:text-ers-blue-800'
              : 'text-white/80 hover:text-white'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === 'en'
            ? 'bg-ers-blue-800 text-white'
            : isScrolled
              ? 'text-gray-600 hover:text-ers-blue-800'
              : 'text-white/80 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  )
}
