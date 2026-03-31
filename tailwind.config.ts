import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ers: {
          green: {
            50: '#F0F5EA',
            100: '#DCE8C8',
            200: '#C5D9A3',
            300: '#AECB7E',
            400: '#9BBF5C',
            500: '#90B040',
            600: '#7A9A30',
            700: '#647E28',
            800: '#4E6320',
            900: '#384818',
          },
          blue: {
            50: '#E8F0FA',
            100: '#C5D9F2',
            200: '#9FBFE5',
            300: '#6B9DD4',
            400: '#4080C4',
            500: '#1060B0',
            600: '#0D509A',
            700: '#0A407E',
            800: '#083065',
            900: '#05204A',
          },
          gold: {
            50: '#FFF9E5',
            100: '#FFF0BF',
            200: '#FFE799',
            300: '#FFDD66',
            400: '#F5CE1A',
            500: '#F0C000',
            600: '#D4A900',
            700: '#B89200',
            800: '#9A7A00',
            900: '#7A6100',
          },
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
