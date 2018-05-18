<template>
<div class="home">
  <img src="../assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <signUp></signUp>
</div>
</template>

<script>
// @ is an alias to /src
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'home',
  components: {
    SignUp
  }
}
</script>
