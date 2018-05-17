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
                    <!-- <div style="width:100%; height: 400px; background: green;"> -->
                      <h3>Terklik :)</h3>
                      <p style="font-size: 50px;">{{ lockButton }}</p>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const $ = window.$

export default {
  data () {
    return {
      pattern: [
        { pola: '1,7,9' },
        { pola: '2,5,7' },
        { pola: '3,7,8' },
        { pola: '1,2,8' },
        { pola: '3,4,9' }
      ],
      boards: [
        //   { show: 'blank', status: 'play' },
        //   { show: 'bomb', status: 'lock' },
        //   { show: 'success', status: 'lock' },
        //   { show: 'success', status: 'lock' },
        //   { show: 'blank', status: 'play' },
        //   { show: 'success', status: 'lock' },
        //   { show: 'bomb', status: 'lock' },
        //   { show: 'success', status: 'lock' },
        //   { show: 'blank', status: 'play' }

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
      currentClick: ''
    }
  },
  computed () {

  },
  methods: {
    chooseButton (button, i) {
      this.currentClick = button
      this.lockButton.push(button)
      for (let j = 0; j < this.boards.length; j++) {
        if (i === j) {
          $(`.btns${i}`).prop('disabled', true)
          this.boards[j].status = 'lock'
        }
      }
    }
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
</style>
