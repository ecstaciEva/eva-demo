import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#F8F9FA',
        'gray-200': '#E9ECEF',
        'gray-300': '#DEE2E6',
        'gray-400': '#CED4DA',
        'gray-500': '#ADB5BD',
        'gray-600': '#6C757D',
        'gray-700': '#495057',
        'gray-800': '#343A40',
        'gray-900': '#212529',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;
