import './firebase'
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import firebase from 'firebase'
import router from './router'

Vue.use(VueFire)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomsList: [],
    room: ''
  },
  mutations: {
    getRooms (state, payload) {
      state.roomsList = payload
    },
    getRoom (state, payload) {
      state.room = payload
      console.log('after', state.room)
    }
  },
  actions: {
    getRooms ({commit}) {
      firebase.database().ref('Rooms').on('value', function (snapshot) {
        let roomsList = snapshot.val()
        console.log('all rooms', roomsList)
        commit('getRooms', roomsList)
      })
    },
    createRoom ({commit}) {
      // console.log('masuk actions')
      // let newPostKey = firebase.database().ref('Rooms').push().key
      let username = localStorage.getItem('username')
      let room = firebase.database().ref('Rooms').push({
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
      // console.log('ini room', room.key)
      let token = room.key
      localStorage.setItem('token', token)
      setTimeout(function () { router.push('room') }, 3000)
    },
    getRoom ({commit}) {
      let token = localStorage.getItem('token')
      firebase.database().ref('Rooms/' + token).on('value', function (snapshot) {
        let room = snapshot.val()
        console.log(room)
        commit('getRoom', room)
      })
    }
  }
})
