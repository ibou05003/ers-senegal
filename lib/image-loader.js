'use client'

/**
 * Custom Next.js image loader.
 *
 * Hostinger ne fait pas tourner le runtime Next.js → l'endpoint /_next/image renvoie 400.
 * Avec `images.unoptimized: true`, Next génère des <img src> directs.
 * Ce loader réécrit chaque URL .jpg/.jpeg vers son équivalent .webp pré-généré
 * (via scripts/optimize-photos.sh + cwebp). WebP est supporté par 96%+ des navigateurs.
 *
 * Pour AVIF (encore meilleure compression), on utilise <picture> manuellement
 * sur les images LCP critiques (HeroSection).
 */
module.exports = function imageLoader({ src }) {
  // Chemins data: ou URLs absolues : ne pas toucher
  if (src.startsWith('data:') || src.startsWith('http')) return src

  // Réécriture .jpg/.jpeg → .webp (le fichier .webp existe à côté)
  if (/\.(jpe?g)$/i.test(src)) {
    return src.replace(/\.(jpe?g)$/i, '.webp')
  }

  return src
}
