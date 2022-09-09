<script lang="ts" setup>
import Header from "components/Header/index.vue";
</script>

<template>
  <Header />
  <div class="bottom">
    <router-view />
  </div>
</template>

<style lang="less" scoped>
@import "assets/css/common.less";
.bottom {
  height: calc(100% - @headH);
}
</style>
