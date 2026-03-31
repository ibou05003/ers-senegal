import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variants = {
  primary:
    'bg-ers-blue-800 text-white hover:bg-ers-blue-700 shadow-lg shadow-ers-blue-800/25',
  secondary:
    'bg-ers-gold-600 text-white hover:bg-ers-gold-700 shadow-lg shadow-ers-gold-600/25',
  outline:
    'border-2 border-ers-blue-800 text-ers-blue-800 hover:bg-ers-blue-800 hover:text-white',
  white:
    'bg-white text-ers-blue-800 hover:bg-gray-100 shadow-lg',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
