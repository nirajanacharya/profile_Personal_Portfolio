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
        darker: '#0a0f1a',
        dark: '#0f1729',
        'code-bg': '#141d2e',
        light: '#f0f4ff',
        'light-text': '#e8f2ff',
        'neon-cyan': '#64d5ff',
        'neon-purple': '#b88fff',
        'neon-pink': '#ff69b4',
        'neon-green': '#00ff88',
        'neon-blue': '#0080ff',
        'neon-orange': '#ff6600',
      },
      fontFamily: {
        mono: ['Monaco', 'monospace'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
