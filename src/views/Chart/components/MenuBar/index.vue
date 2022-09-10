<script lang="ts" setup>
import { defineProps, PropType, reactive } from "vue";
import { INormalFn, IPanelField } from "@/types";
import { useDragStore } from "@/store/drag";
import { ElMessage, ElMessageBox } from "element-plus";

// 表示 编辑类型
enum IBarType {
  EXPAND = "EXPAND",
  EDIT = "EDIT",
  COPY = "COPY",
  DELETE = "DELETE"
}

// 参数
const props = defineProps({
  panelInfo: {
    type: Object as PropType<IPanelField>,
    required: true
  },
  showFlag: {
    type: Boolean,
    default: false
  }
});

// icon 列表
const iconList = reactive<{ title: string; icon: string; type: IBarType }[]>([
  {
    icon: "icon-quanping",
    title: "放大",
    type: IBarType.EXPAND
  },
  {
    icon: "icon-bianji",
    title: "编辑",
    type: IBarType.EDIT
  },
  {
    icon: "icon-fuzhi",
    title: "复制",
    type: IBarType.COPY
  },
  {
    icon: "icon-shanchu",
    title: "删除",
    type: IBarType.DELETE
  }
]);
const store = useDragStore();

/**
 * @author lihh
 * @description 删除容器
 */
const removeBlock = () => {
  const callback = () => {
    store.removePanel(props.panelInfo.id);
    ElMessage.success("删除成功");
  };
  ElMessageBox.confirm("确定要删除组件吗?", "删除确认", {
    type: "warning",
    confirmButtonText: "删除",
    cancelButtonText: "取消"
  }).then(callback);
};
const transformStrategy: Record<IBarType, INormalFn> = {
  [IBarType.DELETE]: removeBlock,
  [IBarType.COPY]: removeBlock,
  [IBarType.EDIT]: removeBlock,
  [IBarType.EXPAND]: removeBlock
};

/**
 * @author lihh
 * @description 表示转换方法 策略模式
 * @param type 类型
 */
const transformFn = (type: IBarType) => {
  const fn = transformStrategy[type];
  if (typeof fn !== "function") return;

  fn();
};
</script>

<template>
  <transition name="fade">
    <ul class="icons flex-center" v-show="showFlag">
      <li
        v-for="item in iconList"
        :key="item.icon"
        class="flex-center"
        @click="transformFn(item.type)"
      >
        <el-tooltip :content="item.title" placement="top">
          <i class="iconfont" :class="item.icon" />
        </el-tooltip>
      </li>
    </ul>
  </transition>
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";
.icons {
  margin: 0 auto;
  width: 200px;
  height: 40px;
  background: #ccc;

  li {
    width: 50px;
    height: 100%;
    cursor: pointer;

    &:hover {
      background: black;
      i {
        color: #ffffff;
      }
    }
  }

  i {
    font-size: 20px;
    color: black;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
