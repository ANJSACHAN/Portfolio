/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      dancingScript: ["Dancing Script", "cursive" ,"sans-serif"],
      pacifico : ["Pacifico", "cursive", "sans-serif"],
      satisfy : ["Satisfy", "cursive","sans-serif"],
      playwrite : ["Playwrite", "cursive","sans-serif"],
    },


    animation: {
      'infinite-scroll': 'infinite-scroll 15s linear infinite',
  },
  keyframes: {
    'infinite-scroll': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-100%)' }, // Adjusted to -100%
    }
  }     
  },
  plugins: [],
}