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
    path: "/home",
    name: "home",
    component: Home,
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
        name: "文档页",
        component: () => import("@/components/document/document.vue")
      },
      {
        //用户管理
        path: "/user_setting",
        name: "用户管理",
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
      },
      {
        path: "/personal",
        name: "个人中心",
        component: () => import("@/components/personal/personal.vue")
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/components/404/404.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // document.title = to.name;
  // if (id === null) {
  //   Message.error({
  //     message: "非法登录 请重新登陆",
  //     showClose: true,
  //     duration: 1500
  //   });
  //   next("/login");
  // } else {
  //   if (id !== null && Store.state.menuData === null) {
  //     Store.dispatch("getMenuData", {
  //       menuId: id[4]
  //     });
  //   } else {
  //     next();
  //   }
  //   next();
  // }
  next();
});
export default router;
