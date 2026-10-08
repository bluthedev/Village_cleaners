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
          ice: '#F0F9FF',
          foam: '#E0F2FE',
          gold: '#F59E0B',
          emerald: '#10B981',
          slate: '#334155'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'clean': '0 10px 30px -10px rgba(15, 39, 68, 0.08), 0 4px 6px -2px rgba(15, 39, 68, 0.03)',
        'glow': '0 0 35px -5px rgba(2, 132, 199, 0.35)',
        'machine': '0 25px 60px -15px rgba(15, 39, 68, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bubble': 'bubble 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bubble: {
          '0%': { transform: 'translateY(10px) scale(0.8)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-20px) scale(1.1)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
