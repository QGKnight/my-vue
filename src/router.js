/* router vue路由管理 */
import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: resolve => require(['./components/layout'], resolve),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['./pages/home/index'], resolve),
          meta: { title: '首页', keepAlive: false, isShowHead: false, isShowTab: true }
        },
        {
          path: '/pay',
          name: 'pay',
          component: resolve => require(['./pages/pay/index'], resolve),
          meta: { title: '首页', keepAlive: false, isShowHead: false, isShowTab: true }
        },
        {
          path: '/my',
          name: 'my',
          component: resolve => require(['./pages/my/index'], resolve),
          meta: { title: '我的', keepAlive: false, isShowHead: false, isShowTab: true }
        }
      ]
    }
  ]
})

// const whiteList = ['login', 'register', 'forget']
// router.beforeEach(function (to, from, next) {
//   // 登录拦截
//   if (whiteList.indexOf(to.name) < 0 && !store.state.user.token) {
//     next({
//       path: '/home',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// })

export default router
