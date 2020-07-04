// 实现插件 挂载$store
// 声明store 类 
    // 响应式state
    // commit 可以修改state
    // dispatch 可以调用action
    //实现getters
let KVue

class Store{
    constructor(options){
        console.log('options', options)
        //响应式的state
        // 方式一 借鸡生蛋 借vue的data  因为data是响应式的，然后赋值给state
        this.state = new KVue({
            data:options.state
        })
        this._vm = new KVue({
            data:{  
                $$state:options.state
            }
           
        })
        this._mutations = options.mutations
        this._actions = options.actions;
       
        //绑定this到store
        const store = this;
        // this.commit = this.commit.bind(store)
      
        //vue 源码实现
        const {commit, action}= this;
        this.commit = function bindCommit(type, payload){
            commit.call(store, type, payload)
        }
        this.action = function bindAction(type, payload){
           return action.call(store, type, payload)
        }
        // 天王盖地虎   
        this.getters = {}
        for(const k in options.getters){
            // this.getters[k] = options.getters[k](store.state)
            Object.defineProperty(this.getters, k, 
                {
                get(){
                    return options.getters[k](store.state)}
                }
            )
        }
    }
    // get state(){
    //     return this._vm._data.$$state
    // }
    // set state(val){
    //     console.error('please use replaceState to reste state');
    // }
    // commit ({type, payload})
    // 执行mutaition 更改state
    commit(type, payload){
        let entry = this._mutations[type]
        if(!entry) {
            console.error('unknowe type');
            return
        }
        entry(this.state, payload)
        
    }
    dispatch(type, payload){
        let entry = this._actions[type]
        if(!entry){
            console.error('unknowe type');
            return
        }
        return entry(this, payload)
    }
}

function install(Vue){
    KVue = Vue
    KVue.mixin({
        beforeCreate(){
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}
export default {Store, install}