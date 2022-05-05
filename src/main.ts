import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style/iconfont.css";
import lazyLoad from './utils/ImgLazyload'

createApp(App).use(store).use(router).use(lazyLoad, {
    loadingImg: require('@/assets/image/loading.gif'),
    errorImg: require('@/assets/image/error.png')
}).mount('#app')
