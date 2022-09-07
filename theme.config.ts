import type {IThemeRcOption} from "postcss-theme-rc";

export default {
  // 获取色值
  colors: {
    c1: "#f5f5f5",
    c2: "#090a0a",
    c3: "#ccc",
    c4: "#fff",
    c5: "#212326",
    c6: "#17181acc"
  },
  groups: {
    // 背景颜色设置的值 background
    bk: ["c1", "c2"],
    // 表示header 背景颜色
    headBk: ["c4", "c6"],
    // 字体颜色 font-color
    fc: ["c2", "c3"],
    // 表示panel 背景色
    panelBk: ["c4", "c6"]
  },
  themeSelector: ["light", "dark"]
} as IThemeRcOption;
