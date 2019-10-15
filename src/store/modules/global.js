const state = {
  ballBack1: '',
  ballBack2: '',
  timer: null,
  nextNum: 11,
  revenueType: ['articleRate', 'videoRate'],
  revenueTimeType: ['valFlagNum1', 'valFlagNum2'],
  trendsRefesh: false,
  theme: {deg: '90', mainColor: '##00AA70', secondColor: '##00AA70', thirdColor: '##00AA70'},
  articleRate: 0,
  videoRate: 0,
  valFlagNum1: 0,
  valFlagNum2: 0,
  playFlag: false,
  name:"种子",
  previewShow: false, //预览图片的开关
  previewImg: "",
  previewDom: null
}

const getters = {}

const actions = {
  runOnce (context, obj) {
    if (context.state.playFlag === false) {
      context.dispatch('timePlay', {
        type: obj.type, // 0 阅读计时, 1 视频计时
        time: obj.time, // 时间 多长时间走20%
        fun: () => { // 回调函数 非必穿
          context.commit('setRate', {
            type: obj.type, // 0 阅读计时, 1 视频计时
            num: 0 // 0~100 百分比
          })
          context.dispatch('setBallRate', context.state[context.state.revenueType[obj.type]])
          obj.fun && obj.fun() // 回调函数
        }
      })
      context.state.playFlag = true
      setTimeout(() => {
        context.state.playFlag = false
      }, obj.time)
    }
  },
  timePlay (context, obj) {
    context.state.nextNum = Math.floor(obj.time / 90)
    context.dispatch('playBall', {fun: obj.fun, type: obj.type})
  },
  stopBall (context) {
    clearTimeout(context.state.timer)
    context.state.timer = null
  },
  playBall (context, obj) {
    let val = context.state[context.state.revenueType[obj.type]]
    val += 0.25
    context.state[context.state.revenueTimeType[obj.type]] += 0.25
    context.dispatch('setBallRate', val)
    context.state.timer = setTimeout(() => {
      context.state[context.state.revenueType[obj.type]] = val
      if (context.state[context.state.revenueTimeType[obj.type]] >= 20) {
        context.state[context.state.revenueTimeType[obj.type]] -= 20
        if (val >= 100) {
          obj.fun && obj.fun()
          return
        }
        return
      }
      context.dispatch('playBall', obj)
    }, context.state.nextNum)
  },
  setBallRate (context, data) {
    let val = parseFloat(data).toFixed(2)
    val = Math.max(0, val)
    val = Math.min(100, val)
    if (val <= 50) {
      context.state.ballBack2.style.transform = 'rotate(' + 180 * val * 2 / 100 + 'deg)'
      context.state.ballBack2.style.borderColor = 'grey grey grey transparent'
      context.state.ballBack1.style.transform = 'rotate(0deg)'
    } else {
      context.state.ballBack2.style.transform = 'rotate(0deg)'
      context.state.ballBack2.style.borderColor = 'red red red transparent'
      context.state.ballBack1.style.transform = 'rotate(' + 180 * (val - 50) * 2 / 100 + 'deg)'
    }
  }
}

const mutations = {
  setBallBack1 (state, data) {
    state.ballBack1 = data
  },
  setBallBack2 (state, data) {
    state.ballBack2 = data
  },
  setRate (state, data) {
    state[state.revenueType[data.type]] = data.num
  },
  setTrendsRefresh(state, bool){
    state.trendsRefesh = bool;
  },
  setGlobalName(state, str){
    state.name = str;
  },
  setPreview(state, obj){
    state.previewShow = obj.show;
    obj.url && (state.previewImg = obj.url);
    obj.dom && (state.previewDom = obj.dom);   
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
