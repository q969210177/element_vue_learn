import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalBol: {
      t: true,
      f: false
    },
    menuCollBol: true
  },
  mutations: {},
  actions: {}
});
