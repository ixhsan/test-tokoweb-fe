/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        pengirimanbanner: "url('../public/images/pengiriman-banner.svg')",
        resibanner: "url('../public/images/resi.svg')",
        downloadusbanner: "url('../public/images/downloadus.svg')",
      },
      colors: {
        hitam: "#0D0D0D",
        abu: "#807D7D",
        primary: "#D8191E",
        secondary: "#F2572E",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
