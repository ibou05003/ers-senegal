import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
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
  ]

  return (
    <footer className="bg-ers-blue-900 text-white">
      <div className="container-wide mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="ERS SA"
                width={44}
                height={44}
                className="h-11 w-11 object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold">ERS SA</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-ers-blue-200">
              {t('slogan')}
            </p>
            <div className="space-y-3">
              <a
                href="tel:+221776041237"
                className="flex items-center gap-2 text-sm text-ers-blue-200 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                +221 77 604 12 37
              </a>
              <a
                href="mailto:contact@er-senegal.com"
                className="flex items-center gap-2 text-sm text-ers-blue-200 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                contact@er-senegal.com
              </a>
              <div className="flex items-start gap-2 text-sm text-ers-blue-200">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                {contact('headOfficeAddress')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ers-gold-400">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ers-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ers-gold-400">
              {t('legal')}
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ers-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ers-gold-400">
              {t('followUs')}
            </h3>
            <div className="flex gap-3">
              {[
                {
                  name: 'LinkedIn',
                  url: 'https://www.linkedin.com/company/ers-senegal',
                  svg: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                },
                {
                  name: 'X',
                  url: 'https://twitter.com/ers_senegal',
                  svg: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
                },
                {
                  name: 'Facebook',
                  url: 'https://www.facebook.com/ERSSenegal',
                  svg: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-ers-blue-800 text-white transition-colors hover:bg-ers-gold-600"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-ers-blue-800 pt-8 text-center text-sm text-ers-blue-300 md:flex-row md:items-center md:justify-between md:text-left">
          <span>{t('copyright', { year: year.toString() })}</span>
          <span className="font-serif text-xs italic text-ers-blue-400">
            {t('photoCredit')} · {t('lastUpdate')}
          </span>
        </div>
      </div>
    </footer>
  )
}
