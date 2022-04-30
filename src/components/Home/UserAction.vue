<template>
    <ul class="user-action">
      <li @click="search"><i class="iconfont icon-search"></i>search</li>
      <li @click="">login</li>
      <li @click="router.push('/wishlist')">wishlist</li>
      <li @click="router.push('/cart')">cart</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';
export default defineComponent({
    name: '',
    setup () {
      const router = useRouter()
      const search = () => {
        console.log(apiGet)
        apiGet('http://localhost:8080/product.json', {}).then((res) => {
          console.log(res)
        })
      }
      return {
        router,
        search
      }
    },

})
</script>

<style lang='less'>
.user-action{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  .icon-search {
    font-size: 18px;
  }
  li {
    margin-right: 15px;
    cursor: pointer;
    text-transform: uppercase;
  }
}
</style>
