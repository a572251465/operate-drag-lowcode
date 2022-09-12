<script lang="ts" setup>
import Bar from "@/components/ChartTpl/Bar.vue";
import Funnel from "@/components/ChartTpl/Funnel.vue";
import Gauge from "@/components/ChartTpl/gauge.vue";
import Line from "@/components/ChartTpl/Line.vue";
import Pie from "@/components/ChartTpl/Pie.vue";
import Table from "@/components/ChartTpl/Table.vue";
import Text from "@/components/ChartTpl/Text.vue";
import Url from "@/components/ChartTpl/Url.vue";
import { ISelectionChartType } from "@/types";
import { computed } from "vue";
import { selectionChartType } from "@/utils";

type IComponentType = typeof Bar;

// 表示图表记录
const chartRecords: Record<ISelectionChartType, IComponentType> = {
  [ISelectionChartType.BAR]: Bar,
  [ISelectionChartType.FUNNEL]: Funnel,
  [ISelectionChartType.GAUGE]: Gauge,
  [ISelectionChartType.LINE]: Line,
  [ISelectionChartType.PIE]: Pie,
  [ISelectionChartType.TABLE]: Table,
  [ISelectionChartType.TEXT]: Text,
  [ISelectionChartType.URL]: Url
};
// 表示当前选中的组件
const currentComponent = computed<IComponentType | null>(() =>
  selectionChartType.value ? chartRecords[selectionChartType.value] : null
);
</script>

<template>
  <div class="chart-draw full-height flex-center">
    <div class="inner">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.chart-draw {
  flex: 1;

  .inner {
    height: 678px;
    width: 100%;
  }
}
</style>
