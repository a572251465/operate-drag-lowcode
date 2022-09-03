import type {IThemeRcOption} from "postcss-theme-rc";

export default {
  // 获取色值
  colors: {
    c1: "#f5f5f5",
    c2: "#000000",
    c3: "#ccc"
  },
  groups: {
    // 背景颜色设置的值 background
    bk: ["c1", "c2"],
    // 字体颜色 font-color
    fc: ["c2", "c3"]
  },
  themeSelector: ["light", "dark"]
} as IThemeRcOption;
