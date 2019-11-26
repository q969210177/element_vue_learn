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
      <el-col :span="12" ref="demo" class="border_red" style="height:400px">
      </el-col>
    </el-row>
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
  color: #40c9c6;
  background: #fff;
}
.chat {
  color: #36a3f7;
  background: #fff;
}
.female {
  color: #f4516c;
  background: #fff;
}
.camera {
  color: #34bfa3;
  background: #fff;
}
.card_father:hover .el-icon-user-solid {
  background: #40c9c6;
  color: #fff;
}
.card_father:hover .el-icon-chat-dot-square {
  background: #36a3f7;
  color: #fff;
}
.card_father:hover .el-icon-female {
  background: #f4516c;
  color: #fff;
}
.card_father:hover .el-icon-camera {
  background: #34bfa3;
  color: #fff;
}
</style>
