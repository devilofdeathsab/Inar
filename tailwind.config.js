module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#D4AF37",
          DEFAULT: "#CFB53B",
          dark: "#996515",
        },
        cream: "#F5F5DC",
        black: "#000000",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
