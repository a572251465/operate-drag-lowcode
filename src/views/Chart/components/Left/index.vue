<script lang="ts" setup>
import { sourceData, IFunctionType } from "./source-data";
import { reactive } from "vue";

// 表示功能列表
const fnList = reactive<IFunctionType[]>(sourceData);
</script>

<template>
  <div class="chart-left full-height flex-direction-row">
    <ul class="oneNav oneNavBk full-height">
      <li v-for="item of fnList" :key="item.icon" class="flex-center">
        <el-tooltip :content="item.title" placement="top">
          <i class="iconfont pointer" :class="item.icon" />
        </el-tooltip>
      </li>
    </ul>
    <div class="twoNav twoNavBk full-height"></div>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";
.oneNav {
  width: 60px;

  li:first-child {
    margin-top: 20px;
  }

  li {
    height: 60px;

    i {
      color: #fff;
      font-size: 25px;

      &:hover {
        color: #409eff;
      }
    }
  }
}

.twoNav {
  width: 100px;
}
</style>
