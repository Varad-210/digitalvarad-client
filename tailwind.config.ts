import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#EEEEF8',
          100: '#D6D7F0',
          200: '#BCBEE6',
          300: '#7075D0',
          400: '#5558C4',
          500: '#383AB4',
          600: '#2D2E84',
          700: '#232469',
          800: '#191A4F',
          900: '#0F0F34',
        },
        accent: {
          green: '#20B597',
          blue:  '#34A7E0',
        },
        secondary: {
          50:  '#E8FAF6',
          100: '#C5F1E8',
          500: '#20B597',
          600: '#179B7E',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
