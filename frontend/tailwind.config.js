module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    red: {
      light: "#85d7ff",
      DEFAULT: "#1fb6ff",
      dark: "#009eeb",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
