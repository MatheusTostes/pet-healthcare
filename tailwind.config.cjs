/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        product: {
          // DEFAULT: 'hsl(var(--card))',
          'blue-dark': 'hsl(202.33,68.25%,37.06%)',
          blue: 'hsl(202.5,68.57%,58.82%)',
          'purple-dark': 'hsl(238.93,53.33%,58.82%)',
          purple: 'hsl(239,92.31%,74.51%)',
        },
        base: {
          DEFAULT: 'hsl(0,0%,5.1%)',
          'gray-700': 'hsl(0,0%,5.1%)',
          'gray-600': 'hsl(0,0%,9.8%)',
          'gray-500': 'hsl(0,0%,14.9%)',
          'gray-400': 'hsl(0,0%,20%)',
          'gray-300': 'hsl(0,0%,49.8%)',
          'gray-200': 'hsl(0,0%,85.1%)',
          'gray-100': 'hsl(0,0%,94.9%)',
        },
        feedback: {
          danger: 'hsl(0,70.41%,61.57%)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
