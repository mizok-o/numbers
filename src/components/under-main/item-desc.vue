<template>
  <div class="item__text__main">
    <transition name="pra">
      <h3 class="item__name" @click="moveItem">{{ propTitle }}</h3>
    </transition>
    <div class="item__button__liked" @click="liked" :class="{button__liked : heartLiked}">
      <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="width: 32px; height: 32px; opacity: 1;" xml:space="preserve">
        <circle class="round__svg" r="150" cx="250" cy="250"></circle>
        <g>
          <path class="st0" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
            c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
            l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
// import gsap from 'gsap'
export default {
  props: [
    'propTitle'
  ],
  data() {
    return {
      heartLiked: false
    }
  },
  methods: {
    liked() {
      this.heartLiked = !this.heartLiked
    }
  }
}
</script>

<style scoped>

.item__text__main {
  display: flex;
  justify-content: space-between;
  margin-right: 12px;
}

.item__name {
  margin: 4px 0 0;
  font-size: 20px;
}

.item__button__liked svg {
  width: 24px;
  height: 24px;
  opacity: 1;
}

.round__svg, .st0{
  transform-origin: center;
}

.round__svg {
  fill: none;
  stroke-width: 0;
  stroke: #252525;
}

.button__liked .round__svg {
 animation: explosionAnime 2s;
}

@keyframes explosionAnime {
  0% {
    opacity: 0;
    transform: scale(0.01);
  }
  1% {
    opacity: 1;
    transform: scale(0.01);
  }

  5% {
    stroke-width: 200;
  }

  20% {
    stroke-width: 300;
  }

  50% {
    stroke: rgba(204, 142, 245, 1);
    transform: scale(1.1);
    stroke-width: 1;
  }
  50.1% {
    stroke-width: 0;
  }

  100% {
    stroke: rgba(204, 142, 245, 1);
    transform: scale(1.1);
    stroke-width: 0;
  }
}

.button__liked .st0 {
  fill: #F70048;
  animation: reHeart 2s ease;
}

@keyframes reHeart {
  0% {
    transform: scale(0);
    fill: #F70048;
  }
  39% {
    transform: scale(0);
  }
  60% {
    transform: scale(1, 1);
  }
  70% {
    transform: scale(.95, .95) translate(0%, -10%);
  }
  75% {
    transform: scale(.95, 0.75) translate(0%, 5%);
  }
  80% {
    transform: scale(0.75, .85) translate(0%, -3%);
  }
  100% {
    transform: scale(1.0, 1.0) translate(0%, 0%);
    fill: #F70048;
  }
}

</style>
