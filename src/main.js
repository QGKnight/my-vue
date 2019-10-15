import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from './plugin'
import '../static/iconfont/iconfont.css'
import { ToastPlugin, ConfirmPlugin, LoadingPlugin } from 'vux'

Vue.config.productionTip = false

Vue.use(plugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// 闭包自执行函数  设置rem值
(function (doc, win) {
  var docEl = doc.documentElement
  // 检测window上是否有屏幕旋转事件属性
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  // 根据屏幕宽度设置rem值
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    // 根据@2X屏幕大小设置rem值  在@2X屏幕上1rem为100px
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
  }
  // 如果浏览器不支持addEventListener，则中止
  if (!doc.addEventListener) return
  // 监听屏幕旋转事件并赋值
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
