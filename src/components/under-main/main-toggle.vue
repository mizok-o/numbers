<template>
  <div class="main__content__toggle">
    <div
      class="toggle__background"
      :class="[
        !propToggle ? 'toggleOld' : '',
        propToggle === 'new' ? 'toggleNew' : '',
        propToggle === 'viewed' ? 'toggleViewed' : '',
      ]"
    ></div>
    <button class="toggle__button" @click="descendEvent" :class="!propToggle ? 'colorwhite' : ''">古い順</button>
    <button class="toggle__button" @click="ascendEvent" :class="propToggle === 'new' ? 'colorwhite' : ''">新しい順</button>
    <button class="toggle__button" @click="viewEvent" :class="propToggle === 'viewed' ? 'colorwhite' : ''">人気順</button>
  </div>
</template>

<script>
export default {
  props: ['propToggle'],
  methods: {
    descendEvent() {
      this.$emit("descending")
    },
    ascendEvent() {
      this.$emit("ascending")
    },
    viewEvent() {
      this.$emit("viewed")
    }
  }
}
</script>

<style scoped>

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
  transition: .5s ease-in-out;
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
</style>
