import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base : "/country-explorer/",
  plugins: [tailwindcss()],
  server: {
    port: 3001,
  },
});
