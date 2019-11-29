import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalBol: {
      t: true,
      f: false
    },
    breadcrumbData: [{ name: "首页", path: "/index", id: "1" }],
    collapseMenuCollBol: false
  },
  mutations: {},
  actions: {}
});
