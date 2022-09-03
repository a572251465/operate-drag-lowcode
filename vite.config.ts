import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import PostcssThemeRc from "postcss-theme-rc";
import themeConfig from "./theme.config";

const resolvePath = (...urls: string[]) => path.resolve(__dirname, ...urls);
const PostcssThemeRcPlugin = PostcssThemeRc(themeConfig);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx()],
  css: {
    postcss: {
      plugins: [PostcssThemeRcPlugin]
    }
  },
  resolve: {
    alias: {
      "@": resolvePath("src")
    }
  }
});
