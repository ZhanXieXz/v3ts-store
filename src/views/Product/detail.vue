<template>
<div id="product">
      <div class="swiper-wrap">
      <swiper
        v-if="findBannerList.length"
        :findBannerList="findBannerList"
      ></swiper>
    </div>
    <div class="pro-info" v-if="targetProData">
      <p>{{targetProData.title}}</p>
      <div>
        <div class="pro-option" :key="item.name" v-for="item in targetProData.options">
          <p>{{ item.name }}:</p>
          <p class="options-value" :key="childItem" v-for="childItem in item.values">{{ childItem }}</p>
        </div>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import swiper from '@/components/Swiper/index.vue';
import { apiGet } from "@/api/index";
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'proDetail',
    components: {
      swiper
    },
    setup () {
      const route = useRoute()
      const targetProData:any = ref()
      const findBannerList = ref([])
      const getData = () => {
        apiGet("/api/product.json", {}).then((res: any) => {
          console.log(res);
          console.log(route.params)
          targetProData.value = res.data.products.find((x: any) => {
            return Number(x.id) === Number(route.params.id)
          })
          findBannerList.value = targetProData.value.images.map((x:any) => ({imgUrl:x.src, bannerId: x.id}))
      console.log(targetProData.value)
        
        });
      }
      getData()
      return {
        findBannerList,
        targetProData
      }
    },

})
</script>

<style lang='less'>
#product {
  display: flex;
    .swiper-wrap {
      width: 50%
    }
    .pro-info {
      width: 50%;
      .pro-option {
        display: flex;
        .options-value {
          padding: 0 10px;
          // display: inline-block;
        }
      }
    }
  }
</style>
