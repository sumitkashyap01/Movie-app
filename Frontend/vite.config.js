import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/movies": {
        target: "https://movie-app-2q5c.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
