<script lang="ts" setup>
import { reactive } from "vue";
import { ISelectionChartType } from "@/types";
import { selectionChartType } from "@/utils";

// 表示图表分类标签
const tagsList = reactive<
  { title: string; icon: string; type: ISelectionChartType }[]
>([
  { title: "折线图", icon: "icon-line", type: ISelectionChartType.LINE },
  { title: "柱状图", icon: "icon-bar", type: ISelectionChartType.BAR },
  { title: "饼状图", icon: "icon-pie", type: ISelectionChartType.PIE },
  { title: "仪表盘", icon: "icon-gauge", type: ISelectionChartType.GAUGE },
  { title: "漏斗图", icon: "icon-funnel", type: ISelectionChartType.FUNNEL },
  { title: "URL", icon: "icon-suffix-url", type: ISelectionChartType.URL },
  { title: "表格", icon: "icon-biaoge", type: ISelectionChartType.TABLE },
  { title: "富文本", icon: "icon-fuwenben", type: ISelectionChartType.TEXT }
]);

/**
 * @author lihh
 * @description 选择图表分类事件
 * @param type 分类
 */
const selectionChartHandle = (type: ISelectionChartType) => {
  selectionChartType.value = type;
};
</script>

<template>
  <div class="chart-classify full-height">
    <h3>图表</h3>
    <ul class="flex-direction-row charts">
      <li
        v-for="item in tagsList"
        :key="item.icon"
        @click="selectionChartHandle(item.type)"
        :class="selectionChartType === item.type ? 'chart-active' : ''"
      >
        <el-tooltip placement="top" :content="item.title">
          <i class="iconfont" :class="item.icon" />
        </el-tooltip>
      </li>
    </ul>
    <h3>配置</h3>
    <div class="tabs">
      <el-tabs>
        <el-tab-pane label="配置" name="configure">User</el-tab-pane>
        <el-tab-pane label="属性" name="attribute">Config</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";
.chart-classify {
  width: 260px;
  padding: 0 5px;
  border-left: 1px dashed rgba(204, 204, 204, 0.4);
}

h3 {
  margin-left: 10px;
  font-style: italic;
  text-decoration: underline;
}

.charts {
  flex-wrap: wrap;

  & > li {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      border: 1px dashed #0b71e6;
    }

    i {
      font-size: 20px;
    }
  }

  .chart-active {
    border: 1px dashed #0b71e6;
  }
}

.tabs {
  padding: 0 10px;
}
</style>
