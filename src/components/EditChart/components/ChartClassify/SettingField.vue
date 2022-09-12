<script lang="ts" setup>
import Bar from "@/components/FieldConfigure/Bar";
import { ISelectionChartType } from "@/types";
import Funnel from "@/components/FieldConfigure/Funnel";
import Gauge from "@/components/FieldConfigure/gauge";
import Line from "@/components/FieldConfigure/Line";
import Pie from "@/components/FieldConfigure/Pie";
import Table from "@/components/FieldConfigure/Table";
import Text from "@/components/FieldConfigure/Text";
import Url from "@/components/FieldConfigure/Url";
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
  <div class="setting-field">
    <component :is="currentComponent" />
  </div>
</template>
