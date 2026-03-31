'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Menu, ChevronDown } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'

interface DropdownItem {
  label: string
  href: string
}

interface NavItemType {
  label: string
  href: string
  children?: DropdownItem[]
}

export default function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems: NavItemType[] = [
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
        { label: t('serviceSolar'), href: `/${locale}/services/solaire` },
        { label: t('serviceWind'), href: `/${locale}/services/eolien` },
        { label: t('serviceHybrid'), href: `/${locale}/services/hybride` },
        { label: t('serviceStorage'), href: `/${locale}/services/stockage` },
      ],
    },
    {
      label: t('projects'),
      href: `/${locale}/projets`,
      children: [
        { label: t('projectKahone'), href: `/${locale}/projets/kahone` },
        { label: t('projectNiakhar'), href: `/${locale}/projets/niakhar` },
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
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-md backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ers-green-800">
              <span className="text-lg font-bold text-white">E</span>
            </div>
            <div>
              <span
                className={`text-lg font-bold transition-colors ${
                  isScrolled ? 'text-ers-green-900' : 'text-white'
                }`}
              >
                ERS SA
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-700 hover:bg-ers-green-50 hover:text-ers-green-800'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="min-w-[220px] rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-ers-green-50 hover:text-ers-green-800"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setMobileOpen(true)}
              className={`rounded-lg p-2 lg:hidden ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
