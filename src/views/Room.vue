<template>
  <div class="room">
    <!-- <h1>ROOM</h1>
    Room Token: {{ token }}
    <div class="row">
      <div class="player1 col-lg-6 col-sm-12">
          {{ room.Player1 }}
        <div class="player-desc col-lg-12">
          <p class="player-name">Player 1</p>
          <p class="player-name">{{ room.Player1.name }}</p>
        </div>
      </div>
      <div class="player2 col-lg-6 col-sm-12">
        <div class="player-desc col-lg-12">
          <p class="player-name">Player 2</p>
          <p class="player-name" v-if="!room.Player2">Empty</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Room',
  props: {
  },
  created () {
    this.$store.dispatch('getRoom')
  },
  methods: {
  },
  computed: {
    ...mapState([
      'roomsList',
      'room',
      'token'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.player1, .player2 {
  border: 1px solid black;
  margin-top: 100px;
  height: 300px;
}

.player-name {
  font-size: 50px;
}

</style>
