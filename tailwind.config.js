/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbf8f3",
  sand: "#dfd5c5",
  textDark: "#253e2a",
  extra:"#e8e3d9",
        
        sage: "#48624e",
        olive: "#7b7a3c",
        
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
