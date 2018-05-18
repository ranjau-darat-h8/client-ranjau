<template>
  <div class="room">
    <h1>ROOM PAGE</h1>
    <!-- {{ roomsList }} -->
    <div class="container-create col-lg-10 offset-lg-1 col-sm-10 offset-sm-1">
      <div class="row">
        <div class="col-lg-5 col-sm-12">
          <button type="button" class="btn btn-info huge-btn huge-text btn-shake" @click="createRoom">CREATE</button>
          <p style="color:grey;">Click here to create a new room to play the game</p>
        </div>
        <div class="col-lg-2 col-sm-12">
          <div class="text-parent">
            <div class="text-child">
              <p class="huge-text">OR</p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-sm-12">
          <button type="button" class="btn btn-success huge-btn huge-text btn-shake" data-toggle="modal" data-target="#exampleModal">JOIN</button>
          <p style="color:grey;">Click here to join a room to play the game</p>
          <p style="color:grey;">Don't forget to ask the room's token from your friend :D</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">JOIN ROOM</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Room Token</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter token">
                <small id="token" class="form-text text-muted">Psst, if you haven't got the token, please ask your friend..</small>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary">Join Room :D</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Room',
  props: {
  },
  created () {
    this.$store.dispatch('getRooms')
  },
  methods: {
    createRoom () {
      // console.log('masuk room vue')
      this.$store.dispatch('createRoom')
    }
  },
  computed: {
    ...mapState([
      'roomsList'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row {
  /* border: 1px solid red; */
  margin-top: 100px;
}

.huge-btn {
  border-radius: 20px;
  height: 500px;
  width: 100%;
}

.text-parent {
  /* border: 1px solid orange; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 500px;
}

.text-child {
  /* border: 1px solid blue; */
  align-self: center;
}

.huge-text {
  font-size: 70px;
}

.btn-shake:hover {
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: shake 0.5s;
    /* When the animation is finished, start again */
    animation-iteration-count: infinite;
}

@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}

</style>
