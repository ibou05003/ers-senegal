import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react'
import { ERS_INFO } from '@/lib/constants'

function PhotoCircle({
  src,
  position,
  mirrored = false,
}: {
  src: string
  position: string
  mirrored?: boolean
}) {
  return (
    <div className="relative aspect-square w-[27vw] max-w-[380px] shrink-0 animate-scale-in">
      <svg
        viewBox="0 0 100 100"
        aria-hidden
        className={`absolute -inset-[6%] h-[112%] w-[112%] ${mirrored ? '-scale-x-100' : ''}`}
      >
        <circle
          cx="50"
          cy="50"
          r="49.5"
          fill="none"
          stroke="white"
          strokeOpacity="0.6"
          strokeWidth="0.35"
          pathLength="100"
          strokeDasharray="24 26"
          strokeDashoffset="-20"
        />
      </svg>
      <div className="absolute inset-0 overflow-hidden rounded-full shadow-2xl shadow-ers-blue-900/30 ring-2 ring-white/90 md:ring-4">
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="(min-width: 1408px) 380px, 27vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  )
}

export default function ContactHero() {
  const t = useTranslations('contact')
  const phone = ERS_INFO.phones[0]
  const email = ERS_INFO.emails[0]

  const infos = [
    { icon: Phone, label: t('phone'), value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
    { icon: Mail, label: t('email'), value: email, href: `mailto:${email}` },
    { icon: MapPin, label: t('address'), value: t('addressShort') },
    { icon: Clock, label: t('hours'), value: t('hoursValue') },
  ]

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-ers-blue-800 via-ers-blue-500 to-ers-blue-200 pb-24 pt-28 md:pb-32 md:pt-32">
        {/* mix-blend-luminosity : la photo prend la teinte bleue du dégradé de la section */}
        <Image
          src="/images/about/bulle-solaire-barrage.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-70 mix-blend-luminosity"
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-ers-blue-900/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[65%] bg-gradient-to-b from-transparent via-white/85 to-white" />
        <div className="absolute left-1/2 top-[30%] -z-10 h-[75%] w-[70%] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute inset-x-0 -bottom-px -z-10 h-24 w-full md:h-36"
        >
          <path
            d="M0,30 C220,120 460,150 720,125 C980,100 1220,50 1440,80 L1440,160 L0,160 Z"
            fill="#1060B0"
            fillOpacity="0.16"
          />
          <path
            d="M0,75 C280,160 520,155 760,138 C1010,120 1250,70 1440,112 L1440,160 L0,160 Z"
            fill="#FFFFFF"
          />
        </svg>

        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-10">
            <PhotoCircle src="/images/about/bulle-solaire-eolien.jpg" position="18% 50%" />
            <div className="relative aspect-square w-[30vw] max-w-[360px] shrink-0 animate-scale-in rounded-full bg-white shadow-2xl shadow-ers-blue-900/20">
              <Image
                src="/images/logo.png"
                alt={ERS_INFO.name}
                fill
                priority
                sizes="(min-width: 1200px) 360px, 30vw"
                className="object-contain p-[8%]"
              />
            </div>
            <PhotoCircle src="/images/about/bulle-solaire-barrage.jpg" position="88% 50%" mirrored />
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-ers-blue-900 md:mt-10 md:text-6xl lg:text-7xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 md:mt-5 md:text-xl">
            {t('subtitle')}
          </p>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-ers-blue-500" />
        </div>
      </section>

      <section className="px-4 pt-2 lg:px-8">
        <div className="container-wide mx-auto flex flex-col items-center gap-10 lg:flex-row lg:gap-6">
          <dl className="grid w-full grid-cols-2 gap-y-8 lg:flex-1 lg:grid-cols-4 lg:divide-x lg:divide-gray-200">
            {infos.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex flex-col items-center px-1 text-center sm:px-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ers-blue-50 text-ers-blue-500">
                  <Icon className="h-6 w-6" />
                </span>
                <dt className="mt-3 font-bold text-ers-blue-900">{label}</dt>
                <dd className="mt-1 break-words text-sm text-gray-600">
                  {href ? (
                    <a href={href} className="hover:text-ers-blue-700">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#contact-form"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-ers-blue-500 to-ers-blue-700 px-8 py-4 font-semibold text-white shadow-lg shadow-ers-blue-600/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Send className="h-5 w-5" />
            {t('writeNow')}
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  )
}
