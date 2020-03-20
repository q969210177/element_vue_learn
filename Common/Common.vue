<template>
  <div id="MyHomeland">
    <div class="romor_item_box_1 text_center">
      <div class="width_100">
        <el-input v-model="serachText" type="text" placeholder="请输入药品名">
          <el-button class="particleButton" slot="append" @click="serchRumor()">
            搜索
          </el-button>
        </el-input>
      </div>
    </div>

    <div class="padding_10 romor_item_box_2">
      <!-- {{ serachData }} -->
      <div>
        <eztable
          :tableData="serachData"
          :laberProp="serachLaberProp"
          :operatingButton="operatingButton"
          :tableOption="tableOption"
          @handleClick="buttonClick"
        >
        </eztable>
      </div>

      <div class="bg_col_666">
        11
      </div>
      <!-- 点击查看按钮弹出的模态框 -->
      <el-dialog
        :title="drugDilogData.rumorName"
        width="350px"
        :visible.sync="drugDilogStatus"
        @close="drugDilogClose"
      >
        <el-card>
          <img width="350px" height="200px" :src="drugDilogData.rumorImgSrc" />
          <div>
            <span>11</span>
            <div class="bottom clearfix">
              <time class="font_col_666">111</time>
              <el-button size="mini" @click="drugDilogStatus = false">
                取 消
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="drugDilogStatus = false"
              >
                确 定
              </el-button>
            </div>
          </div>
        </el-card>
        <span slot="footer" class="dialog-footer"> </span>
      </el-dialog>
    </div>
  </div>
</template>

<script src="./Common.js"></script>

<style lang="scss" scoped>
@import "./Common.scss";
</style>
