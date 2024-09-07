/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content paths tell Tailwind to scan your files for class names
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Make sure Tailwind scans the correct files
  ],
  theme: {
    extend: {
      // Extend the maxWidth property with custom sizes
      maxWidth: {
        '6xl': '72rem',  // Tailwind's default 6xl is already '72rem'
        // You can add custom values here if needed
      },
    },
  },
  plugins: [], // Add plugins if you need them, e.g., for forms or typography
}

