<!-- <template lang="html">
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <input type="text" v-model="username" placeholder="username"><br />
    <button @click="signUp">Sign Up</button>
    <span>go to back <router-link to="/">lets Play</router-link>.</span>
  </div>
</template>

<script>
import '../firebase'
import firebase from 'firebase'
export default {
  name: 'signUp',
  data: function() {
    return {
      username: '',
      count: 0,
      player: ['Player1', 'Player2', 'Player3', 'Player4']
    }
  },
  methods: {
    signUp: function() {
      firebase.database().ref('Players/' + this.player[this.count]).set({
          username: this.username
        })
        .then(function(user) {
          console.log(user,'=======masuk');
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
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }

</style> -->
