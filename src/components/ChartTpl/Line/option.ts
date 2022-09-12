import { EChartsOption } from "echarts";

/**
 * @author lihh
 * @description 生成line 图表的 options
 * @param xData x轴 需要的数据
 * @param yData y轴 需要的数据
 */

export const genOption = (xData: string[], yData: any[]) => {
  const options: EChartsOption = {
    xAxis: {
      type: "category",
      data: xData
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: yData,
        type: "line"
      }
    ]
  };

  return options;
};
