/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f0f0f",
        fg: "#ffffff",
        card1: "#b2b2b2",
        card2: "#ce2017",
        card3: "#2f2f2f",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "serif"],
      },
      height: {
        svh: "100svh",
      },
      aspectRatio: {
        card: "5 / 7",
      },
    },
  },
  plugins: [],
};

// export default {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
