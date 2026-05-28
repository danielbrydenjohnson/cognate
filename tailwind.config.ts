import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        rule: "var(--rule)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        warn: "var(--warn)",
        "family-germanic": "var(--family-germanic)",
        "family-romance": "var(--family-romance)",
        "family-slavic": "var(--family-slavic)",
        "family-proto": "var(--family-proto)",
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
        ipa: ["var(--font-ipa)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "13": ["0.8125rem", { lineHeight: "1.45" }],
        "15": ["0.9375rem", { lineHeight: "1.5" }],
        "18": ["1.125rem", { lineHeight: "1.6" }],
        "22": ["1.375rem", { lineHeight: "1.35" }],
        "28": ["1.75rem", { lineHeight: "1.25" }],
        "36": ["2.25rem", { lineHeight: "1.15" }],
        "48": ["3rem", { lineHeight: "1.05" }],
      },
      borderRadius: {
        cognate: "0.375rem",
      },
      maxWidth: {
        reading: "720px",
        graph: "1100px",
      },
    },
  },
};

export default config;