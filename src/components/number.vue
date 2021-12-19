<template>
  <div>
    <h2 :class="{ moving: move }"><span style="font-size: 48px;">#</span>{{numbers}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      numbers: 0,
      move: false
    }
  },
  methods: {
    showNumbers(){
      const random = Math.random() * 100;
      const randomCut = Math.floor(random);
      this.numbers = ("0" + randomCut).slice(-2);
    },
    moveNumbers() {
      this.move = true;
    }
  },
  mounted() {
    onload = () => {
      setInterval(() => {
        this.showNumbers();
      }, 75);
    }
    this.moveNumbers();
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.moving {
  /* animation: moveNumbers 13.5s infinite; */
}
@keyframes moveNumbers {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(400px);
  }
}
</style>
