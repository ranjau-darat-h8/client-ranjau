<template lang="html">
  <div class="login">
    <h3>Lets Play</h3>
    <input type="text" v-model="username" placeholder="username"><br />
    <button @click="login" >Let's Play</button>
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
      if (this.count >= 3) {
        this.count = 0
      } else {
        this.count++
      }
    }
  }
}
</script>

<style lang="css">
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 30px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }

</style>
