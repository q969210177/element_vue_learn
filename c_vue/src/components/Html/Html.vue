<template>
  <div class="padding_5">
    <el-card v-for="(v, k) in articleDataList" :key="k" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ v.articleListTitle }}</span>
        <!-- <el-button class="text-rigth" type="text">操作按钮</el-button> -->
      </div>
      <div>
        {{ v.articleListContent }}
      </div>
    </el-card>
  </div>
</template>

<script src="./Html.js"></script>

<style lang="scss" scoped></style>
