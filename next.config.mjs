import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Pas d'AVIF : GHSA-2xp9-vwfh-vxw4 (RCE dans l'optimiseur) non corrigé en Next 14.
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2400],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
}

export default withNextIntl(nextConfig)
