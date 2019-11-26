/* eslint-disable no-console */
export default {
  name: "navbar",
  data() {
    return {
<<<<<<< HEAD
      navbarDropdownData: [
        { name: "个人中心", path: "/personal" },
        { name: "首页", path: "/home" },
        { name: "项目地址", path: "https://github.com/" },
        { name: "退出登录", path: "/" }
      ],
      timeout: null,
      restaurants: [],
      routerSerach: "",
      navbarSerach: false,
      src:
        "https://colinbendell.cloudinary.com/image/upload/c_crop,f_auto,g_auto,h_350,w_400/v1512090971/Wizard-Clap-by-Markus-Magnusson.gif"
=======
      changePassWordForm: {
        uid: "",
        userName: "",
        oldPassWord: "",
        newPassWord: "",
        ComparisonPassword: ""
      },
      changePassWordFormRules: {
        userName: [
          { required: true, message: "账户名不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        oldPassWord: [
          { required: true, message: "原始密码不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        newPassWord: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        ComparisonPassword: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
        // validatePass
      },
      dialogFormVisible: false,
      timeout: null
>>>>>>> b3d983b221849008494837fae4bc39944546e6fa
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
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
      }
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
      // cb(results);
    },
    createFilter(queryString) {
      // console.log(queryString);

      return restaurant => {
        console.log(restaurant.value.includes(queryString));
        // console.log(restaurant.path, 1);
        return restaurant.value.includes(queryString) === true;
      };
    },
    loadAll() {
      return [
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
        { value: "图标", path: "/honme_icon" },
        { value: "个人中心", path: "/personal" }
      ];
    },
    handleSelect(item) {
      item.name = item.value;
      console.log(item);
      this.$store.state.breadcrumbData[1] = item;
      this.$router.push({ path: item.path });
      this.routerSerach = "";
    }
  },
  //自定义指令
  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
