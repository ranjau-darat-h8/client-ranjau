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
      boards: []
    },
    player2: {
      turn: false,
      point: '',
      boards: []
    }
  },
  mutations: {
    getRooms (state, payload) {
      state.roomsList = payload
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
