import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ERS SA — Energy Resources Sénégal',
    template: '%s | ERS SA',
  },
  description:
    'Energy Resources Sénégal SA (ERS SA) — Développement et exploitation de solutions d\'énergie renouvelable au Sénégal et en Afrique de l\'Ouest.',
  keywords: [
    'énergie renouvelable',
    'solaire',
    'Sénégal',
    'ERS SA',
    'transition énergétique',
    'stockage énergie',
    'BESS',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    siteName: 'ERS SA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
