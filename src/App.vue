<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/money.png">
    <HelloWorld msg="Gold Miner"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import './assets/css/stylesheet.css';

body {
    background-color: yellow;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: atlantis_internationalregular, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
}

img {
  width: 100px;
}
</style>
