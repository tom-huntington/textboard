import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import tailwind from '@astrojs/tailwind';
import auth from "auth-astro";

import simpleStackForm from "simple-stack-form";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: 'local',
      type: 'pages',
      bindings: {
        // example of a var binding (environment variable)
        // "URL": {
        //   type: "var",
        //   value: "https://example.com",
        // },
        // example of a D1 binding
        "D1": {
          type: "d1"
        }
      }
    }
  }),
  integrations: [tailwind(), auth(), simpleStackForm()]
});