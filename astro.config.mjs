// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  security: {
    checkOrigin: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [db()]
});