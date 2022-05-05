import defaultImg from '@/assets/image/logo.png'

const renderImg = (el: HTMLImageElement, bindings: any, options:any) => {
    const oberver = new IntersectionObserver(([{ isIntersecting }]) => {
        el.src = options.loadingImg || defaultImg
        if (isIntersecting) {
          // 进入了可视区
          el.src = bindings.value
          // 取消图片的监听
          oberver.unobserve(el)
          // 加载的图片失败了，显示默认的图片地址
          el.onerror = () => {
            // 显示默认图片
            el.src = options.errorImg || defaultImg
          }
        }
      })
      oberver.observe(el)
}
const defineDirective = (app: any, options: any) => {
  // 扩展自定义指令
  app.directive('lazyload', {
    mounted(el: HTMLImageElement, bindings: any) {
        renderImg(el, bindings, options)
    },
    updated(el: HTMLImageElement, bindings: any) {
        console.log(123123132)
      renderImg(el, bindings, options)
    },
  })
}

export default {
  install(app: any, options: object) {
    // 自定义指令
    defineDirective(app, options)
  }
}