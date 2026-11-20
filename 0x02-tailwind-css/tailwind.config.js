/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths are relative to this config file, so the build works from any folder
  content: {
    relative: true,
    files: ["./*.html", "./src/**/*.{html,js}"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
