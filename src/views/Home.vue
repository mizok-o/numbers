<template>
  <div class="app__container">
    <number />
    <main-content/>
  </div>
</template>

<script>
import MainContent from '../components/mainContent.vue'
import number from '../components/number.vue'
export default {
  components: { number, MainContent },
  name: 'Home'
}
</script>
