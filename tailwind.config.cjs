/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./assets/background.jpg')",
      },
    },
    fontFamily: {
      Roboto: ['"Roboto"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
