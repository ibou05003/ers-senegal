'use client'

import { useEffect, useState } from 'react'
import { PROJECTS } from '@/lib/constants'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function InteractiveMap() {
  const [mounted, setMounted] = useState(false)
  const locale = useLocale()
  const p = useTranslations('projects')
  const common = useTranslations('common')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-xl bg-gray-100">
        <p className="text-gray-500">{common('loading')}</p>
      </div>
    )
  }

  return <MapContent locale={locale} p={p} common={common} />
}

function MapContent({
  locale,
  p,
  common,
}: {
  locale: string
  p: ReturnType<typeof useTranslations>
  common: ReturnType<typeof useTranslations>
}) {
  const [L, setL] = useState<typeof import('leaflet') | null>(null)
  const [Components, setComponents] = useState<{
    MapContainer: typeof import('react-leaflet').MapContainer
    TileLayer: typeof import('react-leaflet').TileLayer
    Marker: typeof import('react-leaflet').Marker
    Popup: typeof import('react-leaflet').Popup
  } | null>(null)

  useEffect(() => {
    Promise.all([import('leaflet'), import('react-leaflet')]).then(
      ([leaflet, rl]) => {
        setL(leaflet)
        setComponents({
          MapContainer: rl.MapContainer,
          TileLayer: rl.TileLayer,
          Marker: rl.Marker,
          Popup: rl.Popup,
        })
      }
    )
  }, [])

  useEffect(() => {
    if (L) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }
  }, [L])

  if (!L || !Components) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-xl bg-gray-100">
        <p className="text-gray-500">{common('loading')}</p>
      </div>
    )
  }

  const { MapContainer, TileLayer, Marker, Popup } = Components

  const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  })

  return (
    <div className="h-[500px] overflow-hidden rounded-xl shadow-lg">
      <MapContainer
        center={[14.5, -15.5]}
        zoom={7}
        className="h-full w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {PROJECTS.map((project) => (
          <Marker
            key={project.id}
            position={[project.coordinates.lat, project.coordinates.lng]}
            icon={icon}
          >
            <Popup>
              <div className="text-sm">
                <strong>
                  {project.id === 'kahone'
                    ? p('kahoneTitle')
                    : p('niakharTitle')}
                </strong>
                <br />
                {project.capacity}
                <br />
                <Link
                  href={`/${locale}/projets/${project.id}`}
                  className="text-ers-green-700 underline"
                >
                  {common('seeProject')}
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
