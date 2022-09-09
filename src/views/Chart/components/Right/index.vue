<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { setElDom, ROOT_CANVAS_CONTAINER } from "@/utils";
import ChartItem from "@/views/Chart/components/ChartItem";
import { useDragStore } from "@/store/drag";
import { IPanelField } from "@/types";

// 表示画布el
const elRef = ref<HTMLDivElement>();
const store = useDragStore();
// 表示panel 列表
const panels = computed<IPanelField[]>(() => store.panels);

onMounted(() => {
  setElDom(ROOT_CANVAS_CONTAINER, elRef.value!);
});
</script>

<template>
  <div class="canvas-container full-height" ref="elRef">
    <ChartItem
      v-for="item in panels"
      :key="item.id"
      :panel-info="item"
    />
  </div>
</template>

<style lang="less" scoped>
.canvas-container {
  background: url("@/assets/images/canvas-bg.svg");
}
</style>
