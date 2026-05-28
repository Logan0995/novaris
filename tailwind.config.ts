import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          void: "#050505",
          deep: "#09090b",
          surface: "#0f0f11",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#52525B",
        },
        accent: {
          blue: "#007AFF",
          cyan: "#00F0FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        'display-xl': ['clamp(40px, 10vw, 100px)', { letterSpacing: '-0.03em' }],
        'display-l': ['clamp(32px, 8vw, 68px)', { letterSpacing: '-0.03em' }],
        'h3': ['clamp(18px, 2vw, 24px)', { lineHeight: '1.4' }],
        'body': ['16px', { lineHeight: '18px' }],
        'small': ['12px', { lineHeight: '13px' }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "accent-grad": "linear-gradient(135deg, #007AFF 0%, #00F0FF 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
