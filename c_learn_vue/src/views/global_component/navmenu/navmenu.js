export default {
  name: "navmenu",
  data() {
    return {
      navMenuData: [
        {
          name: "系统设置",
          path: "/sys",
          permission: "true",
          iconFont: "el-icon-s-tools",
          itemMenu: [
            {
              name: "用户管理",
              path: "/user",
              permission: "false",
              iconFont: "el-icon-user-solid"
            },
            {
              name: "数据管理",
              path: "/data",
              permission: "true",
              iconFont: "el-icon-s-data"
            },
            {
              name: "商户管理",
              path: "/shop",
              permission: "true",
              iconFont: "el-icon-s-shop"
            }
          ]
        },
        {
          name: "看一看",
          path: "/look",
          permission: "true",
          iconFont: "iconfont icon-guanliyuan"
        },
        {
          name: "图标",
          path: "/icon",
          permission: "true",
          iconFont: "el-icon-s-management"
        }
      ],
      activeIndex2: "1",
      publicBol: {
        true: true,
        false: false
      }
    };
  },
  methods: {
    name() {}
  },
  mounted() {}
};
