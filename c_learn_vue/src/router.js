import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "vuex";

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      beforeEach: (to, from, next) => {
        next();
      },
      children: [
        {
          path: "/home_index",
          component: () => import("@/components/root/root.vue")
        },
        {
          path: "/home_file",
          component: () => import("@/components/document/document.vue")
        },
        {
          path: "/home_setting",
          component: () => import("@/components/setting/setting.vue")
        },
        {
          path: "/home_look",
          component: () => import("@/components/look/look.vue")
        },
        {
          path: "/home_icon",
          component: () => import("@/components/icon/icon.vue")
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

routes.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // console.log(next);

  next();
});
export default routes;
