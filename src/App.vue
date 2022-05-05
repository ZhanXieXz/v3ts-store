<template>
  <HeadCom></HeadCom>
  <router-view/>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import HeadCom from '@/components/Head/header.vue';
export default defineComponent({
  components: {
    HeadCom
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,ul,li,div,p {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
