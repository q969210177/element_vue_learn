/* eslint-disable no-console */
export default {
  name: "navmenu",
  data() {
    return {
      menu: null,
      publicBol: {
        true: true,
        false: false
      },
      clickBol: false,
      defaultPath: window.location.hash.substring(1)
    };
  },
  methods: {
    //点击添加数据到vuex 然后保存用户id到token
    addHeader(item, bol) {
      let NavigationListId = sessionStorage.getItem("token");
      if (item.itemMenuId !== undefined) {
        NavigationListId = NavigationListId.replace(
          NavigationListId[9],
          item.itemMenuId
        );
        sessionStorage.setItem("token", NavigationListId);
      }
      //根据菜单分级来进行参数设置 保证页头的正确
      let storeHeader = {
        name: item.itemMenuId ? item.itemMenuName : item.menuName,
        path: item.itemMenuId ? item.itemMenuPath : item.menuPath,
        id: item.itemMenuId ? item.itemMenuId : item.menuId
      };
      //根据用户的权限来进行路由组件的公用 动态参数的传递
      if (bol) {
        this.$router.push({
          path: item.menuPath
        });
      } else {
        this.$router.push({
          path: item.itemMenuPath + "/" + item.itemMenuId
        });
      }
      //把值传到vuex 页面的参数只是进行生命周期的更新  数据还是利用vuex来清醒存储和请求
      this.$store.state.breadcrumbData[0] = storeHeader;
      this.$store.state.NavigationListId = item.itemMenuId;
    }
  }
};
