import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://er-senegal.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ERS SA — Energy Resources Sénégal',
    template: '%s | ERS SA',
  },
  description:
    'Energy Resources Sénégal SA (ERS SA) — Développement, construction et exploitation de centrales d\'énergie renouvelable au Sénégal et en Afrique de l\'Ouest. Solaire, stockage, éolien, dual fuel.',
  keywords: [
    'énergie renouvelable Sénégal',
    'centrale solaire Sénégal',
    'ERS SA',
    'Energy Resources Sénégal',
    'transition énergétique Afrique',
    'stockage énergie BESS',
    'Kahone',
    'Teranga Niakhar',
    'IPP Sénégal',
    'photovoltaïque Afrique de l\'Ouest',
  ],
  authors: [{ name: 'Energy Resources Sénégal SA' }],
  creator: 'Energy Resources Sénégal SA',
  publisher: 'Energy Resources Sénégal SA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'ERS SA — Energy Resources Sénégal',
    title: 'ERS SA — Energy Resources Sénégal',
    description:
      'Acteur engagé du développement énergétique au Sénégal et en Afrique de l\'Ouest. Centrale solaire de Kahone (20 MWc), Teranga Niakhar Storage et plus encore.',
    images: [
      {
        url: '/images/hero/centrale-solaire-aerienne-senegal.jpg',
        width: 1200,
        height: 630,
        alt: 'Energy Resources Sénégal — Vue aérienne d\'une centrale solaire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERS SA — Energy Resources Sénégal',
    description:
      'Développement, construction et exploitation de centrales d\'énergie renouvelable au Sénégal.',
    images: ['/images/hero/centrale-solaire-aerienne-senegal.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'fr-SN': `${SITE_URL}/fr`,
      en: `${SITE_URL}/en`,
      'x-default': `${SITE_URL}/fr`,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#003E7E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
