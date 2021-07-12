import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    addToCart(state, payload) {
      console.log("加入购物车");
      state.cartList.push(payload)
    },
    addToCount(state, payload) {
      console.log("数量加1");
      // 找到匹配的对象，让该对象的属性加1
      // 匹配对象作为返回值返回，可以声明一个变量来保存，
      // 但是仅仅是保存的内存地址，原对象依然是没有变化的
      state.cartList.find(item => item.iid === payload).count++
      
    },
  },
  actions: {

  },
  modules: {
  },
  getters:{
    cartListLength(state){
      return state.cartList.length
    }
  }
})

export default store