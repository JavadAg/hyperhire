import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
        '2xl': '1600px',
      },
      boxShadow: {
        card: '0px 15px 24px 0px #0000001F',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
      },
      colors: {
        'gray-title': 'rgba(52, 55, 65, 1)',
        'gray-subtitle': 'rgba(94, 98, 111, 1)',
        footer: 'rgba(251, 251, 251, 1)',
        checkbox: 'rgba(232, 236, 255, 1)',
        'checkbox-indicator': 'rgba(44, 89, 155, 1)',
        'card-title': 'rgba(36, 37, 47, 1)',
        'card-subtitle': 'rgba(74, 119, 255, 1)',
        'card-tag-border': 'rgba(193, 197, 207, 1)',
        link: 'rgba(251, 255, 35, 1)',
      },
      backgroundImage: {
        main: "url('../assets/images/bg.webp')",
        overlay: 'linear-gradient(151.17deg,#26C2B9 8.69%,#288BE7 126.06%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
