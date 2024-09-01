import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'spartan': ['League Spartan', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundColor:{
        'primary':'#071952',
        'secondary':'#E6B345',
        'tertiary':'#3059EE',
      },
    },
  },
  plugins: [],
};
export default config;
