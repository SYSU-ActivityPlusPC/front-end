<template>
  <div id="app">
    <div id="app-firstChild">
      <router-view></router-view>
    </div>
    <bottomBar />
  </div>
</template>

<script>
import footer from '@/components/footer';
export default {
  name: 'app',
  components: {
    bottomBar: footer
  }
};
</script>

<style scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app-firstChild {
  flex: 1;
}
</style>
