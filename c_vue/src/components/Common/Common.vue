<template>
  <div id="MyHomeland">
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <!-- // eslint-disable-next-line prettier/prettier -->
        <el-input v-model="serachText" type="text" placeholder="请输入药品名">
          <el-button class="particleButton" slot="append" @click="serchRumor()">
            搜索
          </el-button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./Common.js"></script>

<style lang="scss" scoped>
@import "./Common.scss";
</style>
