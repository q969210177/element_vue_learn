/* eslint-disable no-console */
export default {
  name: "navmenu",
  data() {
    return {
      navMenuData: [
        {
          name: "首页",
          path: "/index",
          permission: true,
          iconFont: "el-icon-location",
          type: "firstLevel",
          id: "1"
        },
        {
          name: "文档",
          path: "/document",
          permission: true,
          iconFont: "iconfont icon-document1",
          type: "firstLevel",
          id: "2"
        },
        {
          name: "系统设置",
          path: "",
          permission: true,
          iconFont: "el-icon-s-tools",
          type: "secondary",
          itemMenu: [
            {
              name: "用户管理",
              path: "/user_setting",
              permission: true,
              iconFont: "el-icon-user-solid",
              id: "3"
            },
            {
              name: "数据管理",
              path: "/home_data",
              permission: true,
              iconFont: "el-icon-s-data",
              id: "4"
            },
            {
              name: "商户管理",
              path: "/shop",
              permission: true,
              iconFont: "el-icon-s-shop",
              id: "6"
            }
          ]
        },
        {
          name: "看一看",
          path: "",
          permission: true,
          iconFont: "iconfont icon-shequ",
          type: "secondary",
          itemMenu: [
            {
              name: "知乎",
              path: "/look",
              permission: true,
              iconFont: "iconfont icon-zhihu",
              id: "6"
            }
          ]
        },
        {
          name: "图标",
          path: "/home_icon",
          permission: true,
          iconFont: "el-icon-s-management",
          type: "firstLevel",
          id: "7"
        }
      ],
      publicBol: {
        true: true,
        false: false
      },
      clickBol: false,
      defaultPath: window.location.hash.substring(1)
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    addHeader(name, path, id) {
      let storeHeader = { name: name, path: path, id: id };
      this.$store.state.breadcrumbData[1] = storeHeader;
    }
  },
  mounted() {}
};
