/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import { Message } from "element-ui";
import Login from "../views/login/login.vue";
import Home from "../views/home/Home.vue";
// import Wel from "../views/welcome/welcome.vue";
import Store from "../store/index.js";
//import { mapActions } from "vuex";
Vue.use(VueRouter);
let id = sessionStorage.getItem("token");
const routes = [
  {
    path: "/",
    name: "登陆",
    component: Login
  },
  // {
  //   path: "/",
  //   name: "欢迎页",
  //   component: Wel
  // },
  {
    path: "/future",
    name: "对未来说两句吧",
    component: () => import("@/views/future/future.vue")
  },
  {
    path: "/common",
    name: "社区团购统计",
    component: () => import("@/views/Common/Common.vue")
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
        component: () => import("@/views/Index/Index.vue")
      },
      {
        //文档页
        path: "/document",
        name: "文档",
        component: () => import("@/views/Document/Document.vue")
      },
      {
        path: "/nanGuoUser",
        name: "用户管理",
        component: () => import("@/views/nanGuoUser/nanGuoUser.vue")
      },
      {
        //菜单管理
        path: "/groupBuyMenu",
        name: "菜单管理",
        component: () => import("@/views/nanGuoMenu/nanGuoMenu.vue")
      },
      {
        //团购编辑
        path: "/groupBuyChange",
        name: "团购编辑",
        component: () => import("@/views/groupBuy/groupBuy.vue")
      },
      {
        //团购编辑
        path: "/Vue",
        name: "Vue",
        component: () => import("@/views/Vue/Vue.vue")
      },
      {
        path: "/personal",
        name: "个人中心",
        component: () => import("@/views/personal/personal.vue")
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/404.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  let arr = ["/", "/common"];
  if (arr.includes(to.path)) {
    next();
  } else {
    if (Store.state.menuId === null && id === null) {
      Message.error("非法登录");
      next({ path: "/" });
    } else {
      next();
    }
  }
});
export default router;
