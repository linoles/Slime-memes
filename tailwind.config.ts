import type { Config } from "tailwindcss";

export default {
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
      },
    },
    screens: {
      'ml1': '220px',
      'ml2': '320px',
      'ml3': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px', 
      'xl': '1280px', 
      '2xl': '1536px', 
    }
  },
  plugins: [],
} satisfies Config;
