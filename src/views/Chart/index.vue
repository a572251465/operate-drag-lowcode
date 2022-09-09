<script lang="ts" setup>
import Left from "@/views/Chart/components/Left/index.vue";
</script>

<template>
  <div class="chart flex-direction-row full-height">
    <Left />
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.chart {
  background: url('@/assets/images/canvas-bg.svg');
}
</style>
