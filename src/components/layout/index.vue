<template>
  <view-box
    ref="viewBox"
    :body-padding-top="$route.meta.isShowHead ? '.88rem' : '0'"
    :body-padding-bottom="$route.meta.isShowTab ? '1.06rem' : '0'"
  >
    <x-header
      v-show="$route.meta.isShowHead"
      slot="header"
      :left-options="{showBack: false}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
    >
      <a slot="left" @click="goBack()">
        <i class="iconfont icon-back"></i>
      </a>
      {{$route.meta.title}}
    </x-header>
    <keep-alive>
      <transition mode="out-in">
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </transition>
    </keep-alive>
    <transition mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <tabbar slot="bottom" class="tabbar" v-show="$route.meta.isShowTab">
      <tabbar-item :selected="$route.name === 'home'" link="/home">
        <img slot="icon" src="../../assets/img/layout/shouye.png" alt="">
        <img slot="icon-active" src="../../assets/img/layout/shouye_active.png" alt="">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="$route.name === 'pay'" link="/pay">
        <img slot="icon" src="../../assets/img/layout/shouye.png" alt="">
        <img slot="icon-active" src="../../assets/img/layout/shouye_active.png" alt="">
        <span slot="label">支付</span>
      </tabbar-item>
      <tabbar-item :selected="$route.name === 'my'" link="/my">
        <img slot="icon" src="../../assets/img/layout/my.png" alt="">
        <img slot="icon-active" src="../../assets/img/layout/my_active.png" alt="">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem, XHeader } from 'vux'
export default {
  name: 'layout',
  components: {
    ViewBox,
    Tabbar,
    TabbarItem,
    XHeader
  }
}
</script>

<style lang="less">
  // 缓动动画 样式引入
  @import "../../assets/less/transitions/rightGradually.less";
  /*@import "../../assets/less/transitions/slowlyDisappear.less";*/
  .weui-tabbar{
    background: #fff !important;
  }
</style>
