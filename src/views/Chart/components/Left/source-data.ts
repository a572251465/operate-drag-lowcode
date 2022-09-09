import {IComponentClassify, IContainerClassify} from "@/types";

interface IComponent {
  type: IComponentClassify;
  icon: string;
  title: string;
}

export interface IFunctionType {
  title: string;
  icon: string;
  type: IContainerClassify,
  children: IComponent[];
}

const sourceData: IFunctionType[] = [
  {
    title: "拖拽容器",
    icon: "icon-rongqi",
    type: IContainerClassify.CONTAINER,
    children: []
  },
  {
    title: "拖拽组件",
    icon: "icon-zujian",
    type: IContainerClassify.COMPONENT,
    children: []
  }
];

export {
  sourceData
}
