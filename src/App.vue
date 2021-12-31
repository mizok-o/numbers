<template>
  <div class="app__container">
    <number />
    <mainContent />
    <!-- <autoMoveBar /> -->
  </div>
</template>

<script>
import number from './components/number.vue'
// import autoMoveBar from './components/autoMoveBar.vue'
import mainContent from './components/mainContent.vue'

export default {
  name: 'App',
  components: {
    number,
    // autoMoveBar,
    mainContent
  }
}
</script>

<style>
@import "./assets/sass/main.scss";
@import "./assets/sass/prepend.scss";

</style>
