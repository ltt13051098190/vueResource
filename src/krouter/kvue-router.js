// 降低耦合， 做一个饮用关系，就不必把vue打包进去
let KVue
// 插件
// 实现 KVueRouter 类
// 实现一个install方法
class KVueRouter{
    constructor (options){
        KVue;
        this.$options = options;
        // KVue.util.defineReactive  实现数据响应
        const initial = window.location.hash.slice(1)|| '/'
        KVue.util.defineReactive(this, 'current', initial)
        // this.current = '/'
        window.addEventListener('hashchange', this.onHashChange.bind(this))
    }
    onHashChange(){
        this.current = window.location.hash.slice(1)
    }
}
// 形参是vue 的构造函数
KVueRouter.install =function (Vue) {
      KVue = Vue
      // 1.挂载$router
      Vue.mixin({
          beforeCreate(){
            // 全局混入，将来在组件实例化的时候才执行
            //此时 router实例就存在了
            // this 指的是组件实例、 
            //只在根实例上挂载 $router
            if(this.$options.router){
                // 挂载
                Vue.prototype.$router = this.$options.router;
            }
          }
      })
      // 2.实现两个全局组件
      Vue.component('router-link', {
          props: {
              to: {
                  type: String,
                  require: true,
                  default: '' 
              },
          },
          render(h){
              // a标签 <a href= to>link   就是$slots.default</a>
            return h(
                'a', 
                {
                    attrs:{
                        href: '#'+this.to
                    }
                },
                this.$slots.default
            )
          }
      })
      Vue.component('router-view', {
          // 获取路由实例
          // 需要获取路由表表 routes
          render(h){
           const routes = this.$router.$options.routes;
           const current = this.$router.current;
           const route= routes.find(route=> route.path === current)
           const comp = route? route.component: null
           return h(comp)
          }
      })
}
export default KVueRouter