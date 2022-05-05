<template>
  <div>
    <div class="product-list">
      <ul>
        <li @click="linoToDetail(item['id'])" v-for="item in listData" :key="item['id']">
          <div class="image-wrap">
            <img class="pro-img" v-lazyload="item['images'][0]['src']" alt="" />
          </div>
          <div>
            <p class="pro-title">{{ item["title"] }}</p>
            <p class="pro-price">{{item['variants'][0]['price']}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { apiGet } from "@/api/index";
import { useRouter } from 'vue-router'
export default defineComponent({
  name: "productList",
  setup() {
    const router = useRouter()
    const proList = {
      listData: ref({}),
      getData: () => {
        apiGet("/api/product.json", {}).then((res: any) => {
          console.log(res);
          proList.listData.value = res.data.products;
        });
      },
    };
    proList.getData();

    const linoToDetail = (id: number) => {
      console.log(id)
        id && router.push(`/product-detail/${id}`)
    }
    return {
      ...proList,
      linoToDetail
    };
  },
});
</script>

<style lang="less">
.product-list {
  width: 100%;
  ul {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    li {
      width: 25%;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
      .image-wrap {
        padding-top: 128%;
        position: relative;
        .pro-img {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .pro-price {
        font-size: 14px;
      }
      .pro-title {
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
