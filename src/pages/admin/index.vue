<template>
<div class="wrapper">
  <TopBar showExit="true" />
  <router-view class="router-view" />
</div>
</template>

<script>
import TopBar from '@/components/header';
export default {
  components: {
    TopBar
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
.router-view {
  margin-top: 60px;
}
</style>
