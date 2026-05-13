interface ServiceTableRow {
  title: string
  description: string
}

interface ServiceTableProps {
  title: string
  rows: ServiceTableRow[]
}

export default function ServiceTable({ title, rows }: ServiceTableProps) {
  return (
    <section className="bg-[#FAF7F2] py-20 md:py-28">
      <div className="container-wide mx-auto px-6 lg:px-8">
        <p className="mb-12 text-xs uppercase tracking-[0.3em] text-gray-500">{title}</p>
        <div className="border-t border-gray-300">
          {rows.map((row, i) => (
            <div
              key={row.title}
              className={`grid items-baseline gap-6 py-8 md:grid-cols-[1fr_1.6fr] md:gap-12 ${
                i < rows.length - 1 ? 'border-b border-gray-300' : ''
              }`}
            >
              <h3 className="font-serif text-xl tracking-tight text-gray-900 md:text-2xl">
                {row.title}
              </h3>
              <p className="text-base font-light leading-relaxed text-gray-700">
                {row.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
