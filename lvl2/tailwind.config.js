/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#030712",
        "bg-elevated": "rgba(17, 25, 40, 0.85)",
        "bg-card": "rgba(255, 255, 255, 0.04)",
        border: "rgba(148, 163, 184, 0.35)",
        text: "#f8fafc",
        muted: "#94a3b8",
        accent: "#38bdf8",
        "accent-strong": "#0ea5e9",
      },
    },
  },
  plugins: [],
};
