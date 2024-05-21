import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({ iconDir: "src/assets/icons" })
  ],
  devToolbar: {
    enabled: import.meta.env.DEV
  },
  prefetch: {
    prefetchAll: true
  },
  trailingSlash: 'never',
});