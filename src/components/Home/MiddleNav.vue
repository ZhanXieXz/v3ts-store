<template>
    <div class="middle-nav">
        <ul>
          <li
            v-for="item in navList"
            :key="item.key"
            class="item-nav"
            @click="linkToList(item.key)"
            @mousemove="mouseMoveHandle(item.imgUrl)"
          >
            <div class="left">
              <p>{{item.value}}</p>
            </div>
          </li>
            <li class="right">
              <img :src="currentImgUrl" alt="">
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
interface InavList<T> {
  key: T;
  value: string;
  url?: string;
  imgUrl: string
}
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    name: 'middleNav',
    setup () {
      const router = useRouter()
      // 假数据
      let navList = ref<Array<InavList<string>>>([
        {
          key: "nav-001",
          value: 'nav 01',
          url: "test-url",
          imgUrl: 'https://cdn.shopify.com/s/files/1/0504/7644/9942/files/PC-03_8854c601-68bc-4b57-b301-958631c4e5ce_540x.jpg?v=1650608656'
        },
        {
          key: "nav-002",
          value: 'nav 02',
          url: "test-url-1",
          imgUrl: "https://cdn.shopify.com/s/files/1/0504/7644/9942/files/PC-dress_540x.jpg?v=1648890892"
        },
        {
          key: "nav-003",
          value: 'nav 03',
          imgUrl: "https://cdn.shopify.com/s/files/1/0504/7644/9942/files/PC_-06_ad0e5110-474c-4286-a13e-c819da1ae849_540x.jpg?v=1646928339"
        },
      ])

      const currentImgUrl = ref<string>()
      const mouseMoveHandle = (url: string) => {
        if (url && url !== currentImgUrl.value) {
          currentImgUrl.value = url
        }
      }
      const linkToList = (id:number) =>{
        console.log(id);
        id && router.push(`/product-list/${id}`)
        
      }
      onMounted(() => {
        if (navList.value.length) {
          mouseMoveHandle(navList.value[0].imgUrl)
        }
        
      })
      return {
        navList,
        mouseMoveHandle,
        currentImgUrl,
        linkToList
      }
    },

})
</script>

<style lang="less">
  .middle-nav {
    width: 60%;
    position: relative;
  }
  .item-nav {
    display: flex;
    .left {
      width: 50%;
      cursor: pointer;
      &:hover {
        background-color: #f4f4f4;
        transition: all .3s;
      }
    }
  }
  .right {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    & img {
      height: 100%;
    }
  }
</style>
