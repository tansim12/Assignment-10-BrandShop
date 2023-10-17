/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#552499",

          secondary: "#ffc21f",

          accent: "#eae385",

          neutral: "#FF444A",

          "base-100": "#f3eef6",

          info: "#369dd9",

          success: "#3acf8a",

          warning: "#b97004",

          error: "#fa5c81",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
