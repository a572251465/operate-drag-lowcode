import type {IThemeRcOption} from "postcss-theme-rc";

export default {
  // 获取色值
  colors: {
    c1: "#f5f5f5",
    c2: "#090a0a",
    c3: "#ccc",
    c4: "rgba(23, 24, 26)",
    c5: "#1b1c1f"
  },
  groups: {
    // 背景颜色设置的值 background
    bk: ["c1", "c2"],
    // 表示header 背景颜色
    headBk: ["c1", "c2"],
    // 字体颜色 font-color
    fc: ["c1", "c3"],
    // 图表一级导航背景颜色
    navBk: ["c1", "c5"],
    // panel 背景颜色
    panelBk: ["c4", "c4"]
  },
  themeSelector: ["light", "dark"]
} as IThemeRcOption;
