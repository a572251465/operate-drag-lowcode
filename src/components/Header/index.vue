<script lang="ts" setup>
import { ref } from "vue";

// 表示模板flag
const themeFlag = ref<boolean>(false);
</script>

<template>
  <div class="header headBk">
    <div class="header-left">
      <img src="" alt="logo">
    </div>
    <div class="header-middle"></div>
    <div class="header-right">
      <el-switch
        v-model="themeFlag"
        inline-prompt
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
}
</style>
