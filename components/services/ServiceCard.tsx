import Link from 'next/link'
import { Sun, Wind, Zap, Battery } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: 'solar' | 'wind' | 'hybrid' | 'storage'
  cta: string
}

const icons = {
  solar: Sun,
  wind: Wind,
  hybrid: Zap,
  storage: Battery,
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  cta,
}: ServiceCardProps) {
  const Icon = icons[icon]

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-ers-green-50 text-ers-green-700 transition-colors group-hover:bg-ers-green-800 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <span className="text-sm font-semibold text-ers-green-700 group-hover:text-ers-green-800">
        {cta} →
      </span>
    </Link>
  )
}
