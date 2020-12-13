module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}",] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        green: ['2px solid green', '1px'],
      }
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: []
};
