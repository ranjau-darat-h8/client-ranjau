import './firebase'
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomsList: [],
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
    getRooms ({commit}) {
      firebase.database().ref('Rooms').on('value', function (snapshot) {
        console.log(snapshot.val())
        let roomsList = snapshot.val()
        commit('getRooms', roomsList)
      })
    },
    createRoom ({commit}) {
      // console.log('masuk actions')
      // let newPostKey = firebase.database().ref('Rooms').push().key
      let username = localStorage.getItem('username')
      firebase.database().ref('Rooms').push({
        Board: {
          Board0: {
            show: 'blank',
            status: 'play'
          },
          Board1: {
            show: 'blank',
            status: 'play'
          },
          Board2: {
            show: 'blank',
            status: 'play'
          },
          Board3: {
            show: 'blank',
            status: 'play'
          },
          Board4: {
            show: 'blank',
            status: 'play'
          },
          Board5: {
            show: 'blank',
            status: 'play'
          },
          Board6: {
            show: 'blank',
            status: 'play'
          },
          Board7: {
            show: 'blank',
            status: 'play'
          },
          Board8: {
            show: 'blank',
            status: 'play'
          }
        },
        Player1: {
          name: username,
          point: 0,
          ready: false,
          turn: true
        }
      })
    }

  }
})
