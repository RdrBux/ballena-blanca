// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Satoshi",
    cssVariable: "--font-satoshi",
    options: {
      variants: [
        {
          weight: "300 900",
          style: "normal",
          src: ["./src/assets/fonts/Satoshi-Variable.woff2"]
        }
      ]
    }
  }],
  site: 'https://rdrbux.github.io',
  base: '/ballena-blanca'
});
