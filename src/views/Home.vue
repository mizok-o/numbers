<template>
  <div class="app__container">
    <number />
    <main-content @from-item="openModal" />
    <modalopen :itemVal="itemUrl" v-show="showContent" @from-modal="closeModal" />
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
