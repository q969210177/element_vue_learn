/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import { fetchPost, fetchGet } from "@/api/axiosConfing";
Vue.use(Vuex);
let menuData = sessionStorage.getItem("data");
export default new Vuex.Store({
  state: {
    globalBol: {
      t: true,
      f: false
    },
    breadcrumbData: [{ name: "首页", path: "/index", id: "1" }],
    collapseMenuCollBol: false,
    menuId: null,
    menuData: null,
    userData: null
    //count: 0
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
        fetchGet("user/userData.php", menuId).then(res => {
          // context.state.menuData = res.data;
          // context.state.menuId = vm.menuId;
          // let menu = JSON.stringify(res.data);
          // sessionStorage.setItem("data", menu);
          console.log(res.data);
        });
      } else {
        context.state.menuData = JSON.parse(menuData);
      }
    }
  }
});
