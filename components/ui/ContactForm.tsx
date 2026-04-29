'use client'

import { useState, FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import Button from './Button'

export default function ContactForm() {
  const t = useTranslations('contact')
  const [submitted, setSubmitted] = useState(false)

  const subjects = [
    { value: 'partnership', label: t('subjectPartnership') },
    { value: 'employment', label: t('subjectEmployment') },
    { value: 'press', label: t('subjectPress') },
    { value: 'investment', label: t('subjectInvestment') },
    { value: 'other', label: t('subjectOther') },
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-ers-blue-50 p-8 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <p className="text-lg font-medium text-ers-blue-800">
          {t('formSuccess')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="formName" className="mb-1.5 block text-sm font-medium text-gray-700">{t('formName')} *</label><input id="formName" type="text"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
          />
        </div>
        <div>
          <label htmlFor="formEmail" className="mb-1.5 block text-sm font-medium text-gray-700">{t('formEmail')} *</label><input id="formEmail" type="email"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
          />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="formPhone" className="mb-1.5 block text-sm font-medium text-gray-700">{t('formPhone')}</label><input id="formPhone" type="tel"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
          />
        </div>
        <div>
          <label htmlFor="formSubject" className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('formSubject')} *
          </label>
          <select
            id="formSubject"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
          >
            <option value="">--</option>
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="formMessage" className="mb-1.5 block text-sm font-medium text-gray-700">
          {t('formMessage')} *
        </label>
        <textarea
          id="formMessage"
          required
          rows={5}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-blue-500 focus:outline-none focus:ring-2 focus:ring-ers-blue-500/20"
        />
      </div>
      <Button type="submit" variant="primary" size="lg">
        {t('formSubmit')}
      </Button>
    </form>
  )
}
