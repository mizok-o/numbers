<template>
  <div class="main__container">
    <h2>画像データ</h2>
    <div class="main__content">
      <maintoggle
        :propToggle="toggleStatus"
        @descending="sortDescend"
        @ascending="sortAscend"
        @viewed="sortViewed"
      />
      <ul class="main__items__container">
        <transition-group name="shuffle">
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
              <itemdesc :propTitle="item.title" />
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
    <!-- <upload :itemList="items" @newContent="showContent" /> -->
  </div>
</template>

<script>
// import axios from 'axios'
// import gsap from 'gsap'
import maintoggle from '../components/under-main/main-toggle.vue'
import itemdesc from '../components/under-main/item-desc.vue'

export default {
  components: {
    maintoggle,
    itemdesc
  },
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
    clickImage(item) {
      this.$emit('from-item', item.url)
    },
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
  max-width: 816px;
}

.shuffle-move {
  transition: transform .2s ease;
}

.main__item {
  position: relative;
  overflow: hidden;
  width: 224px;
  margin: 32px 48px 0 0;
}

.item__file__container {
  width: 100%;
  height: 224px;
  padding: 12px;
  border-radius: 32px;
  background-color: #252525;
}

.item__file__container video, img {
  width: 100%;
  height: 100%;
}

.item__text{
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
