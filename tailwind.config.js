/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        village: {
          navy: '#0F2744',
          navyLight: '#183B65',
          dark: '#0A1728',
          blue: '#0284C7',
          blueHover: '#0369A1',
          sky: '#38BDF8',
          ice: '#F8FAFC',
          foam: '#F1F5F9',
          gold: '#F59E0B',
          emerald: '#10B981',
          slate: '#334155'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      boxShadow: {
        'clean': '0 4px 20px -2px rgba(15, 39, 68, 0.05), 0 2px 6px -1px rgba(15, 39, 68, 0.02)',
        'card': '0 10px 30px -5px rgba(15, 39, 68, 0.08)',
        'elevated': '0 20px 40px -10px rgba(15, 39, 68, 0.12)'
      }
    },
  },
  plugins: [],
}
