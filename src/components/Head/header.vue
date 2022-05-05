<template>
  <TopBanner></TopBanner>
    <div class="home-nav">
      <HomeCategory></HomeCategory>
      <router-link to="/">
        <div class="logo">
            <img src="https://cdn.shopify.com/s/files/1/0504/7644/9942/files/logo2_6ea43178-8e37-4a5c-8102-defefd773ff4_240x@2x.png?v=1633919721">
        </div>
      </router-link>
      <userAction></userAction>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useRouter } from 'vue-router'
import userAction from '@/components/Home/UserAction.vue';
import HomeCategory from '@/components/Home/HomeCategory.vue';
import TopBanner from '@/components/Home/TopBanner.vue';

export default defineComponent({
    name: 'header',
    components: {
        HomeCategory,
        TopBanner,
        userAction,
    },
    setup () {
    //   const router = useRouter()
      return {
        //   router
      }
    },

})
</script>

<style lang='less'>

</style>
