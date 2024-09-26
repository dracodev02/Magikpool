import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#050468",
        "primary-light": "#6EE9F9",
        green: "#D9F96E",
      },
      fontFamily: {
        "sourceSans3": ["'Source Sans 3'", 'sans-serif'],
        "title": ["avoqado", 'sans-serif'],
      },
      maxWidth: {
        desktop: "1200px"
      }
    },
  },
  plugins: [
    require("tailwindcss-animated"),
  ],
};
export default config;
