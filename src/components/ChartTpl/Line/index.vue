<script lang="ts" setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import { genOption } from "@/components/ChartTpl/Line/option";

// 表示渲染的dom
const drawEl = ref<HTMLDivElement>();

/**
 * @author lihh
 * @description 表示绘制line 图表
 */
const drawLine = () => {
  const myChart = echarts.init(drawEl.value!);
  const option = genOption(
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    [150, 230, 224, 218, 135, 147, 260]
  );
  myChart.setOption(option);
};
onMounted(drawLine);
</script>

<template>
  <div class="line-chart" ref="drawEl"></div>
</template>

<style lang="less" scoped>
.line-chart {
  width: 100%;
  height: 100%;
}
</style>
