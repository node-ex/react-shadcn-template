import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

// import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['selector'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['dark'],
  plugins: [forms, typography],
  theme: {},
};

export default config;
