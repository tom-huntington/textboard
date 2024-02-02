/// <reference types="astro/client" />
/// <reference types="simple-stack-form/types" />


type ENV = {
  SERVER_URL: string;
  D1: import('@cloudflare/workers-types/experimental').D1Database;
};

type Runtime = import('@astrojs/cloudflare').AdvancedRuntime<ENV>;

declare namespace App {
  interface Locals extends Runtime {
    user: {
      name: string;
      surname: string;
    };
  }
}