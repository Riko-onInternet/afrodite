/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  darkMode: 'selector',
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '445px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1630px'
    },
    mytheme: {
      "secondary": "#ff4a00"
    },
    extend: {

    },
  },
  plugins: [daisyui],
}