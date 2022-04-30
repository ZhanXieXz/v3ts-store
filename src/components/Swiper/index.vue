<template>
  <div class="my-carousel" @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body" >
      <li
        v-for="(item, i) in findBannerList"
        :key="item.bannerId"
        class="carousel-item"
        :class="{ fade: index === i }"
        @click="linkToList(item.bannerId)"
      >
          <img :src="item.imgUrl" alt="图片" />
      </li>
    </ul>
    <a @click="clickFn(-1)" href="javascript:;" class="carousel-btn prev"><i class="iconfont icon-left"></i></a>
    <a @click="clickFn(1)" href="javascript:;" class="carousel-btn next"><i class="iconfont icon-right"></i></a>
    <div class="carousel-indicator">
      <span @click="active(i)" v-for="(item, i) in findBannerList" :key="i" :class="{ active: index === i }"></span>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue'
export default defineComponent({
  name: 'Carousel',
  props: {
    findBannerList: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  setup(props, ctx) {
    const index = ref(0)
    // 定义一个常量存储定时器
    const timer = ref(null)
    // 定时器方法，实现自动轮播效果
    const autoplayFn = () => {
      // 防抖，防止多次触发定时器
      clearInterval(timer.value)
      timer.value = setInterval(() => {
        index.value += 1
        if (index.value >= props.findBannerList.length) {
          index.value = 0
        }
      }, props.duration)
    }
    // 侦听器，根据接口返回的数据与传递的相关属性参数 autoplay 开启轮播
    // 监听返回的数据的长度，当长度大于1的时候并且 autoplay 的为 true 的时候开启轮播
    watch(
      props.findBannerList,
      () => {
        isAutoPlay()
      }
    )
    // 鼠标移入轮播图，停止自动播放
    const stop = () => {
      if (timer.value) clearInterval(timer.value)
    }
    // 鼠标移出轮播图，开启定时器
    const start = () => {
        isAutoPlay()
    }
    // 点击轮播图上的左右按钮，切换轮播图，通过传递参数，决定轮播图往左往右
    const clickFn = e => {
      index.value += e
      if (index.value >= props.findBannerList.length) {
        index.value = 0
      }
      if (index.value < 0) {
        index.value = props.findBannerList.length - 1
      }
    }
    // 点击轮播图底下的按钮切换轮播图
    const active = e => {
      index.value = e
    }
    const isAutoPlay = () =>{
      if (props.findBannerList.length > 1 && props.autoplay) {
        autoplayFn()
      }  
    }

    // 点击跳转
    const linkToList = id => {
      ctx.emit('linkToList', id)
    }

    onMounted(() => {
        isAutoPlay()
    })
    // 组件销毁的时候清空定时器，避免性能损耗
    onUnmounted(() => {
      if (timer.value) clearInterval(timer.value)
    })
    return {
      index,
      stop,
      start,
      clickFn,
      active,
      linkToList
    }
  }
})
</script>
<style scoped lang="less">
.my-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      transform: translateY(-50%);
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
      text-decoration: none
    }
  }
}
</style>