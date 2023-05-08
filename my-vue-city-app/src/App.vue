<template>
  <div id="app">
    <TopArea></TopArea>
    <MainArea></MainArea>
    <!-- <InfoArea></InfoArea> -->
  </div>
</template>

<script>

import TopArea from './components/TopComp.vue';
import MainArea from './components/MainComp.vue';
import InfoArea from './components/InfoComp.vue';

export default {
  name: 'App',
  components: {
    TopArea,
    MainArea,
    InfoArea
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
