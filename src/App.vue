<template>
  <div id="app">
    <div id="app-firstChild">
      <login />
    </div>
    <bottomBar />
  </div>
</template>

<script>
import login from '@/pages/login';
import footer from '@/components/footer';
export default {
  name: 'app',
  components: {
    login,
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
.row-height {
  height: 100%;
}
</style>
