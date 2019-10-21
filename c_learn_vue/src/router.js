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
        console.log(to);
        next();
      },
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

routes.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // console.log(next);

  next();
});
export default routes;
