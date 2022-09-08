<script lang="ts" setup>
import { ref, watch } from "vue";
import logo from "@/assets/images/logo.svg";

// 表示主题
const themeFlag = ref<boolean>(false);

watch(themeFlag, (value: boolean) => {
  const keyWorld = value ? "light" : "dark";
  const el = document.querySelector("html") as HTMLElement;
  el.setAttribute(`data-theme-rc`, keyWorld);
});
</script>

<template>
  <div class="header headBk flex-between-center">
    <div class="header-left flex-center">
      <img :src="logo" alt="logo" />
    </div>
    <div class="header-middle"></div>
    <div class="header-right flex-center">
      <el-switch
        v-model="themeFlag"
        inline-prompt
        style="--el-switch-off-color: #13ce66"
        size="large"
        active-text="护眼"
        inactive-text="明亮"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "assets/css/common.less";
.header {
  height: @headH;

  .header-left {
    > img {
      width: 35px;
      height: 35px;
    }
  }
}

.header-left,
.header-right {
  width: 80px;
  height: 100%;
}
</style>
