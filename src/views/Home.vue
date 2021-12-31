<template>
    <div class="app__container">
        <login />
        <number />
        <mainContent />
        <!-- <autoMoveBar /> -->
  </div>
</template>

<script>
import number from '../components/number.vue'
import mainContent from '../components/mainContent.vue'
import Login from '../components/Login.vue'

export default {
  components: {
    number,
    mainContent,
    Login
  }
}
</script>


