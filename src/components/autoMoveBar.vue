<template>
  <div class="moveBar-container">
    <div class="moveBar-content">
      <div class="moveBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
    // onload = () => {
    //   setInterval(() => {
    //     //現在時刻を表示する関数
    //     this.showNumbers();
    //   }, 75);
    // }
    // this.moveNumbers();
  }
}
</script>

<style scoped>
.moveBar-container {
  margin: 0 32px;
}

.moveBar-content {
  position: relative;
  width: 2px;
  height: 48px;
  overflow: hidden;
}

.moveBar {
  width: 100%;
  height: 100%;
  background-color: #252525;
  transform: translateY(-96px);
  animation: moveBlack 4.5s ease-in infinite;
}

.moveBar-content::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #d5d5d5;
  z-index: -1;
}

@keyframes moveBlack{
  0% {
    transform: translateY(-96px);
  }
  100% {
    transform: translateY(180px);
  }

}

</style>
