/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F3F5F9',
          100: '#E7EBF3',
          200: '#CDD5E4',
          300: '#A7B3CB',
          400: '#7A89AB',
          500: '#56668C',
          600: '#3F4D71',
          700: '#2E3A59',
          800: '#1F2945',
          900: '#131C36',
          950: '#0B1126',
        },
        brand: {
          blue: '#2F7FD6',
          sky: '#5FB2EA',
          teal: '#2FB5B3',
          green: '#7DB356',
          coral: '#E86A5B',
        },
        cream: '#FAF7F1',
        paper: '#F5F7FA',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.14em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(19, 28, 54, 0.04), 0 10px 30px -14px rgba(19, 28, 54, 0.14)',
        float: '0 24px 60px -24px rgba(19, 28, 54, 0.32)',
        phone: '0 40px 80px -30px rgba(19, 28, 54, 0.45)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        ecg: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.2, 0.6, 0.3, 1) infinite',
        ecg: 'ecg 6s linear infinite',
      },
    },
  },
  plugins: [],
}
