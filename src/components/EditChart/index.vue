<script lang="ts" setup>
import { ref } from "vue";
import { emitter } from "@/utils";
import { IBasisComponent, IOperationMenu } from "@/types";

// 弹框显隐表示
const showFlag = ref<boolean>(false);

// 监听编辑图表触发
emitter.on(IOperationMenu.OPEN_EDIT_CHART, function (type: IBasisComponent) {
  showFlag.value = true;
});
</script>

<template>
  <el-drawer
    v-model="showFlag"
    :with-header="false"
    :modal="false"
    size="1000px"
    :close-on-click-modal="false"
  >
    <span>Hi there!</span>
  </el-drawer>
</template>

<style lang="less" scoped></style>
