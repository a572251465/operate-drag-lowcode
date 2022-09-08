<script lang="ts" setup>
import Header from "components/Header/index.vue";
</script>

<template>
  <Header />
  <div class="bottom">
    <div class="bottom-left headBk"></div>
    <div class="bottom-right">
      <div class="bottom-right-left"></div>
      <div class="bottom-right-right"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "assets/css/common.less";
.bottom {
  height: calc(100% - @headH - 20px);
  margin-top: 20px;

  .bottom-left {
    height: 100%;
    width: @navW;
  }
}
</style>
