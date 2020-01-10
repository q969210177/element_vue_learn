export default {
  data() {
    return {
      options: {
        text: "Hello World",
        size: 100,
        weight: 200
      },
      controll: {
        points: false,
        box: false,
        grids: false,
        roundCap: false,
        multiply: false
      }
    };
  },
  mounted() {
    // this.$get("http://969210177.cn/php/userMenu/userMenu.php", {
    //   menuId: "2"
    // }).then(res => {
    //   console.log(res);
    // });
  }
};
