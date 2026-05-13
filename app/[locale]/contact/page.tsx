import { useTranslations } from 'next-intl'
import ContactForm from '@/components/ui/ContactForm'
import { MapPin, Phone, Mail, Shield } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export default function ContactPage() {
  const t = useTranslations('contact')

  const offices = [
    {
      name: t('headOffice'),
      address: t('headOfficeAddress'),
      phone: '+221 77 604 12 37',
      email: 'contact@er-senegal.com',
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
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/about/panneau-arbre.jpg" />

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  {t('formTitle')}
                </h2>
                <ContactForm />
              
            </div>

            {/* Offices */}
            <div className="lg:col-span-2">
              
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
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-ers-blue-600" />
                          {office.address}
                        </div>
                        {office.phone && (
                          <a
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-ers-blue-700"
                          >
                            <Phone className="h-4 w-4 text-ers-blue-600" />
                            {office.phone}
                          </a>
                        )}
                        {office.email && (
                          <a
                            href={`mailto:${office.email}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-ers-blue-700"
                          >
                            <Mail className="h-4 w-4 text-ers-blue-600" />
                            {office.email}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ethics */}
                <div className="mt-6 rounded-xl border-l-4 border-ers-gold-500 bg-ers-gold-50 p-5">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-ers-gold-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">{t('ethicsTitle')}</h3>
                      <p className="mt-1 text-sm text-gray-600">{t('ethicsDesc')}</p>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
