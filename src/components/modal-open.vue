<template>
  <div class="modal__background" id="overlay" @click="clickModal">
      <div class="modal__content" id="content">
        <img :src="itemVal" >
      </div>
    </div>
</template>

<script>
export default {
  props: ['itemVal'],
  methods: {
    clickModal() {
      this.$emit('from-modal')
    }
  }
}
</script>

<style scoped>
.modal__background {
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
