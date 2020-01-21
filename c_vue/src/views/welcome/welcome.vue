<template>
  <div id="fa" class="fa">
    <el-row class="serachInput text_center">
      <serachInput :serlist="serList" @handSelect="handSelect"></serachInput>
      {{ test }}
    </el-row>
    <el-row class="welBar postion_absolute text_center width_100">
      <el-col
        v-for="(v, k) in serList"
        :key="k"
        class="padding_left_5"
        :span="v.span"
      >
        <el-link type="info" @click="handSelect(v)">{{ v.value }}</el-link>
      </el-col>
      <el-col class="font_col_fff margin_top_15 ">
        如有侵权 请联系邮件到 q969210177@gmail.com
      </el-col>
    </el-row>
  </div>
</template>

<script src="./welcome.js"></script>

<style>
.fa {
  width: 100vw;
  height: 100vh;
  /* background: url("../../assets/img/welBgImg.jpg"); */
  position: relative;
}
.serachInput {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.welBar {
  top: 80%;
}
</style>
