import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/global_style.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import { fetchGet, fetchPost } from "./api/axiosConfing.js";
import { Msg } from "./api/msg";
//封装的axios方法注入原型
Vue.prototype.$get = fetchGet;
Vue.prototype.$post = fetchPost;
//注册全局模态框
Vue.prototype.$alertMessage = Msg;
//引入icon图标
import "../src/assets/css/iconfont.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
//解决重复点击路由报错的问题
const originalPush = router.push;
router.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.config.productionTip = false;
//注册全局导航栏和菜单栏
import navMenu from "./components/global_component/navmenu/navmenu.vue";
import navBar from "./components/global_component/navbar/navbar.vue";
Vue.component("navMenu", navMenu);
Vue.component("navBar", navBar);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
