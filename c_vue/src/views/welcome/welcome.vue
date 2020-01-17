<template>
  <!-- style="background: url('http://969210177.cn/img/welBgImg.jpg'); background-size: 100% 100%" -->
  <div id="fa" class="fa">
    <div class="serachInput text_center">
      <el-autocomplete
        v-model="state"
        popper-class="my-autocomplete"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      >
        <i
          slot="suffix"
          class="el-icon-serach el-input__icon"
          @click="changeWebPath"
        >
        </i>
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
          <span class="addr">{{ item.address }}</span>
        </template>
      </el-autocomplete>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import * as PIXI from "pixi.js";
export default {
  data() {
    return {
      restaurants: [],
      state: ""
    };
  },
  beforeMount() {},
  mounted() {
    let fatherDom = document.getElementById("fa");
    let a = "http://969210177.cn/img/welBgImg1.jpg";
    fatherDom.style = `background: url(${a});background-size: 100% 100%`;
    this.restaurants = this.loadAll();
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "知乎", path: "" },
        {
          value: "后台模板",
          path: ""
        },
        {
          value: "开发文档",
          path: ""
        },
        { value: "gitHub", path: "" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    changeWebPath(ev) {
      console.log(ev);
    }
  }
};
</script>

<style>
.fa {
  width: 100vw;
  height: 100vh;
  /* background: url("../../assets/img/welBgImg.jpg"); */
  background-size: 100% 100%;
  position: relative;
}
.serachInput {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
