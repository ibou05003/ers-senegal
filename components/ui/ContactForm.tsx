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
      <div className="rounded-2xl bg-ers-green-50 p-8 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <p className="text-lg font-medium text-ers-green-800">
          {t('formSuccess')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('formName')} *
          </label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-green-500 focus:outline-none focus:ring-2 focus:ring-ers-green-500/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('formEmail')} *
          </label>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-green-500 focus:outline-none focus:ring-2 focus:ring-ers-green-500/20"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-green-500 focus:outline-none focus:ring-2 focus:ring-ers-green-500/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('formSubject')} *
          </label>
          <select
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-green-500 focus:outline-none focus:ring-2 focus:ring-ers-green-500/20"
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
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {t('formMessage')} *
        </label>
        <textarea
          required
          rows={5}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ers-green-500 focus:outline-none focus:ring-2 focus:ring-ers-green-500/20"
        />
      </div>
      <Button type="submit" variant="primary" size="lg">
        {t('formSubmit')}
      </Button>
    </form>
  )
}
