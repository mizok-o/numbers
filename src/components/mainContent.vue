<template>
  <div class="main__container">
    <h2>画像データ</h2>
    <div class="main__content">
      <ul class="main__items__container">
        <li
          v-for="item in items"
          :key="item.file_id"
          :class="item.kind"
          class="main__item"
        >
          <div class="item__file__container">
            <img v-if="item.file_format === 'img'" :src="item.file_url">
            <video v-if="item.file_format === 'video'" :src="item.file_url" controls></video>
          </div>
          <div class="item__text">
            <span style="font-size: 13px;">No.{{item.file_id}}</span>
            <h3 class="item__name">{{ item.file_name }}</h3>
          </div>
        </li>
      </ul>
    </div>
    <upload :itemList="items" @newContent="showContent" />
  </div>
</template>

<script>
import Upload from './upload.vue';
import axios from 'axios'
export default {
  components: {
    Upload
   },
  data() {
    return {
      items: []
    }
  },
  methods: {
    showContent(col) {
      this.items.push(col)
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/hello')
    .then((res) => {
      console.log(res);
      for(let i = 0; i < res.data.length;i++) {
        this.items.push(res.data[i])
        this.items[i].file_url = require('@/assets' + this.items[i].file_url)
      }
    })
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
