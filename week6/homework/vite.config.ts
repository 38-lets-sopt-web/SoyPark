import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@apis": path.resolve(__dirname, "./src/shared/apis"),
      "@assets": path.resolve(__dirname, "./src/shared/assets"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@styles": path.resolve(__dirname, "./src/shared/styles"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
      "@constants": path.resolve(__dirname, "./src/shared/constants"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  optimizeDeps: {
    exclude: ["@tanstack/react-query-devtools"],
  },
});
