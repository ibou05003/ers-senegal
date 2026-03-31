import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <div className="mx-auto max-w-md">
          <h1 className="text-8xl font-bold text-ers-green-600">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Page introuvable
          </h2>
          <p className="mt-4 text-gray-600">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/fr"
              className="rounded-xl bg-ers-green-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ers-green-700"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/fr/contact"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
