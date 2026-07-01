/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./Layout.jsx",
  ],
  safelist: [
    { pattern: /bg-(green|blue|purple|orange|red|yellow)-(100|500|600)/ },
    { pattern: /text-(green|blue|purple|orange|red|yellow)-(600|700)/ },
    { pattern: /border-(green|blue|purple|orange|red|yellow)-(200|300|500)/ },
    { pattern: /border-l-(green|blue|purple|orange|red|yellow)-500/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Design token colors
        amber: {
          DEFAULT: '#e8b04b',
          dim: 'rgba(232,176,75,0.12)',
          glow: 'rgba(232,176,75,0.25)',
          300: '#f0c06b',
          400: '#e8b04b',
          500: '#d4963a',
        },
        'emerald-accent': {
          DEFAULT: '#4ade80',
          dim: 'rgba(74,222,128,0.12)',
        },
        surface: {
          base: '#0a0a0a',
          1: '#111112',
          2: '#161618',
          hover: '#1c1c1e',
        },
        charcoal: {
          DEFAULT: '#0a0a0a',
        },
        'warm-white': '#ededed',
        'muted-text': '#8a8a8a',
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.5s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.4)',
        glow: '0 0 60px rgba(232, 176, 75, 0.08)',
      },
    },
  },
  plugins: [],
}
