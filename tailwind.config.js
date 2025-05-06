/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // لو عندك مشروع Next.js داخل src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  future: {
    unstable_lightningcss: false, // تعطيل استخدام lightningcss
  },
};