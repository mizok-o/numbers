<template>
  <div class="moveBar__container">
    <div class="moveBar__content">
      <div class="moveBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'autoMoveBar'
}
</script>

<style scoped>
.moveBar__content {
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

.moveBar__content::after {
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
