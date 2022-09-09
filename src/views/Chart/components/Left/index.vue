<script lang="ts" setup>
import { reactive } from "vue";
import { IBasicsInfo } from "@/views/Chart/components/Left/basics-data";
import baseData from "./basics-data";
import { useEditorDrag } from "@/hook/useEditDrag";
import { IBasisComponent } from "@/types";

// 表示基本的组件数据
const dataList = reactive<IBasicsInfo[]>(baseData);
const { dragEnd, dragStart } = useEditorDrag();
</script>

<template>
  <div class="chart-left full-height">
    <ul class="oneNav navBk full-height">
      <li
        class="flex-center"
        draggable
        :ondragend="dragEnd"
        :ondragstart="(e) => dragStart(e, IBasisComponent.PANEL_COMPONENT)"
      >
        <el-tooltip content="容器组件" placement="top">
          <i class="iconfont fc icon-rongqifuwu" />
        </el-tooltip>
      </li>
      <li v-for="item of dataList" :key="item.icon" class="flex-center">
        <el-tooltip :content="item.title" placement="top">
          <i class="iconfont fc" :class="item.icon" />
        </el-tooltip>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";
.oneNav {
  width: 70px;
  .flex-fn(flex-start, center);
  .flex-direction-fn();

  & > li {
    height: 50px;
    width: 50px;
    border: 1px solid transparent;
    cursor: move;

    &:hover {
      border: 1px dashed #00c773;
    }

    &:first-child {
      margin: 30px 0;
    }

    & > i {
      font-size: 22px;
    }
  }
}
</style>
