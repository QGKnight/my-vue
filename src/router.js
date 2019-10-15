/* router vue路由管理 */
import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'
import layout from './pages/layout'
import home from './pages/home'
import my from './pages/my'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: home,
          meta: { title: '首页', keepAlive: false, isShowHead: false, isShowTab: true }
        },
        {
          path: '/my',
          name: 'my',
          component: my,
          meta: { title: '我的', keepAlive: false, isShowHead: false, isShowTab: true }
        }
      ]
    }
  ]
})

// const whiteList = ['login', 'register', 'forget']
// router.beforeEach(function (to, from, next) {
//   // 登录拦截
//   if (whiteList.indexOf(to.name) < 0 && !store.state.token) {
//     next({
//       path: '/home',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// })

export default router
