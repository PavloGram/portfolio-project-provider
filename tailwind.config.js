/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      'hero-bg': "url('../public/net2.jpg')",
      'contact-bg': "url('../public/call-to-bg.jpg')",
      'tech-bg': "url('../public/sport-bg.jpg')",
      'yellow-hero-bg': "url('../public/yellow-hero-bg.png')",
      'blue-hero-bg': "url('../public/blue-hero-bg.png')",
      'bank-bg': "url('../public/bOA.png')",
      'logo-bg': "url('../public/logoNoBgZip.png')",
      },
      
    },
  },
  plugins: [],
}
