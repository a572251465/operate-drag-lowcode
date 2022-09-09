import type {IThemeRcOption} from "postcss-theme-rc";

export default {
  // 获取色值
  colors: {
    c1: "#f5f5f5",
    c2: "#090a0a",
    c3: "#ccc",
    c4: "rgba(23, 24, 26, 0.8)",
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
    oneNavBk: ["c1", "c4"],
    // 图表二级导航背景颜色
    twoNavBk: ["c1", "c5"]
  },
  themeSelector: ["light", "dark"]
} as IThemeRcOption;
