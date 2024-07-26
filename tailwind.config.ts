import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'img-yellow-tools': "url('/yellow-tools.jpg')",
        'img-yellow-tools1366': "url('/yellow-tools1366.jpg')",
        'img-yellow-tools1080': "url('/yellow-tools1080.jpg')",
      },
      colors: {

        'yellow-700': '#FEE752',

        'green-400': '#5FF9C5',
        'green-700': '#02E095',

        'gray-900': '#2F2F2F',
        'gray-800': '#424242',
        'gray-700': '#545454',
        'gray-100': '#8A8A8A',
        'gray-050': '#D9D9D9',

        'white-200': '#FBFBFB',

        'placeholder-white': 'rgba(255, 255, 255, 0.8)',
      },
      backgroundColor: {
        'custom-black': 'rgba(0, 0, 0, 0.61)',
        'custom-black-100': 'rgba(0, 0, 0, 0.5)',
        'custom-black-800': 'rgba(0, 0, 0, 0.8)',
        'custom-gray': 'rgba(84, 84, 84, 0.35)',
      },
    },
  },
  plugins: [],
};
export default config;
