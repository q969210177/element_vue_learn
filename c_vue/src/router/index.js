import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/login.vue";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
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
        // component: () =>
        //   import("@/views/global_component/personal/personal.vue")
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
];

const router = new VueRouter({
  routes
});

export default router;
