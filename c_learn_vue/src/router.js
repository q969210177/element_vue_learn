import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "home_index",
          component: () => import("./components/root/root.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/Login.vue")
    }
  ]
});
