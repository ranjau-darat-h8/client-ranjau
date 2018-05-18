import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Room from './views/Room.vue'
import Lobby from './views/Lobby.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/room',
      name: 'room',
      component: Room
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: Lobby
    }
  ]
})
