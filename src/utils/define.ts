import {IBasisComponent, ISelectionChartType} from "@/types";
import {reactive} from "vue";

export const ROOT_CANVAS_CONTAINER = {};
export const panelDefaultSize = { width: 500, height: 300 };

export const COMPONENT_FIXED_DESC: Record<IBasisComponent, string> = {
  [IBasisComponent.URL_COMPONENT]: "URL 组件",
  [IBasisComponent.PANEL_COMPONENT]: "PANEL 组件",
  [IBasisComponent.TEXT_COMPONENT]: "文本 组件",
  [IBasisComponent.CENSUS_COMPONENT]: "统计 组件",
  [IBasisComponent.TABLE_COMPONENT]: "表格 组件"
};

// 表示图表分类标签
export const selectionTagsList = reactive<
  { title: string; icon: string; type: ISelectionChartType }[]
  >([
  { title: "折线图", icon: "icon-line", type: ISelectionChartType.LINE },
  { title: "柱状图", icon: "icon-bar", type: ISelectionChartType.BAR },
  { title: "饼状图", icon: "icon-pie", type: ISelectionChartType.PIE },
  { title: "仪表盘", icon: "icon-gauge", type: ISelectionChartType.GAUGE },
  { title: "漏斗图", icon: "icon-funnel", type: ISelectionChartType.FUNNEL },
  { title: "URL", icon: "icon-suffix-url", type: ISelectionChartType.URL },
  { title: "表格", icon: "icon-biaoge", type: ISelectionChartType.TABLE },
  { title: "富文本", icon: "icon-fuwenben", type: ISelectionChartType.TEXT }
]);
