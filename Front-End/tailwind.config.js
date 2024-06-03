export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "#031a2f",
        neutral: "#404145",
        "neutral-content": "#7a7a7a",
        "base-100": "#ffffff",
      },
    },
  },
  plugins: [],
};