import flowbiteReact from "flowbite-react/plugin/tailwindcss";
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",           // <- required
    "./node_modules/flowbite-react/**/*.js"       // <- required
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite, flowbiteReact],
}
