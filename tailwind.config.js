/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: "1rem", // Default padding for the container
      },
      screens: {
        // Custom max-widths for the container
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1462px",
        "2xl": "1536px",
        custom: "1800px", // Add a custom breakpoint
      },
    },
  },
  plugins: [],
};
