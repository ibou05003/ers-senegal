import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ServiceRowProps {
  number: string
  title: string
  description: string
  href: string
  cta: string
  isLast?: boolean
}

export default function ServiceRow({
  number,
  title,
  description,
  href,
  cta,
  isLast = false,
}: ServiceRowProps) {
  return (
    <Link
      href={href}
      className={`group block py-10 transition-colors md:py-14 ${
        !isLast ? 'border-b border-gray-200' : ''
      }`}
    >
      <div className="grid items-baseline gap-6 md:grid-cols-[120px_1fr_auto] md:gap-10">
        <div className="font-serif text-5xl font-light text-gray-300 md:text-6xl lg:text-7xl">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-ers-blue-700 md:text-2xl">
            {title}
          </h3>
          <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors group-hover:text-ers-blue-700 md:self-center">
          <span className="underline decoration-1 underline-offset-[6px]">{cta}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  )
}
