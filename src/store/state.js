import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

const state = {

  key: '',//搜索关键字
  value: ''//搜索值

}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
