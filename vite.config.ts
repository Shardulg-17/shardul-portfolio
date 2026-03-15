import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
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