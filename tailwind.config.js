/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: {
        max: "800px",
      },
      sm: {
        min: "801px",
      },
    },
    extend: {
      fontFamily: {
        kartrider: "KartriderMedium",
        bold: "KartriderBold",
        extraBold: "KartriderExtraBold",
      },
      colors: {
        bg: "#f8f9fd",
        border: "#e4e6ed",
        modalbg: "rgba(11,19,30,.37)",
        navy: "#39415c",
      },
      animation: {
        slidedown: "popupOpen .5s ease-in-out",
        slideup: "popupClose .5s ease-in-out",
        loading: "skeleton 2s ease-in-out .5s infinite",
      },
      keyframes: {
        popupOpen: {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        popupClose: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-100%)",
          },
        },
        skeleton: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.4,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
