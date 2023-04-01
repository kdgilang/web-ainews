/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#FFFFFF',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '3px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      colors: {
        "slate-900": "#333333",
        "slate-700": "#444444",
        "slate-600": "#5b5f62",
        "slate-500": "#CCCCCC",
        "slate-200": "#EEEEEE",
        
        "slate-50": "#efefef",

        "sky-400": "#231e12",
        "sky-500": "#blue",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    }
  },
  plugins: [],
}
