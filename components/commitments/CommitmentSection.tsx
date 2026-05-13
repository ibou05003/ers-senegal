interface CommitmentSectionProps {
  number: string
  lead: string
  body: string[]
}

export default function CommitmentSection({ number, lead, body }: CommitmentSectionProps) {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-wide mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="font-serif text-7xl font-light text-gray-200 md:text-8xl">{number}</p>
          </div>
          <div className="self-center">
            <p className="font-serif text-xl italic leading-relaxed text-gray-700 md:text-2xl">
              {lead}
            </p>
            <div className="mt-10 space-y-6">
              {body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg font-light leading-relaxed text-gray-800"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
