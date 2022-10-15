const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-rgba": "rgba(0,0,0,0.75)",
      },
      backgroundImage: {
        hero: "url('https://image.tmdb.org/t/p/original/')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
});
