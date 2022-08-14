import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteRadar from "vite-plugin-radar";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteRadar({
      enableDev: true,
      // analytics: {
      //   id: "UA-1789715-1",
      // },
      gtm: {
        id: "GTM-XXXXXXXX",
      },
      // pixel: {
      //   id: "XXXXXXXX",
      // },
    }),
  ],
  server: {
    port: 3000,
  },
});
