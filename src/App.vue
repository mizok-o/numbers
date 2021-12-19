<template>
  <number />
  <autoMoveBar />
</template>

<script>
import number from './components/number.vue'
import autoMoveBar from './components/autoMoveBar.vue'

export default {
  name: 'App',
  components: {
    number,
    autoMoveBar
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 32px;
}
</style>
