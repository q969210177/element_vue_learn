/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import { fetchPost, fetchGet } from "@/api/axiosConfing";
Vue.use(Vuex);
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
    //导航文章列表id
    NavigationListId: null,
    userImgSrc: ""
  },
  mutations: {},
  actions: {
    getMenuData(context, vm) {
      let menuId = { menuId: vm.menuId };
      fetchGet("/userMenu/userMenu.php", menuId).then(res => {
        context.state.menuData = res.data;
        context.state.menuId = vm.menuId;
      });

      //context.state.menuData = JSON.parse(storeFile).menuData;
    }
  }
});
