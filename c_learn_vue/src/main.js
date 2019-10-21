import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/global_style.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//引入icon图标

Vue.use(ElementUI);
Vue.config.productionTip = false;
import Navbar from "./views/global_component/navmenu/navmenu.vue";
import Header from "./views/global_component/navbar/navbar.vue";
Vue.component("navMenu", Navbar);
Vue.component("navHeader", Header);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
