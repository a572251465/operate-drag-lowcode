import { IBasisComponent } from "@/types";

export interface IBasicsInfo {
  type: IBasisComponent;
  icon: string;
  title: string;
}

const basicsData: IBasicsInfo[] = [
  {
    type: IBasisComponent.TABLE_COMPONENT,
    icon: "icon-biaoge",
    title: "表格组件"
  },
  {
    type: IBasisComponent.TEXT_COMPONENT,
    icon: "icon-fuwenben",
    title: "富文本组件"
  },
  {
    type: IBasisComponent.CENSUS_COMPONENT,
    icon: "icon-pie-chart-full",
    title: "统计组件"
  },
  {
    type: IBasisComponent.URL_COMPONENT,
    icon: "icon-suffix-url",
    title: "URL组件"
  }
];

export default basicsData;
