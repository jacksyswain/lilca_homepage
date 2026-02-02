/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbf8f3",
  sand: "#efeae2",
  textDark: "#48624e",
        
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
