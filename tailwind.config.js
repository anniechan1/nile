// tailwind.config.js
const themeVariants = require("tailwindcss-theme-variants");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx,svelte,vue}",
  ],
  plugins: [
    require("tailwindcss-animate"),
    themeVariants({
      themes: ["default", "dark"],
      selector: (theme) => `.theme-${theme}`,
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        body: ['"Merriweather"', "serif"],
        elegant: ['"Lora"', "serif"],
      },
          colors: {
        "river-blue": "#123456",
        "warm-gold": "#c49b37",
        "deep-orange": "#e67e22",
      },
      
    },
  },
};

