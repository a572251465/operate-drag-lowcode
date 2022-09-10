import { IBasisComponent } from "@/types";
import tableSvg from '@/assets/images/table-svg.svg';
import textSvg from '@/assets/images/text-svg.svg';
import statisSvg from '@/assets/images/statis-svg.svg';
import urlSvg from '@/assets/images/url-svg.svg';

export interface IBasicsInfo {
  type: IBasisComponent;
  icon: string;
  title: string;
}

const basicsData: IBasicsInfo[] = [
  {
    type: IBasisComponent.TABLE_COMPONENT,
    icon: tableSvg,
    title: "表格组件"
  },
  {
    type: IBasisComponent.TEXT_COMPONENT,
    icon: textSvg,
    title: "富文本组件"
  },
  {
    type: IBasisComponent.CENSUS_COMPONENT,
    icon: statisSvg,
    title: "统计组件"
  },
  {
    type: IBasisComponent.URL_COMPONENT,
    icon: urlSvg,
    title: "URL组件"
  }
];

export default basicsData;
