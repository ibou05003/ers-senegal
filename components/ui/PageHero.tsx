import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle?: string
  image: string
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden pb-24 pt-36">
      {/* Background image */}
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ers-blue-900/80 via-ers-blue-900/60 to-ers-blue-900/80" />

      {/* Content */}
      <div className="container-wide relative z-10 mx-auto px-4 text-center lg:px-8">
        <h1 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/75 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Arc shape bottom — smooth concave curve */}
      <div className="absolute -bottom-px left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-[50px] w-full md:h-[70px] lg:h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z"
            fill="#FAFAF8"
          />
        </svg>
      </div>
    </section>
  )
}
