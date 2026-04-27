import { Check } from 'lucide-react'

interface CommitmentSectionProps {
  number: string
  intro: string
  bullets: string[]
}

export default function CommitmentSection({ number, intro, bullets }: CommitmentSectionProps) {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-wide mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="font-serif text-7xl font-light text-gray-200 md:text-8xl">{number}</p>
          </div>
          <div className="self-center">
            <p className="font-serif text-xl italic leading-relaxed text-gray-700 md:text-2xl">
              {intro}
            </p>
            <ul className="mt-10 space-y-5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-ers-gold-600" />
                  <span className="text-lg font-light leading-relaxed text-gray-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
