/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
      "extend": {
          "colors": {
              "white": "#fff",
              "gray": {
                  "100": "#fcfcfc",
                  "200": "rgba(30, 30, 30, 0.5)",
                  "300": "rgba(0, 0, 0, 0.6)",
                  "400": "rgba(0, 0, 0, 0.53)",
                  "500": "rgba(0, 0, 0, 0.8)",
                  "600": "rgba(0, 0, 0, 0.5)",
                  "700": "rgba(0, 0, 0, 0.7)"
              },
              "mediumseagreen": {
                  "100": "#7ecf87",
                  "200": "#39b75d",
                  "300": "rgba(41, 171, 81, 0.6)"
              },
              "honeydew": {
                  "100": "#e2f7e3",
                  "200": "#dbf2e2"
              },
              "black": "#000",
              "seagreen": "#3b7f5c",
              "limegreen": {
                  "100": "#5abc36",
                  "200": "#18c75a"
              },
              "darkseagreen": "#a3cfa7",
              "forestgreen": "#1fa94b"
          },
          "spacing": {},
          "fontFamily": {
              "google-sans": "'Google Sans'",
              "gothic-a1": "'Gothic A1'",
              "gluten": "Gluten",
              "open-sans-hebrew": "'Open Sans Hebrew'",
              "gamja-flower": "'Gamja Flower'"
          },
          "borderRadius": {
              "31xl": "50px",
              "11xl": "30px",
              "xl": "20px"
          }
      },
      "fontSize": {
          "3xl": "22px",
          "7xl": "26px",
          "xl": "20px",
          "5xl": "24px",
          "29xl": "48px",
          "inherit": "inherit"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}