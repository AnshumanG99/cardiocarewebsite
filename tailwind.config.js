/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#070C24',
        navy: {
          DEFAULT: '#0B1437',
          800: '#121D4D',
          700: '#1B2A66',
        },
        ink: {
          DEFAULT: '#0B1437',
          secondary: '#4E5872',
          tertiary: '#7E879C',
        },
        surface: '#F4F7FB',
        tint: {
          blue: '#EAF2FF',
          teal: '#E4F7F5',
          green: '#EDF6E4',
        },
        line: '#E2E8F2',
        blue: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          link: '#2563EB',
          glow: '#7DB8FF',
        },
        teal: {
          DEFAULT: '#14B8A6',
          glow: '#5EEAD4',
        },
        brand: {
          blue: '#2F7FD6',
          teal: '#2FB5B3',
          green: '#7DB356',
        },
        red: {
          DEFAULT: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['"Manrope Variable"', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        page: '1040px',
        wide: '1200px',
        text: '660px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 20, 55, 0.05), 0 14px 36px -18px rgba(11, 20, 55, 0.16)',
        lift: '0 2px 4px rgba(11, 20, 55, 0.06), 0 24px 48px -20px rgba(11, 20, 55, 0.25)',
        button: '0 10px 24px -10px rgba(37, 99, 235, 0.55)',
        phone: '0 40px 80px -30px rgba(7, 12, 36, 0.5)',
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
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(60px, -40px, 0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.2, 0.6, 0.3, 1) infinite',
        ecg: 'ecg 6s linear infinite',
        drift: 'drift 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
