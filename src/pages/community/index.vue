<template>
<div class="wrapper">
  <TopBar :showExit="true" />
  <router-view />
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
</style>
