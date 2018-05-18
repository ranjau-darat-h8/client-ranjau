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
    patternUse: { pola: '2,5,7'},
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
    lockButton: [],
    player1: {
      turn: true,
      point: '',
      ready: false,
      boards: []
    },
    player2: {
      turn: false,
      point: false,
      boards: []
    }
  },
  mutations: {
    updateButtonMutation (state, id) {
      console.log('masuk mutaion')
      // console.log('isi state ==> ', state.boards);
      
      for (let i = 0; i < state.boards.length; i++) {
        if (id === i) {
          state.boards[i].show = 'success'
        }
      }

      let pattern = state.patternUse.pola.split(',')
      for (let p = 0; p < pattern.length; p++) {
        if (id === Number(pattern[p])-1) {
          let indexPattern = Number(pattern[p])-1
          console.log('=======BOMB========', pattern[p])
          state.boards[indexPattern].show = 'bomb'
        }
        
      }
      
    }
  },
  actions: {

  }
})
