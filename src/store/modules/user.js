import * as utils from '../../utils'

const state = {
  token: utils.storage.get('token'),
  userInfo: utils.storage.get('userInfo')
}

const getters = {}

const actions = {}
const mutations = {
  setToken: (state, data) => {
    utils.storage.set('token', data)
    state.token = data
  },
  logout (state) {
    utils.storage.remove('token')
    utils.storage.remove('userInfo')
    state.token = null
  },
  setUserInfo: (state, data) => {
    utils.storage.set('userInfo', data)
    state.userInfo = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
