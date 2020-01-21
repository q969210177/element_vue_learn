<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(v, k) in laberProp"
        :key="k"
        :prop="v.label"
        :label="v.name"
        width="180"
      >
      </el-table-column>
    </el-table>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    //表名
    title: {
      type: String,
      default: "你沒有輸入表名"
    },
    //表数据
    tableData: {
      type: Array,
      default: Array
    },
    //字段名
    laberProp: {
      type: Array,
      default: Array
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
