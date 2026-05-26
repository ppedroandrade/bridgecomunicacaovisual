import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          light: '#243660',
          deep: '#131F38',
        },
        yellow: {
          DEFAULT: '#F5C842',
          dark: '#D4A820',
          soft: '#FFE99A',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,.04), 0 8px 24px -8px rgba(15,23,42,.10)',
        cardHover: '0 1px 2px rgba(15,23,42,.06), 0 24px 40px -16px rgba(27,42,74,.25)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        wapulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,.55)' },
          '100%': { boxShadow: '0 0 0 18px rgba(37,211,102,0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        wapulse: 'wapulse 2.4s ease-out infinite',
        'fade-in-up': 'fadeInUp 0.7s ease both',
      },
    },
  },
  plugins: [],
}

export default config
