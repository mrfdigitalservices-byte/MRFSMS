module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        }
      },
      boxShadow: {
        glow: '0 12px 32px rgba(15, 23, 42, 0.18)'
      }
    }
  },
  plugins: []
}