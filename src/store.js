import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pattern: [
      { pola: '1,7,9' },
      { pola: '2,5,7' },
      { pola: '3,7,8' },
      { pola: '1,2,8' },
      { pola: '3,4,9' }
    ],
    boards: [
      { show: 'blank', status: 'play' },
      { show: 'blank', status: 'play' },
      { show: 'blank', status: 'play' },
      { show: 'blank', status: 'play' },
      { show: 'blank', status: 'play' },
      { show: 'blank', status: 'play' },
      { show: 'blank', status: 'play' },
      { show: 'blank', status: 'play' },
      { show: 'blank', status: 'play' }
    ],
    lockButton: []
  },
  mutations: {

  },
  actions: {

  }
})
