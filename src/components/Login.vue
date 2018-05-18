<template lang="html">
  <div class="login">
    <!-- <h3>Let's Play</h3> -->
    <input type="text" v-model="username" placeholder="username"><br />
    <button @click="login" :disabled="ready">Let's Play</button>
  </div>
</template>

<script>
import '../firebase'
import firebase from 'firebase'
export default {
  name: 'login',
  data: function() {
    return {
      username: '',
      count: 0,
      player: ['Player1', 'Player2', 'Player3', 'Player4']
    }
  },
  computed: {
    ready: function() {
      if (this.count > 3) {
        return true
      }
      return false
    }
  },
  methods: {
    login: function() {
      firebase.database().ref('Players/').on('value', (snapshot) => {
        snapshot.forEach(user => {
          localStorage.setItem('username', user.val().username)
        })
      })

      firebase.database().ref('Players/' + this.player[this.count]).set({
          username: this.username
        })
        .then(function(user) {
            alert('You account has been created')
          },
          function(err) {
            alert('Oop. ' + err.message)
          })
      this.count++
    }
  }
}
</script>

<style lang="css">
  /* h3 {
    font-size: 22px;
    font-weight: bold;
  } */
  .login {
    margin-top: 270px;
  }
  input {
    border-radius: 16px;
    margin: 10px 0;
    width: 18%;
    padding: 5px;
    text-align: center;
  }
  button {
    font-weight: bold;
    border-radius: 12px;
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  button:hover{
    color: #f6ec04;
    border-color: #f6ec04;
    border-style: solid;
    box-shadow: inset 0 3px 4px #888;
  }

</style>
