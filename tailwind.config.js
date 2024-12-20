/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        headings: 'Montserrat, sans-serif', // Adds a new `font-headings` class
        description: 'Poppins, sans-serif', // Adds a new `font-text` class
      },
    },
  },
  plugins: [],
}

