/* eslint-disable no-console */
import serachInput from "../selectInput/selectInput.vue";
export default {
  name: "navbar",
  components: {
    serachInput: serachInput
  },
  data() {
    return {
      navbarDropdownData: [
        { name: "个人中心", path: "/personal" },
        { name: "首页", path: "/home" },
        { name: "项目地址", path: "https://github.com/" },
        { name: "退出登录", path: "/login" }
      ],
      serList: [
        { value: "首页", path: "/index" },
        {
          value: "文档",
          path: "/document"
        },
        {
          value: "用户管理",
          path: "/user_setting"
        },
        { value: "数据管理", path: "/home_data" },
        { value: "商户管理", path: "/shop" },
        { value: "知乎", path: "/look" },
        { value: "图标", path: "/home_icon" },
        { value: "个人中心", path: "/personal" }
      ],
      timeout: null,

      src: "http://969210177.cn/img/testUser.gif"
    };
  },
  mounted() {
    // this.restaurants = this.$router.options.routes[0].children;
  },
  methods: {
    // 点击缩放左侧导航栏
    change() {
      this.$store.state.collapseMenuCollBol = !this.$store.state
        .collapseMenuCollBol;
    },
    //导航栏头像旁的下拉按钮
    navbarDropdown(path) {
      if (path === "https://github.com/") {
        window.open(path);
      } else {
        this.$router.push({ path: path });
        if (path === "/login") {
          sessionStorage.clear();
        }
      }
    },
    //搜索框的搜索跳转路由
    handSelect(item) {
      item.name = item.value;
      this.$store.state.breadcrumbData[1] = item;
      this.$router.push({ path: item.path });
    }
  },
  //自定义指令 默认进行一次操作
  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
