export default {
  name: "navmenu",
  data() {
    return {
      navMenuData: [
        {
          name: "首页",
          path: "/home",
          permission: true,
          iconFont: "el-icon-location",
          type: "firstLevel"
        },
        {
          name: "文档",
          path: "/home",
          permission: true,
          iconFont: "el-icon-location",
          type: "firstLevel"
        },
        {
          name: "系统设置",
          path: "/sys",
          permission: true,
          iconFont: "el-icon-s-tools",
          type: "secondary",
          itemMenu: [
            {
              name: "用户管理",
              path: "/user",
              permission: false,
              iconFont: "el-icon-user-solid"
            },
            {
              name: "数据管理",
              path: "/data",
              permission: true,
              iconFont: "el-icon-s-data"
            },
            {
              name: "商户管理",
              path: "/shop",
              permission: true,
              iconFont: "el-icon-s-shop"
            }
          ]
        },
        {
          name: "看一看",
          path: "/look",
          permission: true,
          iconFont: "iconfont icon-guanliyuan",
          type: "secondary",
          itemMenu: [{ name: "知乎", path: "/zhihu", permission: true }]
        },
        {
          name: "图标",
          path: "/icon",
          permission: true,
          iconFont: "el-icon-s-management",
          type: "firstLevel"
        }
      ],
      activeIndex2: "1",
      publicBol: {
        true: true,
        false: false
      }
      // test: [
      //   { type: "a", path: "index1" },
      //   { type: "b", path: "index2" },
      //   { type: "c", path: "index3" },
      //   { type: "b", path: "index4" },
      //   { type: "b", path: "index5" },
      //   { type: "c", path: "index6" }
      // ]
    };
  },
  methods: {
    name() {}
  },
  mounted() {}
};
