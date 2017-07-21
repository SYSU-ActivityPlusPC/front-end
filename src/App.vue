<template>
  <div id="app">
    <Spin />
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import { Spin } from 'iview';
export default {
  name: 'app',
  components: {
    Spin
  }
};
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
