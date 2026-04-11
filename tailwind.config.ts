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
          dark: '#2A2A72',
          light: '#3F3DBF',
          50: '#f0f9ff',
          100: '#e0f2fe',
          300: '#7dd3fc',
          500: '#3F3DBF',
          600: '#2A2A72',
          900: '#1a1a4a',
        },
        accent: {
          teal: '#2DD4BF',
          blue: '#3B82F6',
        },
        secondary: {
          50: '#f0fdf4',
          500: '#16a34a',
          600: '#15803d',
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #3F3DBF, #2A2A72)',
        'accent-gradient': 'linear-gradient(90deg, #2DD4BF, #3B82F6)',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
