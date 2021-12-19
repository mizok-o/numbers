<template>
  <div class="numbers-container">
    <h1 :class="{ moving: move }"><span style="font-size: 104px;">#</span>{{numbers}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      numbers: 99,
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
        //現在時刻を表示する関数
        this.showNumbers();
      }, 75);
    }
    this.moveNumbers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  width: 240px;
  margin: 0 auto;
  font-size: 120px;
  /* transform: translateX(0); */
}
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
  animation: moveNumbers 15s infinite;
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
