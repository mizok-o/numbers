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
.v-enter {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}

.v-enter-active {
  transition: all 500ms;
}

.v-leave-to {
  opacity: 0;
}

.v-leave-active {
  transition: all 500ms;
}

.modal__background {
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0, .23);
  display: flex;
  align-items: center;
  justify-content: center;

}

.modal__content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 640px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  -webkit-backdrop-filter: blur(20px); /* ぼかしエフェクト */
  backdrop-filter: blur(20px);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.5);
}

.modal__content img {
  width: 240px;
}
</style>
