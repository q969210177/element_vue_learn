/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import { fetchPost, fetchGet } from "@/api/axiosConfing";
Vue.use(Vuex);
let menuData = sessionStorage.getItem("data");
export default new Vuex.Store({
  state: {
    //全局状态
    globalBol: {
      t: true,
      f: false
    },
    //页头
    breadcrumbData: [{ name: "首页", path: "/index", id: "1" }],
    //导航栏缩放
    collapseMenuCollBol: false,
    //用户id
    menuId: null,
    // 用户菜单数据
    menuData: null,
    //用户数据
    userData: null,
    //导航文章列表id
    NavigationListId: null
  },
  mutations: {},
  actions: {
    getMenuData(context, vm) {
      let menuId = { menuId: vm.menuId };
      if (menuData === null) {
        fetchGet("/userMenu/userMenu.php", menuId).then(res => {
          context.state.menuData = res.data;
          context.state.menuId = vm.menuId;
          let menu = JSON.stringify(res.data);
          sessionStorage.setItem("data", menu);
        });
      } else {
        context.state.menuData = JSON.parse(menuData);
      }
    },
    getNavigationList(context, vm) {
      console.log(context, vm);
    }
  }
});
