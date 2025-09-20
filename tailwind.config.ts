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
        // Design system color tokens from the spec
        bg: "hsl(210 15% 8%)",
        accent: "hsl(30 90% 55%)",
        primary: "hsl(210 80% 50%)",
        surface: "hsl(210 15% 12%)",
        "text-primary": "hsl(0 0% 95%)",
        "text-secondary": "hsl(0 0% 70%)",
      },
      borderRadius: {
        lg: "16px",
        md: "10px",
        sm: "6px",
        xl: "24px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
      },
      boxShadow: {
        card: "0 4px 12px hsla(0, 0%, 0%, 0.1)",
        modal: "0 16px 32px hsla(0, 0%, 0%, 0.2)",
      },
      fontSize: {
        body: ["1rem", "1.5"],
        caption: ["0.875rem", "1.25"],
        display: ["3rem", "1"],
        headline: ["2rem", "1.25"],
      },
      fontWeight: {
        body: "400",
        caption: "500",
        display: "700",
        headline: "600",
      },
    },
  },
  plugins: [],
};
export default config;
