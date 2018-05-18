import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import firebase from 'firebase'
import router from './router'
import {db} from './firebase'
import alertify from 'alertifyjs'
Vue.use(VueFire)
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    pointPlayer1: [],
    pointPlayer2: [],
    player1Status: '',
    player2Status: '',
    roomsList: [],
    token: '',
    pattern: [
      { pola: '1,7,9' },
      { pola: '2,5,7' },
      { pola: '3,7,8' },
      { pola: '1,2,8' },
      { pola: '3,4,9' }
    ],
    patternUse: { pola: '5,7' },
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
    },
    room: ''
  },
  mutations: {
    getRooms (state, payload) {
      state.roomsList = payload
    },
    getRoom (state, payload) {
      state.room = payload
      console.log('after', state.room)
      let token = localStorage.getItem('token')
      state.token = token
    },
    updateButtonMutation (state, id, statusPlayer) {
      console.log('player 1 status', state.player1Status)
      console.log('player 2 status', state.player2Status)
      if (state.player1Status) {
        db.ref('/Rooms/' + localStorage.getItem('token') + `/Player1`).update({
          turn: false
        })
        db.ref('/Rooms/' + localStorage.getItem('token') + `/Player2`).update({
          turn: true
        })
        state.pointPlayer1.push(1)
      } else if (state.player2Status) {
        db.ref('/Rooms/' + localStorage.getItem('token') + `/Player2`).update({
          turn: false
        })
        db.ref('/Rooms/' + localStorage.getItem('token') + `/Player1`).update({
          turn: true
        })
        state.pointPlayer2.push(1)
      }
      console.log('masuk mutaion')
      for (let i = 0; i < state.boards.length; i++) {
        if (id === i) {
          state.boards[i].show = 'success'
          db.ref('/Rooms/' + localStorage.getItem('token') + `/Board/Board${id}`).update({
            show: 'success',
            status: 'locked'
          })
        }
      }
      let pattern = state.patternUse.pola.split(',')
      for (let p = 0; p < pattern.length; p++) {
        if (id === Number(pattern[p]) - 1) {
          let indexPattern = Number(pattern[p]) - 1
          console.log('=======BOMB========', pattern[p])
          state.boards[indexPattern].show = 'bomb'
          db.ref('/Rooms/' + localStorage.getItem('token') + `/Board/Board${id}`).update({
            show: 'bomb',
            status: 'locked'
          })
          if (!state.player1Status) {
            state.pointPlayer1.pop()
          } else if (!state.player2Status) {
            state.pointPlayer2.pop()
          }
        }
      }
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
      alertify.success(`You have succesfully create room`)
      alertify.success(`You'll be redirected to the room in a few seconds`)
      setTimeout(function () { router.push('room') }, 3000)
    },
    getRoom ({commit}) {
      let token = localStorage.getItem('token')
      firebase.database().ref('Rooms/' + token).on('value', function (snapshot) {
        let room = snapshot.val()
        console.log(room)
        commit('getRoom', room)
      })
    },
    joinRoom ({commit}) {
      // console.log('masuk actions')
      let token = localStorage.getItem('token')
      let username = localStorage.getItem('username')
      let room = firebase.database().ref('Rooms/' + token).child('Player2')
      room.on('value', function (snapshot) {
        let obj = {
          name: username,
          point: 0,
          ready: false,
          turn: false
        }
        room.update(obj)
      })
      alertify.success(`You have succesfully join the room`)
      alertify.success(`You'll be redirected to the room in a few seconds`)
      setTimeout(function () { router.push('room') }, 3000)
    }
  }
})
