/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*ejs"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "55CDFC",
        "custom-pink": "#5BCEFA"
      }
    },
  },
  plugins: [require("daisyui")],
}
