<template>
  <div>
    <el-row class="img"></el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("@/assets/img/404.png")
    };
  }
};
</script>

<style>
.img {
  background: url("../../assets/img/404.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
}
.img::after {
  content: "";
  display: block;
  padding: 20%;
}
</style>
