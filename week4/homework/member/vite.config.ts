import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@apis": path.resolve(__dirname, "src/shared/apis"),
      "@assets": path.resolve(__dirname, "src/shared/assets"),
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@constants": path.resolve(__dirname, "src/shared/constants"),
      "@hooks": path.resolve(__dirname, "src/shared/hooks"),
      "@styles": path.resolve(__dirname, "src/shared/styles"),
      // @types는 npm @types 스코프와 충돌하므로 사용 불가 → @shared/types/ 사용
      "@utils": path.resolve(__dirname, "src/shared/utils"),
    },
  },
});
