<template>
  <div class="padding_5">
    <el-row :gutter="50">
      <el-col :span="6" class="card_father" v-for="(v, k) in cardData" :key="k">
        <div>
          <el-card shadow="always">
            <el-row>
              <el-col :span="12" :class="v.class">
                <i
                  class="padding_2 border_radius_5  font_col font_size_48"
                  :class="v.icon"
                ></i>
              </el-col>
              <el-col :span="12" class="padding_2 ">
                <div class="card_font font_weight_80">{{ v.name[0] }}</div>
                <div class="margin_top_5 font_size_20 font_col_666">
                  {{ v.name[1] }}
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row class="margin_top_10">
        <el-col>
           <el-card shadow="always" ref="indexLineChart"  style="height:400px"> </el-card>
        </el-col>
    </el-row>
    <el-row class="margin_top_10">
      <el-col :span="8">
        <el-card shadow="always" ref="indexPieChart" style="height:400px">1</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always" >2</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always" >3</el-card>
      </el-col>
    </el-row>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
  </div>
  </div>
</template>
<script src="./root.js"></script>
<style lang="scss" scoped>
/deep/.el-card__body {
  padding: 10px;
}

.card_font {
  color: rgba(0, 0, 0, 0.55);
}
.user {
  color: #2c71ad;
  background: #fff;
}
.chat {
  color: #5abb5a;
  background: #fff;
}
.female {
  color: #f7af4a;
  background: #fff;
}
.camera {
  color: #df504a;
  background: #fff;
}
.card_father:hover .el-icon-user-solid {
  background: #2c71ad;
  color: #fff;
}
.card_father:hover .el-icon-chat-dot-square {
  background: #5abb5a;
  color: #fff;
}
.card_father:hover .el-icon-eleme {
  background: #f7af4a;
  color: #fff;
}
.card_father:hover .el-icon-camera {
  background: #df504a;
  color: #fff;
}
</style>
