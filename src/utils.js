/* 封装的 localStorage 存取方法 */
export const storage = {
  set: function (key, data) {
    return window.localStorage.setItem(key, window.JSON.stringify(data))
  },
  get: function (key) {
    return window.JSON.parse(window.localStorage.getItem(key))
  },
  remove: function (key) {
    return window.localStorage.removeItem(key)
  }
}
