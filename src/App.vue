<template>
  <div id="app">
    <login />
  </div>
</template>

<script>
import login from '@/page/login';
export default {
  name: 'app',
  components: {
    login
  }
};
</script>

<style scoped>
#app {
  height: 100%;
}
.row-height {
  height: 100%;
}
</style>
