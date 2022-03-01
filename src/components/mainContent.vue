<template>
  <div class="main__container">
    <h2>画像データ</h2>
    <div class="main__content">
      <div class="main__content__toggle">
        <div
          class="toggle__background"
          :class="[
            !toggleStatus ? 'toggleOld' : '',
            toggleStatus === 'new' ? 'toggleNew' : '',
            toggleStatus === 'viewed' ? 'toggleViewed' : '',
          ]"
        ></div>
        <button class="toggle__button" @click="sortDescend" :class="!toggleStatus ? 'colorwhite' : ''">古い順</button>
        <button class="toggle__button" @click="sortAscend" :class="toggleStatus === 'new' ? 'colorwhite' : ''">新しい順</button>
        <button class="toggle__button" @click="sortViewed" :class="toggleStatus === 'viewed' ? 'colorwhite' : ''">人気順</button>
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
      ],
      toggleStatus: ""
    }
  },
  methods: {
    sortDescend() {
      this.toggleStatus = ""
      const resultDescend = this.items.sort((a, b) => (a.id < b.id ? -1 : 1))
      return resultDescend
    },
    sortAscend() {
      this.toggleStatus = "new"
      const resultAscend = this.items.sort((a, b) => (a.id > b.id ? -1 : 1))
      return resultAscend
    },
    sortViewed() {
      this.toggleStatus = "viewed"
    },
    clickImage(item) {
      this.$emit('from-item', item.url)
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

.main__content__toggle {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  width: 278px;
  margin-top: 12px;
  color: rgb(204, 204, 204);
  border: 1px solid rgb(204, 204, 204);
  border-radius: 50px;
}

.toggle__background {
  position: absolute;
  top: 0;
  left: 0px;
  width: 92px;
  height: 27px;
  background-color: #252525;
  transition: .1s ease-in-out;
}

.toggleOld {
  transform: translateX(0px);
}

.toggleNew {
  transform: translateX(92px);
}

.toggleViewed {
  transform: translateX(184px);
}

.colorwhite {
  color: #eee;
}

.toggle__button {
  position: relative;
  width: 92px;
  padding: 4px 16px;
  text-align: center;
}

.toggle__button:last-child {
  margin-right: 0;
}

/* トグルボタンの区切り線 */
.toggle__button::after {
  content: "";
  position: absolute;
  top: -4px;
  right: 0px;
  width: 1px;
  height: 29px;
  border-right: 1px solid rgb(204, 204, 204);
}

.toggle__button:last-child::after {
  display: none;
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
