<template>
  <div class="main__container">
    <h2>画像データ</h2>
    <div class="main__content">
      <div class="main__content__options">
        <button class="options__sort__button" @click="sortAscend">新しい順</button>
        <button class="options__sort__button" @click="sortDescend">古い順</button>
        <button class="options__sort__button">人気順</button>
      </div>
      <ul class="main__items__container">
        <li
          v-for="item in items"
          :key="'datum-item-' + item.id"
          :class="item.genre"
          class="main__item"
        >
          <div class="item__file__container" @click="clickImage(item)">
            <img v-if="item.type === 'img'" :src="item.url">
            <video v-if="item.type === 'video'" :src="item.url" controls></video>
          </div>
          <div class="item__text">
            <span style="font-size: 13px;">No.{{item.id}}</span>
            <h3 class="item__name">{{ item.title }}</h3>
          </div>
        </li>
      </ul>
    </div>
    <!-- <upload :itemList="items" @newContent="showContent" /> -->
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      items: [
        {id: 1, url: require("@/assets/img/logo.png"), title: "Example", type: "img", genre: "stock" },
        {id: 2, url: require("@/assets/img/logo.png"), title: "Example2", type: "img", genre: "stock" },
        {id: 3, url: require("@/assets/img/logo.png"), title: "Example3", type: "img", genre: "stock" },
        {id: 4, url: require("@/assets/img/logo.png"), title: "Example", type: "img", genre: "stock" },
        {id: 5, url: require("@/assets/img/logo.png"), title: "Example", type: "img", genre: "stock" },
        {id: 6, url: require("@/assets/img/logo.png"), title: "Example", type: "img", genre: "stock" },
        {id: 7, url: require("@/assets/img/logo.png"), title: "Example7", type: "img", genre: "stock" },
        {id: 8, url: require("@/assets/img/logo.png"), title: "Example8", type: "img", genre: "stock" }
      ]
      // modalItem: ""
    }
  },
  methods: {
    sortAscend() {
      const resultAscend = this.items.sort((a, b) => (a.id > b.id ? -1 : 1))
      return resultAscend
    },
    sortDescend() {
      const resultDescend = this.items.sort((a, b) => (a.id < b.id ? -1 : 1))
      return resultDescend
    },
    clickImage(item) {
      this.$emit('from-item', item.url)
    }
  },
  mounted() {

    // axios.get('http://localhost:3000/api/hello')
    // .then((res) => {
    //   for(let i = 0; i < res.data.length;i++) {
    //     this.items.push(res.data[i])
    //     this.items[i].file_url = require('@/assets' + this.items[i].file_url)
    //   }
    // })
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

.main__content__options {
  margin-top: 12px;
}

.options__sort__button {
  padding: 5px;
  margin-right: 12px;
  border: 2px solid #252525;
  border-radius: 8px;
}



.main__items__container{
  display: flex;
  flex-wrap: wrap;
  max-width: 816px;
}

.main__item {
  width: 224px;
  margin: 16px 48px 0 0;
}

.item__file__container {
  position: relative;
  width: 218px;
  height: 218px;
  overflow: hidden;
  background-color: #252525;
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
