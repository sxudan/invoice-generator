/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        "color-main": "#8bf4b2",
        "secondary-color": "#4608ab",
        "primary-font-color": "#8bf4b2",
        'black-color':'#000',
        'white-color':'#ffff'
      },
      fontFamily: {
        "title-font": ["Sora", "sans-serif"],
      },

      zIndex: {
        1: "-1",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  important: true,
}

