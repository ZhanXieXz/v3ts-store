<template>
    <TopBanner></TopBanner>
    <div class="home-nav">
      <HomeCategory></HomeCategory>
      <div class="logo">
          <img src="https://cdn.shopify.com/s/files/1/0504/7644/9942/files/logo2_6ea43178-8e37-4a5c-8102-defefd773ff4_240x@2x.png?v=1633919721">
      </div>
      <userAction></userAction>
    </div>
    <div class="content">
      <HomeBanner></HomeBanner>
      <MiddleNav></MiddleNav>
    </div>
</template>

<script>
import TopBanner from '@/components/Home/TopBanner.vue';
import HomeCategory from '@/components/Home/HomeCategory.vue';
import userAction from '@/components/Home/UserAction.vue';
import MiddleNav from '@/components/Home/MiddleNav.vue';
import HomeBanner from '@/components/Home/HomeBanner.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    name: '',
    components: {
        TopBanner,
        HomeCategory,
        userAction,
        MiddleNav,
        HomeBanner
    },
    setup () {
      return {
      }
    },

})
</script>

<style>
  .home-nav {
    display: flex;
    justify-content: space-between;
    min-height: 60px;
    align-items: center;
  }
  .logo img {
    max-width: 200px;
  }
  .content {
    display: flex;
    height: calc(100vh - 60px)
  }
</style>
