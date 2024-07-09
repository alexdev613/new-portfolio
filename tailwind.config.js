/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-minus-header': 'calc(100vh - 64px)',
      },
      colors: {
        primary: '#465975',
        secondary: '#7B8CA6',
        tertiary: '#E0E1DD',
        beltColor: '#1D2639',
        beautyNoir: "#232323",
        beautyBrunette: "#343434",
        barbarianColor: "#0c2135",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        gothic: ['Gothic A1', 'sans-serif']
      },
      screens: {
        'screen-sm': "480px"
      }
    },
  },
  plugins: [],
}

