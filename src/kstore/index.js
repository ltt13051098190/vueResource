import Vue from 'vue'
import Vuex from './kvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1
  },
  mutations: {
    // state 哪来的 怎么实现响应式
    add(state){
      state.counter++
    }
  },
  actions: {
    add({commit}){
      setTimeout(()=>{
        commit('add')
      }, 1000)
    }
  },
  getters:{
    dbcouter: state=>{
      return state.counter*2
    }
    // dbcouter: state.counter*2
  },
  modules: {
  }
})
