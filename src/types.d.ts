// 表示所有组件的类（组件/ 容器）
export enum IBasisComponent {
  BLOCK_PANEL = "BLOCK_PANEL",
  URL_COMPONENT = "URL_COMPONENT",
  TABLE_COMPONENT = "TABLE_COMPONENT",
  TEXT_COMPONENT = "TEXT_COMPONENT",
  CENSUS_COMPONENT = "CENSUS_COMPONENT"
}

export interface INormalFn<T = any, S = void> {
  (...args: T[]): S;
  l?: INormalFn
}
