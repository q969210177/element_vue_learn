export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    change(value, id) {
      console.log(value, id);
    }
  },
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
