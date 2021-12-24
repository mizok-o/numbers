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
            <h3 class="item__name">{{ item.name }}</h3>
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
          class="upload__button">
      </label>
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
        { src: require('@/assets/video/relax-miipan.mp4'), name: "ほいみ", format: "video", kind: "relax", id: 1},
        { src: require('@/assets/video/relax-miipan02.mp4'), name: "ドゥン！", format: "video", kind: "relax", id: 2}
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
.main__container {
  margin: 48px 0 0;
}

.main__content {
  margin: 8px 0 0;
}

.main__items__container{
  display: flex;
  flex-wrap: wrap;
}

.main__item {
  width: 224px;
  margin: 16px 32px 0 0;
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
  margin: 4px 0 0;
}
.item__name {
  margin: 4px 0 0;
}

.upload__container {
  margin: 40px 0 0;
}

.upload__content {
  position: relative;
  display: block;
  width: 160px;
  height: 48px;
  border-radius: 8px;
  background-color: #252525;
}

.upload__content::after {
  content: "新規追加";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 600;
}

.upload__button {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
}

@media screen and (max-width:750px) {
  .main__items__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .main__item {
    width: 164px;
    margin-right: 0;
  }
  .item__file__container{
    width: 164px;
    height: 164px;
    border: 2px solid #252525;
  }
  .item__name {
    margin: 0;
  }
}
</style>
