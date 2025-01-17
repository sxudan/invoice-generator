/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  content: ['./src/features/landing_pages.tsx', './src/features/components/navbar.tsx'],
  theme: {
    extend: {     
      colors: {
        'color-main': '#8bf4b2',
        'secondary-color':'#4608ab',
        'primary-font-color':'#8bf4b2'
      },
      fontFamily: {
        'title-font': ['Sora', 'sans-serif'],},       

      zIndex: {
        '1': '-1',
      }
      

    },
  },
  plugins: [],
}

