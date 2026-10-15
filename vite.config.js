import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Em desenvolvimento, chamadas para /api vão para o back-end local.
    // Ajuste a porta se o back-end rodar em outra.
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
