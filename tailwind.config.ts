import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  safelist: [
    "text-facebook",
    "text-twitter",
    "text-instagram",
    "text-linkedin",
    "text-github",
    "text-telegram",
    "text-whatsapp",
    "text-email",
    "bg-facebook",
    "bg-twitter",
    "bg-instagram",
    "bg-linkedin",
    "bg-github",
    "bg-telegram",
    "bg-whatsapp",
    "bg-email",
    "hover:text-facebook",
    "hover:text-twitter",
    "hover:text-instagram",
    "hover:text-linkedin",
    "hover:text-github",
    "hover:text-telegram",
    "hover:text-whatsapp",
    "hover:text-email",
    "after:bg-facebook",
    "after:bg-twitter",
    "after:bg-instagram",
    "after:bg-linkedin",
    "after:bg-github",
    "after:bg-telegram",
    "after:bg-whatsapp",
    "after:bg-email",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        facebook: "#3b5998",
        twitter: "#4099ff",
        instagram: "#d6249f",
        linkedin: "#0077b5",
        github: "#333",
        telegram: "#0088cc",
        whatsapp: "#25d366",
        email: "#ea4335",
        "primary-blue": "#46aef7",
        "secondary-blue": "#006699",
        "primary-black": "#000000",
        "secondary-black": "#0f0f0f",
      },
      keyframes: {
        bubble: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        bubble2: {
          "100%": { color: "#fff" },
        },
      },
      animation: {
        bubble: "bubble",
        bubble2: "bubble2",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
