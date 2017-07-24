<template>
<div class="wrapper" @click="onClick">
  <slot name="image"></slot>
  <slot name="text"></slot>
</div>  
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
  width: 320px;
  height: 240px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);
}
img {
  height: 158px;
  width: 288px;
}
span {
  display: block;
  font-size: 16px;
  color: #5074d7;
  margin: 10px;
  text-align: center;
}
</style>
