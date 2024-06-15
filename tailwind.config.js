/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'sunset': "url(./src/lib/assets/backgrounds/sunset.jpg)",
      }
    },
  },
  plugins: [],
}

