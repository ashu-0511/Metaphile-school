/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        nav: "#4bbbaa ",
        ham: "#8bbfbe",
        sidebar: "#e8f8f9",
        btn: "red",
        act: "#a4c8c0",
      },
      textColor: {
        logo: "#053e57",
      },
      borderColor: {
        logo: "blue",
      },
      colors: {
        payable: "#e0f7fa",
        paid: "#76c7c0",
        pending: "#ffcc80",
        background: "#f0f0f0",
        progressBg: "#e0e0e0",
        progressGreen: "#76c7c0",
        progressRed: "#f44336",
        chartGreen: "green",
        chartYellow: "yellow",
        chartRed: "red",
        seeall: "aqua",
        present: "red",
        leave: "green",
        absent: "yellowgreen",
      },
    },
  },
  plugins: [],
};
