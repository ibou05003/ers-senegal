import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/seo/StructuredData'

const SITE_URL = 'https://er-senegal.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        'fr-SN': `${SITE_URL}/fr`,
        en: `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/fr`,
      },
    },
    openGraph: {
      locale: locale === 'fr' ? 'fr_SN' : 'en_US',
      alternateLocale: locale === 'fr' ? 'en_US' : 'fr_SN',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-white text-gray-800">
        <StructuredData />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
