export default {
  beforeRouteEnter(to, from, next) {
    let id = sessionStorage.getItem("token");
    console.log(id[4]);
    if (id[4] !== "1") {
      next(vm => {
        vm.$alertMessage({
          text: "您没有权限访问此页面",
          type: "error",
          show: true
        });
        next("/404");
      });
    } else {
      next();
    }
    next();
  }
};
