'use client'

import { useState, FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { TrendingUp, Globe, Users, Lightbulb } from 'lucide-react'

export default function CareersPage() {
  const t = useTranslations('careers')
  const [submitted, setSubmitted] = useState(false)

  const benefits = [
    { icon: TrendingUp, title: t('benefitGrowth'), desc: t('benefitGrowthDesc') },
    { icon: Globe, title: t('benefitImpact'), desc: t('benefitImpactDesc') },
    { icon: Users, title: t('benefitTeam'), desc: t('benefitTeamDesc') },
    { icon: Lightbulb, title: t('benefitInnovation'), desc: t('benefitInnovationDesc') },
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="gradient-green pb-24 pt-36 md:pb-28 md:pt-40">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding">
        <div className="container-wide mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('cultureTitle')}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
            {t('cultureDesc')}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide mx-auto">
          <SectionTitle title={t('benefitsTitle')} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ers-blue-50 text-ers-blue-700">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionTitle title={t('positionsTitle')} />
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
            <p className="text-gray-600">{t('noPositions')}</p>
          </div>
        </div>
      </section>

      {/* Spontaneous application */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide mx-auto">
          <div className="mx-auto max-w-2xl">
            <SectionTitle title={t('spontaneousTitle')} />
            <p className="mb-8 text-center text-gray-600">{t('spontaneousDesc')}</p>

            {submitted ? (
              <div className="rounded-2xl bg-ers-blue-50 p-8 text-center">
                <p className="text-lg font-medium text-ers-blue-800">
                  Candidature envoyée avec succès !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-8 shadow-sm">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {t('formName')} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {t('formEmail')} *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
                    />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {t('formPhone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {t('formPosition')}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    {t('formMessage')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg">
                  {t('formSubmit')}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
