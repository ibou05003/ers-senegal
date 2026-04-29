'use client'

import { useState, FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import { Check } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export default function CareersPage() {
  const t = useTranslations('careers')
  const [submitted, setSubmitted] = useState(false)

  const whyBullets = [t('whyBullet1'), t('whyBullet2'), t('whyBullet3'), t('whyBullet4')]

  const expertise = [
    { num: '01', label: t('expertise1') },
    { num: '02', label: t('expertise2') },
    { num: '03', label: t('expertise3') },
    { num: '04', label: t('expertise4') },
    { num: '05', label: t('expertise5') },
    { num: '06', label: t('expertise6') },
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/careers/equipe-jeunes-EPI.jpg" />

      {/* Intro */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-serif text-xl italic leading-relaxed text-gray-700 md:text-2xl">
              {t('intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Why join us */}
      <section className="bg-[#FAF7F2] py-24 md:py-32">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">01</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-gray-900 md:text-5xl">
                {t('whyTitle')}
              </h2>
            </div>
            <ul className="space-y-5 self-center">
              {whyBullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-ers-gold-600" />
                  <span className="text-lg font-light leading-relaxed text-gray-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">02</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-gray-900 md:text-5xl">
              {t('expertiseTitle')}
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light text-gray-600">
              {t('expertiseIntro')}
            </p>
          </div>
          <div className="border-t border-gray-200">
            {expertise.map((e, i) => (
              <div
                key={e.num}
                className={`grid grid-cols-[80px_1fr] items-baseline gap-6 py-7 md:grid-cols-[120px_1fr] md:py-9 ${
                  i < expertise.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <span className="font-serif text-3xl font-light text-gray-300 md:text-5xl">{e.num}</span>
                <span className="text-lg font-medium tracking-tight text-gray-900 md:text-2xl">
                  {e.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions + spontaneous */}
      <section className="bg-[#FAF7F2] py-24 md:py-32">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">03</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-gray-900 md:text-5xl">
              {t('spontaneousTitle')}
            </h2>
            <p className="mt-6 text-lg font-light text-gray-600">{t('spontaneousDesc')}</p>

            {submitted ? (
              <div className="mt-10 border-l-4 border-ers-gold-500 bg-white p-8">
                <p className="text-lg font-medium text-gray-900">
                  Candidature envoyée avec succès.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-5 bg-white p-8 md:p-10">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="careers-formName" className="mb-1.5 block text-sm font-medium text-gray-700">{t('formName')} *</label><input id="careers-formName" type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="careers-formEmail" className="mb-1.5 block text-sm font-medium text-gray-700">{t('formEmail')} *</label><input id="careers-formEmail" type="email"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
                    />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="careers-formPhone" className="mb-1.5 block text-sm font-medium text-gray-700">{t('formPhone')}</label><input id="careers-formPhone" type="tel"
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="careers-formPosition" className="mb-1.5 block text-sm font-medium text-gray-700">{t('formPosition')}</label><input id="careers-formPosition" type="text"
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="careers-formMessage" className="mb-1.5 block text-sm font-medium text-gray-700">{t('formMessage')}</label><textarea id="careers-formMessage" rows={4}
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
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
