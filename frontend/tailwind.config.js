module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      gray: "#E5E5E5",
      red: {
        light: "#DC1818",
        DEFAULT: "#C61414",
        dark: "#950F0F",
      },
      brown: "130202",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
