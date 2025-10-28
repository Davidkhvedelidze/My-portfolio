/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#030712',
        'bg-elevated': 'rgba(17, 25, 40, 0.85)',
        'bg-card': 'rgba(255, 255, 255, 0.04)',
        border: 'rgba(148, 163, 184, 0.35)',
        text: '#f8fafc',
        muted: '#94a3b8',
        accent: '#38bdf8',
        'accent-strong': '#0ea5e9',
      },
      boxShadow: {
        glass: '0 20px 80px rgba(15, 23, 42, 0.25)',
        nav: '0 20px 60px rgba(2, 6, 23, 0.35)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 20% -10%, rgba(56, 189, 248, 0.6), transparent 55%), radial-gradient(circle at 80% 0%, rgba(244, 114, 182, 0.45), transparent 45%), radial-gradient(circle at 50% 90%, rgba(34, 211, 238, 0.35), transparent 50%)',
      },
    },
  },
  plugins: [],
};
