'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  id: string
  name: string
  location: string
  capacity: string
  status: 'operational' | 'development'
  image: string
}

export default function ProjectCard({
  id,
  name,
  location,
  capacity,
  status,
  image,
}: ProjectCardProps) {
  const common = useTranslations('common')
  const locale = useLocale()

  return (
    <Link
      href={`/${locale}/projets/${id}`}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${
              status === 'operational' ? 'bg-ers-green-600' : 'bg-ers-orange-600'
            }`}
          >
            {status === 'operational'
              ? common('operational')
              : common('inDevelopment')}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-ers-green-700">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{location}</p>
        <p className="mt-2 text-sm font-semibold text-ers-green-700">{capacity}</p>
      </div>
    </Link>
  )
}
