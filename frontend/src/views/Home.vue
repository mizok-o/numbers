<template>
  <div class="app__container">
    <number />
    <main-content @from-item="openModal" />
    <transition>
      <modalopen :itemVal="itemUrl" v-if="showContent" @from-modal="closeModal" />
    </transition>
  </div>
</template>

<script>
import MainContent from '../components/mainContent.vue'
import number from '../components/number.vue'
import modalopen from '../components/modal-open.vue'
export default {
  components: {
    number,
    MainContent,
    modalopen
  },
  name: 'Home',
  data() {
    return {
      showContent: false,
      itemUrl: ""
    }
  },
  methods: {
    openModal(url) {
      this.itemUrl = url
      this.showContent = true
    },
    closeModal() {
      this.showContent = false
    }
  }
}
</script>

<style>


</style>
