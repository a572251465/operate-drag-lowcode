<script lang="ts" setup>
import Left from "@/views/Chart/components/Left/index.vue";
import Right from "@/views/Chart/components/Right/index.vue";
import EditChart from "@/components/EditChart/index.vue";
</script>

<template>
  <div class="chart flex-direction-row full-height">
    <Left />
    <div class="flex-1 chart-right flex-direction-column">
      <div class="chart-right-top">
        <Right />
      </div>
      <div class="chart-right-bottom">
        <el-tooltip content="预览" placement="top">
          <i class="iconfont icon-yulan pointer fc"></i>
        </el-tooltip>
      </div>
    </div>
  </div>

  <!-- 编辑图表 -->
  <EditChart />
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.chart-right {
  .chart-right-top {
    flex: 1;
    margin: 30px 30px 0 30px;
  }

  .chart-right-bottom {
    height: 50px;
    padding: 0 30px;
    .flex-fn(flex-end, center);

    > i {
      font-size: 20px;
    }
  }
}
</style>
