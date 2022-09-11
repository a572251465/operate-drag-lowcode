import { IBasisComponent } from "@/types";

export const ROOT_CANVAS_CONTAINER = {};
export const panelDefaultSize = { width: 500, height: 300 };

export const COMPONENT_FIXED_DESC: Record<IBasisComponent, string> = {
  [IBasisComponent.URL_COMPONENT]: "URL 组件",
  [IBasisComponent.PANEL_COMPONENT]: "PANEL 组件",
  [IBasisComponent.TEXT_COMPONENT]: "文本 组件",
  [IBasisComponent.CENSUS_COMPONENT]: "统计 组件",
  [IBasisComponent.TABLE_COMPONENT]: "表格 组件"
};
