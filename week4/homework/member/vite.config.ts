import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
      "@pages": path.resolve(dirname, "src/pages"),
      "@routes": path.resolve(dirname, "src/routes"),
      "@shared": path.resolve(dirname, "src/shared"),
      "@apis": path.resolve(dirname, "src/shared/apis"),
      "@assets": path.resolve(dirname, "src/shared/assets"),
      "@components": path.resolve(dirname, "src/shared/components"),
      "@constants": path.resolve(dirname, "src/shared/constants"),
      "@hooks": path.resolve(dirname, "src/shared/hooks"),
      "@styles": path.resolve(dirname, "src/shared/styles"),
      // @types는 npm @types 스코프와 충돌하므로 사용 불가 → @shared/types/ 사용
      "@utils": path.resolve(dirname, "src/shared/utils"),
    },
  },
});
