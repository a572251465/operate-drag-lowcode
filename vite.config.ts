import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import path from "path";

const resolvePath = (...urls: string[]) => path.resolve(__dirname, ...urls);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx()],
  resolve: {
    alias: {
      "@": resolvePath("src")
    }
  }
});
