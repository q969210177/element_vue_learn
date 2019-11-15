export default {
  name: "navmenu",
  data() {
    return {
      navMenuData: [
        {
          name: "首页",
          path: "/home_index",
          permission: true,
          iconFont: "el-icon-location",
          type: "firstLevel"
        },
        {
          name: "文档",
          path: "/document",
          permission: true,
          iconFont: "iconfont icon-tubiaozhizuomobanyihuifu-",
          type: "firstLevel"
        },
        {
          name: "系统设置",
          path: "setting",
          permission: true,
          iconFont: "el-icon-s-tools",
          type: "secondary",
          itemMenu: [
            {
              name: "用户管理",
              path: "/user_setting",
              permission: false,
              iconFont: "el-icon-user-solid"
            },
            {
              name: "数据管理",
              path: "/home_data",
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
          path: "look",
          permission: true,
          iconFont: "iconfont icon-kanbaozhi",
          type: "secondary",
          itemMenu: [{ name: "知乎", path: "/look", permission: true , iconFont: "iconfont icon-zhihu" }]
        },
        {
          name: "图标",
          path: "/home_icon",
          permission: true,
          iconFont: "el-icon-s-management",
          type: "firstLevel"
        }
      ],
      publicBol: {
        true: true,
        false: false
      }
    };
  },
  methods: {
  },
  mounted() {}
};
