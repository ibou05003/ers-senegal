import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Hostinger ne supporte pas le runtime /_next/image — on sert les fichiers en direct
    unoptimized: true,
    // Custom loader : réécrit .jpg → .webp automatiquement (WebP supporté par 96%+ des navigateurs)
    loader: 'custom',
    loaderFile: './lib/image-loader.js',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
