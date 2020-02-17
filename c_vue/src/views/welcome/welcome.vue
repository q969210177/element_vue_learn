<template>
  <div class="fa" id="fa">
    <div class="text_center width_100 fa_input margin_top_100">
      <serachInput :serlist="serList" @handSelect="handSelect"></serachInput>
    </div>

    <div class="wei_link">
      <a
        href="JavaScript:void(0)"
        v-for="(v, k) in serList"
        :key="k"
        @click="handSelect(v)"
        class="wei_link"
      >
        {{ v.value }}
      </a>
      <div class=" width_100 font_col_fff indicate text_center">
        如有侵权 请联系邮件到 q969210177@gmail.com
      </div>
    </div>
  </div>
</template>

<script src="./welcome.js"></script>

<style lang="scss" scoped>
.fa {
  width: 100vw;
  height: 100vh;
  /* background: url("../../assets/img/welBgImg.jpg"); */
  /* 初始弹性盒模型 */
  display: flex;
  /* 设置主轴的排列方式 默认值是row 水平排列*/
  /* flex-direction: row; */
  flex-wrap: wrap;
  /* 默认轴的对齐方式 X轴水平 Y轴垂直 */
  justify-content: center;
  /* 主轴对应的轴的对齐方式 默认是Y轴 */
}
.fa_input {
  align-self: flex-end;
}
.wei_link {
  margin-left: 20px;
  align-self: flex-end;
}
.indicate {
  margin-bottom: 100px;
}
</style>
