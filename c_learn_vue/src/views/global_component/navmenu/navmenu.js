export default {
  name: "navmenu",
  data() {
    return {
      menuNav: [
        {
          menuTitle: "首页",
          menuPath: "0",
          menuName: "昨日变化",
          menuIcon: ""
        },
        {
          menuTitle: "用户列表",
          menuPath: "1",
          menuName: "用户列表",
          menuIcon: ""
        },
        { menuTitle: "首页", menuPath: "2", menuName: "首页", menuIcon: "" },
        { menuTitle: "首页", menuPath: "3", menuName: "首页", menuIcon: "" },
        { menuTitle: "首页", menuPath: "4", menuName: "首页", menuIcon: "" }
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
