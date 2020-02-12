<template>
  <div id="MyHomeland">
    <canvas id="cas"></canvas>
    <!-- <audio
      autoplay="autoplay"
      loop="loop"
      preload="auto"
      src="http://969210177.cn/assets/%E6%88%91%E7%9A%84%E7%A5%96%E5%9B%BD.mp3"
    ></audio>  // "plugin:vue/recommended",
      // "@vue/prettier"-->

    <el-row class="serachInput">
      <el-col>
        <!-- // eslint-disable-next-line prettier/prettier -->
        <el-input v-model="serachText" type="text" placeholder="请输入药品名">
          <el-button class="particleButton" slot="append" @click="serchRumor()"
            >搜索</el-button
          >
        </el-input>
      </el-col>
      <!-- 列表名稱 :tableOption="tableOption"-->
      <el-col class="padding_top_30" :span="24">
        <eztable :tableData="serachData" :laberProp="serachLaberProp"></eztable>
      </el-col>
      <!-- <el-col :span="4">
        <span>
          <el-slider v-model="value" vertical height="100px"> </el-slider>
        </span>
      </el-col> -->
    </el-row>
  </div>
</template>

<script src="./Common.js"></script>

<style lang="scss" scoped>
#MyHomeland {
  width: 100vw;
  height: 100vh;
  // background: url("http://969210177.cn/img/MyHomeland.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.serachInput {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
