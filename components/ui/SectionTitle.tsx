interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl font-bold md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-3xl text-lg ${
            light ? 'text-white/80' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mx-auto mt-6 h-1 w-20 rounded-full ${
          center ? '' : 'ml-0'
        } bg-ers-orange-500`}
      />
    </div>
  )
}
