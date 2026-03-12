// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-org.github.io',
  base: '/remoji-landing',
  vite: {
    plugins: [tailwindcss()]
  }
});