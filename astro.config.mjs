// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://semihblc.github.io',
  base: process.env.GITHUB_ACTIONS ? '/dolomiti-wiesloch' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});