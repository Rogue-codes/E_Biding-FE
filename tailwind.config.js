/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.375rem",
        "5xl": "3rem",
        "6xl": "3.375rem",
        "7xl": "64px",
      },
      colors:{
        "NGA-Primary":"#3E4095",
        "NGA/Darkest":"#141533",
        "NGA/Light":"#DADBF2",
        "NGA/Dark":"#505173",
        "NGA/Medium":"#8787A8",
        "OBS-Darkest":"#142633",
        "OBS-Green":"#47C96B",
        "OBS-Red":"#D93333",
        black:"#1A1D1F"
      }
    },
  },
  plugins: [],
}