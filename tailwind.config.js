/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        border: "var(--border)",
      },
      // ENHANCED SHINY NAVY SHADOWS FOR FAANG-LEVEL POLISH
      boxShadow: {
        'bright-navy': '0 4px 24px -6px rgba(10, 49, 114, 0.7)', // Distinct default glow
        'shimmer-navy': '0 8px 30px rgba(10, 49, 114, 1)', // Bright hover glow
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        shimmer: 'shimmer 1s forwards',
      },
    },
  },
  plugins: [],
}