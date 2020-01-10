<template>
  <div id="fa" class="fa"></div>
</template>

<script>
import * as PIXI from "pixi.js";
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    const app = new PIXI.Application({ backgroundColor: 0x1099bb });
    document.getElementById("fa").appendChild(app.view);

    app.renderer.resize(window.innerWidth, window.innerHeight);
    const richText = new PIXI.Text("欢迎来到 陈的个人主页");
    richText.x = 50;
    richText.y = 250;

    app.stage.addChild(richText);
    // window.onresize = function() {
    //   console.log(111);
    // };
  }
};
</script>

<style>
.fa {
  width: 100vw;
  height: 100vh;
}
</style>
