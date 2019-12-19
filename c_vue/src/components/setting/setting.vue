<template>
  <div>
    <el-select v-model="value" placeholder="请选择" @change="change">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script src="./setting.js"></script>

<style lang="scss" scoped></style>
