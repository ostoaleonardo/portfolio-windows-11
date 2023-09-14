/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper': 'url("/src/assets/images/wallpapers/windows-11-wallpaper.jpg")',
      }
    },
  },
  plugins: [],
}

