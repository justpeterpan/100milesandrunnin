/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e1e",
      },
      dropShadow: {
        box: "4px 4px 0px rgba(255,255,255,.8)",
      },
      gridTemplateColumns: {
        postList: "repeat(auto-fit, minmax(18rem, 28rem));",
      },
      fontFamily: {
        grotesk: ["HKGrotesk"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: "#ddd",
            },
            h2: {
              color: "#1e1e1e",
              backgroundColor: "yellow",
            },
            strong: {
              color: "#ddd",
            },
            blockquote: {
              color: "#ddd",
              fontWeight: "300",
            },
            a: {
              color: "#ddd",
            },
            pre: {
              backgroundColor: "#1e1e1e",
              border: "2px #ddd dotted",
            },
            code: {
              color: "#ddd",
            },
            th: {
              color: "#ddd",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
