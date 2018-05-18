<template>
<div id="bg" class="home">
  <br />
  <login></login>
</div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>

<style media="screen">
  #bg {
    background-image: url("../assets/logo.jpg");
    width: 100%;
    height: 100%;
  }
</style>
