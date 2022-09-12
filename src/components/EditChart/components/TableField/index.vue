<script lang="ts" setup></script>

<template>
  <div class="table-field full-height">
    <h3>数据源</h3>
    <el-select placeholder="选择数据源" size="large"></el-select>
    <h3>可选属性</h3>
    <el-checkbox-group>
      <ul class="flex-direction-column">
        <li>
          <el-checkbox label="记录数据" size="large" />
        </li>
        <li>
          <el-checkbox label="拥有者" size="large" />
        </li>
      </ul>
    </el-checkbox-group>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";
.table-field {
  width: 250px;
  padding: 0 5px;
  border-left: 1px dashed rgba(204, 204, 204, 0.4);

  ::v-deep(.el-select) {
    width: 100%;
  }
}

h3 {
  margin-left: 10px;
  font-style: italic;
  text-decoration: underline;
}

ul {
  li {
    padding: 0 15px;
    cursor: move;
    border: 1px solid transparent;

    &:hover {
      border: 1px dashed #0b71e6;
    }
  }
}
</style>
