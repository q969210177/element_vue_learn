import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "/home_index",
          component: () => import("./components/root/root.vue")
        }
      ]
    },
    {
      path: "/",
      name: "Login",
      component: () => import("./views/Login.vue")
    }
  ]
});

export default routes;
