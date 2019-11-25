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
      redirect: "/index",
      children: [
        {
          //首页
          path: "/index",
          name: "首页",
          component: () => import("@/components/root/root.vue")
        },
        {
          //文档页
          path: "/document",
          name:"文档页",
          component: () => import("@/components/document/document.vue")
        },
        {
          //用户管理
          path: "/user_setting",
          name:"用户管理",
          component: () => import("@/components/setting/setting.vue")
        },
        {
          //数据管理
          path: "/home_data",
          name: "数据管理",
          component: () => import("@/components/user_data/user_data.vue")
        },
        {
          //商户管理
          path: "/shop",
          name: "商户管理",
          component: () => import("@/components/shop/shop.vue")
        },
        {
          //知乎
          path: "/look",
          name: "知乎",
          component: () => import("@/components/look/look.vue")
        },
        {
          //字体图标库
          path: "/home_icon",
          name: "图标",
          component: () => import("@/components/icon/icon.vue")
        }
      ],
      
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
