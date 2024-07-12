/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.purple.200"), 0 0 20px theme("colors.purple.700")',
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover", "focus"],
      boxShadow: ["hover", "focus"],
    },
  },
  plugins: [],
};