import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Layout from '@/layout'

Vue.use(VueRouter)

export const routerConfig = {
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login'),
      meta: {
        hidden: true
      }
    },
    {
      path: '/403',
      component: () => import('@/views/error/403'),
      meta: {
        hidden: true
      }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: '首页',
          component: () => import('@/views/dashboard')
        },
        {
          path: '404',
          name: '404',
          component: () => import('@/views/error/404')
        }
      ]
    },
    {
      path: '/system',
      component: Layout,
      name: '系统管理',
      redirect: '/system/user',
      children: [
        {
          path: 'user',
          name: '用户管理',
          component: () => import('@/views/system/user')
        },
        {
          path: 'organization',
          name: '组织管理',
          component: () => import('@/views/system/organization')
        },
        {
          path: 'role',
          name: '角色管理',
          component: () => import('@/views/system/role')
        },
        {
          path: 'privilege',
          name: '权限管理',
          component: () => import('@/views/system/privilege')
        },
        {
          path: 'dictionary',
          name: '数据字典',
          component: () => import('@/views/system/dictionary')
        },
        {
          path: 'log',
          name: '日志管理',
          component: () => import('@/views/system/log')
        }
      ]
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
}

const router = new VueRouter(routerConfig)

router.beforeEach((to, from, next) => {
  if ((!store.getters.user || !store.getters.user.id) && (to.path !== '/login' && to.path !== '/')) {
    next({ path: '/login' })
  } else {
    next()
  }
  // if (to.path !== '/login') {
  //   if (store.getters.user.id) {
  //     next()
  //   } else {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   }
  // } else {
  //   next()
  // }
})

export default router
