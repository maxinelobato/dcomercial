import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteRadar from "vite-plugin-radar";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteRadar({
      enableDev: true,
      gtm: {
        id: "GTM-PMX3LP3",
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
