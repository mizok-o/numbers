<template>
  <div class="upload__container">
    <label v-if="!value" class="upload__content">
      <input
        type="file"
        name="up"
        @change="upload"
        accept=".png, .jpg, jpeg, .svg, mp4, .mov"
        class="upload__button"
      >
    </label>
    <div v-if="value" class="uploaded">
+     <label class="upload__content">
        <input
          type="file"
          name="up"
          @change="upload"
          accept=".png, .jpg, jpeg, .svg, mp4, .mov"
          class="upload__button"
        >
+       <img :src="value" />
+     </label>
     </div>
  </div>
</template>

<script>
export default {
  name: "upload",
  props: {
    value: {
      type: String,
      default: null
    }
  },
  data() {
     return {
       file: null
     }
  },
  methods: {
    async upload(e) {
      const files = e.target.files || e.dataTransfer.files
      const file = files[0]

      if(this.checkFile(file)) {
        const picture = await this.getBase64(file)
        this.$emit('input', picture)
      }
    },
    getBase64(file) {
       return new Promise((resolve, rej) => {
          const reader = new FileReader();
          reader.readAsDataURL(file)
          reader.onload = () => resolve(reader.result)
          reader.onerror = e => rej(e)
       })
    },
    checkFile(file) {
      let result = true
      const size_limit = 5000000

      if(!file) {
        result = false
      }

      if(file.type !== 'image/jpeg' && file.type !== 'image/png') {
        result = false
      }
      if(file.size > size_limit) {
        result = false
      }
      return result
    }
  }
}
</script>

<style scoped>
.upload__container {
  margin: 48px 0 0;
}
</style>
