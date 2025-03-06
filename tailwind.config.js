/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "250px",
      xs: "300px",
      sm: "480px",
      md: "768px",
      mmd: "1024px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
}

