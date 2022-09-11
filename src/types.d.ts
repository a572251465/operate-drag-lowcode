interface IComponentBasicsTypes {
  type: IBasisComponent;
  id: string;
  identity: object;
}

export interface IChartField extends IComponentBasicsTypes {}

export interface IPanelField extends IComponentBasicsTypes {
  width: number;
  height: number;
  left: number;
  top: number;
  isFocus?: boolean,
  alignCenter?: boolean,
  component?: IChartField;
}

// 表示所有组件的类（组件/ 容器）
export enum IBasisComponent {
  PANEL_COMPONENT = "PANEL_COMPONENT",
  URL_COMPONENT = "URL_COMPONENT",
  TABLE_COMPONENT = "TABLE_COMPONENT",
  TEXT_COMPONENT = "TEXT_COMPONENT",
  CENSUS_COMPONENT = "CENSUS_COMPONENT"
}

export interface INormalFn<T = any, S = void> {
  (...args: T[]): S;
  l?: INormalFn;
}
