module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".7rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    dropShadow: {
      md: "0 4px 3px rgba(0, 0, 0, 0.35)",
    },
    extend: {
      colors: {
        clrBackgroundPrimary: "#070C0E",
        clrPrimaryRed: "#FC4F4F",
        clrText: "#B3B3B3",
      },
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        josefin: ["Josefin","sans-serif"]
      },
    },
  },
  plugins: [],
}
