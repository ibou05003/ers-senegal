import { useTranslations } from 'next-intl'
import ContactForm from '@/components/ui/ContactForm'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { MapPin, Phone, Mail, Shield } from 'lucide-react'

export default function ContactPage() {
  const t = useTranslations('contact')

  const offices = [
    {
      name: t('headOffice'),
      address: t('headOfficeAddress'),
      phone: '+221 77 604 12 37',
      email: 'm.diallo@er-senegal.com',
    },
    {
      name: t('kahoneSite'),
      address: t('kahoneSiteAddress'),
    },
    {
      name: t('niakharSite'),
      address: t('niakharSiteAddress'),
    },
  ]

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{t('subtitle')}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  {t('formTitle')}
                </h2>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Offices */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  {t('officesTitle')}
                </h2>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.name}
                      className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                    >
                      <h3 className="mb-3 font-bold text-gray-900">{office.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-ers-green-600" />
                          {office.address}
                        </div>
                        {office.phone && (
                          <a
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-ers-green-700"
                          >
                            <Phone className="h-4 w-4 text-ers-green-600" />
                            {office.phone}
                          </a>
                        )}
                        {office.email && (
                          <a
                            href={`mailto:${office.email}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-ers-green-700"
                          >
                            <Mail className="h-4 w-4 text-ers-green-600" />
                            {office.email}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ethics */}
                <div className="mt-6 rounded-xl border-l-4 border-ers-orange-500 bg-ers-orange-50 p-5">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-ers-orange-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">{t('ethicsTitle')}</h3>
                      <p className="mt-1 text-sm text-gray-600">{t('ethicsDesc')}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
