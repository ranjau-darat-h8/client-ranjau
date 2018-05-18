<template>
  <div class="room">
    <h1>ROOM</h1>
    {{ room }}

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
      'room'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
