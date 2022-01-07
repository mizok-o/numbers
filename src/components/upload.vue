<template>
  <div class="upload__container">
    <h3>データの新規追加</h3>
    <p>載せたい画像・動画の名前とファイルを追加してください。</p>
    <input class="upload__name" type="text" placeholder="名前を入力してください" v-model="name">
    <label class="upload__file">
      <input
        type="file"
        @change="upFile"
        ref="upImg">
    </label>
    <button class="upload__button" :disabled="checkDataFull(name)" @click="uploadFile(name)"></button>
  </div>
</template>

<script>
export default {
  props: ["itemList"],
  data() {
    return {
      uploadedFile: "",
      uploadedFormat: ""
    }
  },
  methods: {
    upFile() {
      const files = this.$refs.upImg;
      const fileContent = files.files[0];
      if (fileContent.type.startsWith("image/")) {
        this.uploadedFormat = "img"
        this.uploadedFile = window.URL.createObjectURL(fileContent);
      }else if(fileContent.type.startsWith("video/")) {
        this.uploadedFormat = "video"
        this.uploadedFile = window.URL.createObjectURL(fileContent);
      }
    },
    checkDataFull(name) {
      if(this.uploadedFile && name) {
        return false
      }else {
        return true
      }
    },
    uploadFile(fileName) {
      const nums = this.itemList.length
      const addContent = { src: this.uploadedFile, name: fileName, format: this.uploadedFormat, id: nums}
      this.$emit('getFile', addContent);
      this.uploadedFile = ""
      this.uploadedFormat = ""
    }
  }
}
</script>

<style scoped>
.upload__container {
  margin: 64px 0 0;
}

.upload__name {
  display: block;
  width: 200px;
  height: 24px;
  margin: 16px 0 0;
  background-color: #fff;
}

.upload__file {
  position: relative;
  display: block;
  width: 144px;
  height: 32px;
  margin: 16px 0 0;
  color: #252525;
  border: 1px solid #252525;
  border-radius: 8px;
}

.upload__file::after {
  content: "ファイル追加";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #252525;
  white-space: nowrap;
  font-weight: 600;
}

.upload__file input {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.upload__button {
  position: relative;
  width: 144px;
  height: 48px;
  margin: 24px 0 0;
  color: #fff;
  background-color: #252525;
  border-radius: 8px;
}

.upload__button::after {
  content: "アップロード";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  white-space: nowrap;
  font-weight: 600;
}

.upload__button:disabled {
  background-color: #ccc;
}
</style>
