'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav')
  const locale = useLocale()

  const navItems: NavItem[] = [
    { label: t('home'), href: `/${locale}` },
    {
      label: t('about'),
      href: `/${locale}/a-propos`,
      children: [
        { label: t('aboutHistory'), href: `/${locale}/a-propos/histoire` },
        { label: t('aboutMission'), href: `/${locale}/a-propos/mission` },
        { label: t('aboutTeam'), href: `/${locale}/a-propos/equipe` },
        { label: t('aboutPartners'), href: `/${locale}/a-propos/partenaires` },
      ],
    },
    {
      label: t('services'),
      href: `/${locale}/services`,
      children: [
        { label: t('serviceDevelopment'), href: `/${locale}/services/developpement` },
        { label: t('serviceConstruction'), href: `/${locale}/services/construction` },
        { label: t('serviceOperation'), href: `/${locale}/services/exploitation` },
        { label: t('serviceProduction'), href: `/${locale}/services/production` },
        { label: t('serviceMaintenance'), href: `/${locale}/services/maintenance` },
      ],
    },
    {
      label: t('projects'),
      href: `/${locale}/projets`,
      children: [
        { label: t('projectKahone'), href: `/${locale}/projets/kahone` },
        { label: t('projectNiakhar'), href: `/${locale}/projets/niakhar` },
        { label: t('projectNotto'), href: `/${locale}/projets/notto` },
        { label: t('projectCapDesBiches'), href: `/${locale}/projets/cap-des-biches` },
      ],
    },
    {
      label: t('commitments'),
      href: `/${locale}/engagements`,
      children: [
        { label: t('commitmentCommunities'), href: `/${locale}/engagements/communautes` },
        { label: t('commitmentEnvironment'), href: `/${locale}/engagements/environnement` },
        { label: t('commitmentDiversity'), href: `/${locale}/engagements/diversite` },
        { label: t('commitmentSafety'), href: `/${locale}/engagements/securite` },
      ],
    },
    { label: t('news'), href: `/${locale}/actualites` },
    { label: t('careers'), href: `/${locale}/carrieres` },
    { label: t('contact'), href: `/${locale}/contact` },
  ]

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <LanguageSwitcher />
          <button
            onClick={onClose}
            aria-label="Fermer le menu"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="overflow-y-auto p-4">
          {navItems.map((item) => (
            <div key={item.href} className="mb-2">
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-lg px-4 py-2.5 font-medium text-gray-800 hover:bg-ers-blue-50 hover:text-ers-blue-800"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 border-l-2 border-ers-blue-100 pl-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-ers-blue-50 hover:text-ers-blue-800"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
