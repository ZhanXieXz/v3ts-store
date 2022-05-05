<template>

    <div class="content">
      <HomeBanner></HomeBanner>
      <MiddleNav></MiddleNav>
    </div>
</template>

<script lang="ts">
import MiddleNav from '@/components/Home/MiddleNav.vue';
import HomeBanner from '@/components/Home/HomeBanner.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    name: '',
    components: {
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
