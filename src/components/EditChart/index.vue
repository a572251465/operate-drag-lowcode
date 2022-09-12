<script lang="ts" setup>
import { ref } from "vue";
import { emitter } from "@/utils";
import { IBasisComponent, IOperationMenu } from "@/types";
import ChartClassify from "@/components/EditChart/components/ChartClassify/index.vue";
import ChartDraw from "@/components/EditChart/components/ChartDraw/index.vue";
import TableField from "@/components/EditChart/components/TableField/index.vue";

// 弹框显隐表示
const showFlag = ref<boolean>(true);

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
    size="1200px"
    :close-on-click-modal="false"
  >
    <div class="edit-chart flex-direction-row full-height">
      <chart-draw />
      <table-field />
      <chart-classify />
    </div>
  </el-drawer>
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.edit-chart {
  justify-content: flex-end;
  padding: 30px 0;
}
</style>
