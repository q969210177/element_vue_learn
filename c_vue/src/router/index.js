/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import { Message } from "element-ui";
import Login from "../views/login/login.vue";
import Home from "../views/home/Home.vue";
import Wel from "../views/welcome/welcome.vue";
import Store from "@/store/index.js";
import { mapActions } from "vuex";
//import { log } from "util";

Vue.use(VueRouter);
let id = sessionStorage.getItem("token");
const routes = [
  {
    path: "/login",
    name: "登陆",
    component: Login
  },
  {
    path: "/",
    name: "欢迎页",
    component: Wel
  },
  {
    path: "/future",
    name: "对未来说两句吧",
    component: () => import("@/views/future/future.vue")
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    redirect: "/index",
    children: [
      {
        //首页
        path: "/index",
        name: "首页",
        component: () => import("@/components/Index/Index.vue")
      },
      {
        //文档页
        path: "/document",
        name: "文档",
        component: () => import("@/components/Document/Document.vue")
      },
      {
        path: "/Html/:id",
        name: "Html",
        component: () => import("@/components/Html/Html.vue")
        // beforeEnter: (to, from, next) => {
        //   // ...
        //   console.log(11);

        //   next();
        // }
      },
      {
        //数据管理
        path: "/ZhiHu",
        name: "知乎",
        component: () => import("@/components/ZhiHu/ZhiHu.vue")
      },
      // {
      //   //商户管理
      //   path: "/JavaScript",
      //   name: "JavaScript",
      //   component: () => import("@/components/shop/shop.vue")
      // },
      // {
      //   //知乎
      //   path: "/Vue",
      //   name: "Vue",
      //   component: () => import("@/components/look/look.vue")
      // },
      // {
      //   //字体图标库
      //   path: "/home_icon",
      //   name: "图标",
      //   component: () => import("@/components/icon/icon.vue")
      // },
      {
        path: "/personal",
        name: "个人中心",
        component: () => import("@/components/personal/personal.vue")
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/components/404/404.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  if (id !== null && Store.state.menuData === null) {
    Store.dispatch("getMenuData", {
      menuId: id[4]
    });
  } else {
    next();
  }
  next();
});
export default router;
