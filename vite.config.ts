import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd ? "/shardul-portfolio/" : "/",
  plugins: [react()],
});

/**
 * Scripts
 */
export const scripts = {
  dev: "vite --host",
  build: "tsc -b && vite build",
  predeploy: "npm run build",
  deploy: "gh-pages -d dist",
};