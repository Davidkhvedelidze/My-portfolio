import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: '0 20px 80px rgba(15, 23, 42, 0.25)',
        nav: '0 20px 60px rgba(2, 6, 23, 0.35)'
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 20% -10%, rgba(56, 189, 248, 0.6), transparent 55%), radial-gradient(circle at 80% 0%, rgba(244, 114, 182, 0.45), transparent 45%), radial-gradient(circle at 50% 90%, rgba(34, 211, 238, 0.35), transparent 50%)'
      }
    }
  },
  plugins: []
};

export default config;
