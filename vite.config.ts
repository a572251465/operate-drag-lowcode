import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import PostcssThemeRc from "postcss-theme-rc";
import themeConfig from "./theme.config";
import path from "path";
import fs from "fs";
const PostcssThemeRcPlugin = PostcssThemeRc(themeConfig);


/**
 * @author lihh
 * @description 解析路径
 * @param urls 传递的多个参数
 */
const resolvePath = (...urls: string[]) => path.resolve(__dirname, ...urls);

/**
 * @author lihh
 * @description 解析指定目录 vite.config.ts 用
 * @param dir 表示参数目录 待解析的路径
 * @return Record<string, string>
 */
const resolveAssignDir = (dir: string): Record<string, string> => {
  const res = { src: resolvePath("src"), "@": resolvePath("src") };
  const stat = fs.statSync(dir);
  if (!stat.isDirectory()) return res;

  let fileNames = fs.readdirSync(dir);
  fileNames = fileNames.filter((name) => {
    const pathDir = path.join(dir, name);
    const stat = fs.statSync(pathDir);
    return stat.isDirectory();
  });
  const otherDirs = fileNames.reduce((memo, curr) => {
    memo[curr] = path.join(dir, curr);
    return memo;
  }, {} as Record<string, string>);
  return Object.assign({}, res, otherDirs);
};

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
      ...resolveAssignDir(resolvePath("src"))
    },
    extensions: [".vue", ".ts", ".tsx", ".js"]
  }
});
