<template>
  <div class="moveBar__container">
    <div class="moveBar"></div>
  </div>
</template>

<script>
</script>

<style scoped>

.moveBar__container {
  position: relative;
  width: 2px;
  height: 48px;
  overflow: hidden;
  margin: 80px 0 0;
}

.moveBar {
  width: 100%;
  height: 100%;
  background-color: #252525;
  transform: translateY(-96px);
  animation: moveBlack 4.5s ease-in infinite;
}

.moveBar__container::after {
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
