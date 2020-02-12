<template>
  <div>
    <el-table :data="tableData" :border="tableOption.border">
      <el-table-column
        v-for="(v, k) in laberProp"
        :key="k"
        :prop="v.label"
        :label="v.name"
      >
      </el-table-column>
    </el-table>
    <div>{{ title }}</div>
  </div>
</template>

<script src="./table.js"></script>

<style lang="scss" scoped></style>
