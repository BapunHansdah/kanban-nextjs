/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "grey-light-1": "#dbdbdb",
      "grey-light-2": "#eeeeee",
      "grey-light": "#e0e0e0",
      blue: "#5030E5",
      "pure-black": "#000000",
      "dusky-white": "#f5f5f5",
      black: "#0d062d",
      grey: "#787486",
      white: "#ffffff",
      "dusky-black":"#625f6d",
      transparent: "transparent",
      "yellow-light": "#dfa874",
      "yellow": "#d58d49",
      "red": "#d8727d",
      "green": "#68B266",
      "green-light" : "#83c29d",
      "lamp-yellow":"#fcd64a"
    },
  },
  plugins: [],
}
