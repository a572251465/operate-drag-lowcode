<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { setElDom, ROOT_CANVAS_CONTAINER } from "@/utils";

// 表示画布el
const elRef = ref<HTMLDivElement>();

onMounted(() => {
  setElDom(ROOT_CANVAS_CONTAINER, elRef.value!);
});
</script>

<template>
  <div class="canvas-container full-height" ref="elRef"></div>
</template>

<style lang="less" scoped>
.canvas-container {
  background: url("@/assets/images/canvas-bg.svg");
}
</style>
