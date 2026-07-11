module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff88',
        secondary: '#ff00ff',
        accent: '#00ffff',
        darker: '#030014',
        dark: '#0a0520',
        'code-bg': '#141d2e',
        light: '#f0f4ff',
        'light-text': '#e8f2ff',
        'neon-cyan': '#64d5ff',
        'neon-purple': '#b88fff',
        'neon-pink': '#ff69b4',
        'neon-green': '#00ff88',
        'neon-blue': '#0080ff',
        'neon-orange': '#ff6600',
        'surface-1': '#0f0830',
        'surface-2': '#160d45',
      },
      fontFamily: {
        mono: ['Monaco', 'monospace'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
