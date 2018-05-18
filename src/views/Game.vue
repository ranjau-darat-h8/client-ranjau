<template>
    <div class="game">
        <!-- <h1>Game Arena AOV</h1> -->
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div>
                        <div class="board">
                            <ul>
                                <li v-for="(button, i) in boards" :key="i">
                                    <button :class="('btns'+i)" @click="chooseButton((i+1), i)"> {{ i + 1 }} </button>
                                    <p>status: {{ button.status }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="row">
                    <div class="col-md-12" v-for="( player, index ) in listPlayer" :key="index">
                      <h3 class="headingplayer">{{player.name}} <span v-if="player1.turn" :class="{active: player1.turn}">active</span></h3>
                      <div class="mainplayer">
                      </div>
                    </div>
                  </div>
                </div>
                {{ pattern }}
            </div>
        </div>
    </div>
</template>

<script>
import {db} from '../firebase'
import { mapState } from 'vuex'
const $ = window.$

export default {
  data () {
    return {
      lockButton: [],
      currentClick: '',
      listPlayer: []
    }
  },
  computed: {
    ...mapState([
      'boards',
      'pattern',
      'player1',
      'player2'
    ])
  },
  methods: {
    chooseButton (button, i) {
      this.currentClick = button
      this.lockButton.push(button)
      for (let j = 0; j < this.boards.length; j++) {
        if (i === j) {
          $(`.btns${i}`).prop('disabled', true)
          this.boards[j].status = 'lock'
          this.$store.commit('updateButtonMutation', j)
        }
      }
    }
  },
  mounted () {
    db.ref('/Players').on('value', (snapshot) => {
      snapshot.forEach(snap => {
        let playerData = {
          name: snap.val().username,
          key: snap.key
        }
        this.listPlayer.push(playerData)
      })
    })
  }
}
</script>

<style>
.board {
    width: 450px;
    height: 450px;
    background: purple;
}
.board > ul {
  margin: 0;
  padding: 0;
}
.board > ul > li {
  float: left;
  width:150px;
  height: 150px;
  list-style: none;
  padding: -1px;
  border: thin solid white;
  position: relative;
}
.board > ul > li > p {
    position: absolute;
    right: 10px;
    bottom: -10px;
}
.board > ul > li > button {
  font-family: 'Skranji', cursive;
  font-size: 70px;
  width: 100%;
  height: 100%;
}
button {
  background: #29e587;
  border: thin solid white;
}
:disabled {
    background: grey;
    color: #bcb7b7;
}
.mainplayer {
  width: 100%;
  height: 100px;
  background: red;
}
.headingplayer {
  font-size: 25px;
  text-align: left;
}
.active {
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
  color: white;
  background: green;
}
</style>
