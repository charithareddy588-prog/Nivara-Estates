/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f7ff",
          100: "#e9edff",
          200: "#d5dcff",
          300: "#b3bfff",
          400: "#8999ff",
          500: "#6675f5",
          600: "#4f5ce0",
          700: "#4149bd",
          800: "#373e98",
          900: "#303778"
        }
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      boxShadow: {
        soft: "0 10px 40px rgba(15, 23, 42, 0.08)"
      },

      animation: {
        float: "float 5s ease-in-out infinite",
        fadeUp: "fadeUp .6s ease-out"
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      }
    }
  },

  plugins: []
};