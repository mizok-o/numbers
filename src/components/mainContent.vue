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
    <upload @getFile="addFile" :itemList="items" />
  </div>
</template>

<script>
import Upload from './upload.vue';
export default {
  components: { 
    Upload
   },
  name: 'main',
  data() {
    return {
      items: [
        { src: require('@/assets/img/S__18538514.jpg'), name: "example", format: "img", id: 0},
        { src: require('@/assets/video/relax-miipan.mp4'), name: "ほいみ", format: "video", id: 1},
        { src: require('@/assets/video/relax-miipan02.mp4'), name: "どぅん", format: "video", id: 2}
      ]
    }
  },
  methods: {
    addFile(m) {
      this.items.push(m);
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
  position: relative;
  width: 218px;
  height: 218px;
  overflow: hidden;
  border: 3px solid #252525;
}

.item__file__container, img {
  width: 218px;
}

.item__file__container video {
  width: 100%;
  height: 100%;
}

.item__text{
  margin: 4px 0 0;
}
.item__name {
  margin: 4px 0 0;
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
