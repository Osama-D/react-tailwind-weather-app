module.exports = {
  content: ["./src/App.js", "./src/components/WeatherApp.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#31255a",
        secondery: {
          100: "#54416d",
          200: "#2b235a	",
          300: "#75b4e3",
          400: "#8fe0ff	",
        },
      },
      fontFamily: {
        body: ["Poppins"],
        body1: ["Merriweather"],
      },
      screens: {
        tablet: { raw: "(max-width: 1284px)" },
        phone: { raw: "(max-width: 816px)" },
      },
    },
  },
  plugins: [],
};
