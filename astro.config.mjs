// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.fontshare(),
    name: "Satoshi",
    cssVariable: "--font-satoshi",
    weights: [400, 500, 700],
    styles: ['normal']
  }],
  site: 'https://rdrbux.github.io',
  base: '/ballena-blanca'
});
