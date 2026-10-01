/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#d9e2f1',
          200: '#b3c5e3',
          300: '#7e9bce',
          400: '#4a6fb0',
          500: '#2b5095',
          600: '#1f3d77',
          700: '#16305f',
          800: '#0f2347',
          900: '#0a1a35',
          950: '#060f23',
        },
        blue: {
          50: '#eef5fb',
          100: '#d4e6f5',
          200: '#a9cdf0',
          300: '#74add9',
          400: '#4088c0',
          500: '#2a6fa8',
          600: '#205c8e',
          700: '#1a4a72',
          800: '#16395a',
          900: '#122c47',
        },
        cool: {
          50: '#f7f9fb',
          100: '#eef2f6',
          200: '#dde5ed',
          300: '#c2d0dc',
          400: '#9bafc3',
          500: '#728da8',
        },
        charcoal: '#1a2332',
      },
      fontFamily: {
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        'container': '1280px',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out both',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-slide': 'fadeSlide 0.8s ease-out both',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
