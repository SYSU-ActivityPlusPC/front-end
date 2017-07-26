<template>
<div class="wrapper">
  <TopBar />
  <div :style="style">
    <router-view />
  </div>
</div>
</template>

<script>
import TopBar from '@/components/header';
export default {
  components: {
    TopBar
  },
  mounted () {
    const paddingTop = document.getElementsByTagName('body')[0].clientHeight * 0.091;
    this.style = `padding-top: ${paddingTop}px`;
  },
  data () {
    return {
      style: ''
    };
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
</style>
