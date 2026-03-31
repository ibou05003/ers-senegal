'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  const contact = useTranslations('contact')
  const locale = useLocale()
  const year = new Date().getFullYear()

  const quickLinks = [
    { label: nav('about'), href: `/${locale}/a-propos` },
    { label: nav('services'), href: `/${locale}/services` },
    { label: nav('projects'), href: `/${locale}/projets` },
    { label: nav('commitments'), href: `/${locale}/engagements` },
    { label: nav('news'), href: `/${locale}/actualites` },
    { label: nav('careers'), href: `/${locale}/carrieres` },
    { label: nav('contact'), href: `/${locale}/contact` },
  ]

  const legalLinks = [
    { label: t('legal'), href: `/${locale}/mentions-legales` },
    { label: t('privacy'), href: `/${locale}/confidentialite` },
    { label: t('cookies'), href: `/${locale}/cookies` },
    { label: t('codeOfConduct'), href: `/${locale}/code-de-conduite` },
    { label: t('antiCorruption'), href: `/${locale}/anticorruption` },
    { label: t('whistleblower'), href: `/${locale}/lanceur-alerte` },
  ]

  return (
    <footer className="bg-ers-green-900 text-white">
      <div className="container-wide mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="text-lg font-bold text-ers-green-900">E</span>
              </div>
              <span className="text-xl font-bold">ERS SA</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-ers-green-200">
              {t('slogan')}
            </p>
            <div className="space-y-3">
              <a
                href="tel:+221776041237"
                className="flex items-center gap-2 text-sm text-ers-green-200 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                +221 77 604 12 37
              </a>
              <a
                href="mailto:m.diallo@er-senegal.com"
                className="flex items-center gap-2 text-sm text-ers-green-200 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                m.diallo@er-senegal.com
              </a>
              <div className="flex items-start gap-2 text-sm text-ers-green-200">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                {contact('headOfficeAddress')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ers-orange-400">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ers-green-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ers-orange-400">
              {t('legal')}
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ers-green-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ers-orange-400">
              {t('followUs')}
            </h3>
            <div className="flex gap-3">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ers-senegal', icon: 'L' },
                { name: 'Twitter', url: 'https://twitter.com/ers_senegal', icon: 'X' },
                { name: 'Facebook', url: 'https://www.facebook.com/ERSSenegal', icon: 'F' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-ers-green-800 text-sm font-medium text-white transition-colors hover:bg-ers-orange-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ers-green-800 pt-8 text-center text-sm text-ers-green-300">
          {t('copyright', { year: year.toString() })}
        </div>
      </div>
    </footer>
  )
}
