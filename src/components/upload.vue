<template>
  <div class="upload__container">
    <label class="upload__content">
      <input
        type="file"
        @change="upload"
        class="upload__button"
      >
    </label>
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
    async upload(event) {
      const files = event.target.files || event.dataTransfer.files

      if(this.checkFile(files[0])) {
        const picture = await this.getBase64(files[0]);
        this.$emit('input', picture);
      }
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    checkFile(file) {
      let result = true
      const SIZE_LIMIT = 5000000
      if (!file) {
        result = false
      }
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        result = false
      }
      if (file.size > SIZE_LIMIT) {
        result = false
      }
      return result
    }
  }
}
</script>

<style scoped>
.upload__container {
  margin: 32px 0 0;
}
</style>
