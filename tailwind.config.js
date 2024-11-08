/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#ffee5a',
        footer: '#231f1f',
      },
      borderRadius: {
        'default': '6px',
      }
    },
  },
  plugins: [],
}
