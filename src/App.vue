<template>
  <number />
  <mainContent />
  <autoMoveBar />
</template>

<script>
import number from './components/number.vue'
import autoMoveBar from './components/autoMoveBar.vue'
import mainContent from './components/mainContent.vue'

export default {
  name: 'App',
  components: {
    number,
    autoMoveBar,
    mainContent
  }
}
</script>

<style>
@import "../src/assets/sass/prepend.scss";

body {
  margin: 32px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
h2 {
  font-size: 48px;
}
</style>
