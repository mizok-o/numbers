<template>
  <router-view v-slot="{ Component }">
    <transition @before-enter="beforeEnter" appear name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.style.transitionDelay = 3000 * parseInt(el.dataset.index, 10) + 'ms'
    }
  }
}
</script>
<style>
@import "./assets/sass/main.scss";
@import "./assets/sass/prepend.scss";


.fade-enter {
  opacity: 0;
  transform: translateY(-200px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.fade-enter-active {
  transition: all 200ms ease-in;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.fade-leave-active {
  transition: all 200ms ease-out;
}
</style>
