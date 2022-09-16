<script lang="ts" setup>
import { IBasicsInfo } from "@/views/Chart/components/Left/basics-data";
import baseData from "./basics-data";
import { useEditorDrag } from "@/hook/useEditDrag";
import { IBasisComponent, IOperationMenu } from "@/types";
import containerSvg from "@/assets/images/container-svg.svg";
import { emitter, setSelectionPanel } from "@/utils";

// 表示基本的组件数据
const dataList = reactive<IBasicsInfo[]>(baseData);
const { dragEnd, dragStart } = useEditorDrag(
  (type: IBasisComponent, id: string) => {
    if (type !== IBasisComponent.PANEL_COMPONENT) {
      setSelectionPanel(id);
      emitter.emit(IOperationMenu.OPEN_EDIT_CHART, type);
    }
  }
);
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
          <img :src="containerSvg" alt="组件" />
        </el-tooltip>
      </li>
      <li
        v-for="item of dataList"
        :key="item.icon"
        class="flex-center"
        draggable
        :ondragend="dragEnd"
        :ondragstart="(e) => dragStart(e, item.type)"
      >
        <el-tooltip :content="item.title" placement="top">
          <img :src="item.icon" alt="组件" />
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

    img {
      width: 24px;
      height: 24px;
    }

    &:hover {
      border: 1px dashed #0b71e6;
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
