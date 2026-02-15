/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic design tokens
        'primary-bg': 'rgb(var(--color-primary-bg) / <alpha-value>)',
        'secondary-bg': 'rgb(var(--color-secondary-bg) / <alpha-value>)',
        'card-bg': 'rgb(var(--color-card-bg) / <alpha-value>)',
      },
      typography: {
        DEFAULT: {
          css: {
            // maxWidth: '70ch',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

