<template>
    <div class="home-banner">
      <swiper 
        :duration="duration"
        :findBannerList="findBannerList"
        @linkToList="linkToListCb"
      ></swiper>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import swiper from '@/components/Swiper/index.vue';
export default defineComponent({
    name: '',
    components: {
      swiper
    },
    setup () {
      const router = useRouter()
      let findBannerList = ref<Array<object>>(
        [{
          bannerId: "banner-001",
          imgUrl: "https://cdn.shopify.com/s/files/1/0504/7644/9942/files/MO-02_1_1950x.jpg?v=1650608857"
        },{
          bannerId: "banner-002",
          imgUrl: "https://cdn.shopify.com/s/files/1/0504/7644/9942/files/PC-dress_540x.jpg?v=1648890892"
        },{
          imgUrl: "https://cdn.shopify.com/s/files/1/0504/7644/9942/files/pre-order_1_540x.jpg?v=1646617554"
        },]
      )
      const duration = ref<number>(5000)
      const linkToListCb = (id: string) => {
        id && router.push(`/product-list/${id}`)
      }
      return {
        findBannerList,
        duration,
        linkToListCb
      }
    },

})
</script>

<style>
.home-banner {
  width: 40%;
}
</style>
