<template>
  <div class="main__container">
    <h2>画像データ</h2>
    <div class="main__content">
      <ul class="main__items__container">
        <li
          v-for="item in items"
          :key="item.id"
          :class="item.kind"
          class="main__item"
        >
          <div class="item__file__container">
            <img v-if="item.format === 'img'" :src="item.src">
            <video v-if="item.format === 'video'" :src="item.src" controls></video>
          </div>
          <div class="item__text">
            <span style="font-size: 13px;">No.{{item.id}}</span>
            <h4 class="item__name">{{ item.name }}</h4>
          </div>
        </li>
      </ul>
    </div>
    <div class="upload__container">
      <label class="upload__content">
        <input
          type="file"
          @change="upFile"
          ref="upImg"
          class="upload__button"
        >
      </label>
      <img class="uploaded__preview" :src="uploaded" >
    </div>
  </div>
</template>

<script>
// import upload from './upload.vue'
export default {
  // components: { upload },
  name: 'main',
  data() {
    return {
      items: [
        { src: require('@/assets/img/logo.png'), name: "Vue.js", format: "img", kind: "relax", id: 0},
        { src: require('@/assets/video/relax-miipan.mp4'), name: "Vue.js", format: "video", kind: "relax", id: 1},
        { src: require('@/assets/video/relax-miipan02.mp4'), name: "Vue.js", format: "video", kind: "relax", id: 2}
      ],
      uploaded: ""
    }
  },
  methods: {
    upFile() {
      const files = this.$refs.upImg;
      const fileImg = files.files[0];
      if (fileImg.type.startsWith("image/") || fileImg.type.startsWith("video/")) {
        this.uploaded = window.URL.createObjectURL(fileImg);
        const addContent = { src: this.uploaded, name: "new one", format: "img", kind: "relax", id: 3}
        this.items.push(addContent)
      }
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.main__items__container{
  display: flex;
}

.main__item {
  width: 224px;
  margin-right: 48px;
}

.item__file__container {
  width: 218px;
  height: 218px;
  border: 3px solid #252525;
}

.item__file__container img, video {
  width: 100%;
  height: 100%;
}

.item__text{
  margin: 12px 0 0;
}

.upload__container {
  margin: 48px 0 0;
}

.upload__content {
  display: block;
}

.uploaded__preview{
  max-width: 700px;
  max-height: 640px;
  margin: 16px 0 0;
}

</style>
