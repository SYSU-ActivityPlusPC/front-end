<template>
<div class="card-wrapper" @click="onClick" @mouseover="onHover" @mouseleave="onLeave">
  <slot name="floatingLayer"></slot>
  <slot name="image"></slot>
  <slot name="text"></slot>
</div>  
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$emit('click');
    },
    onHover () {
      this.$emit('mouseover');
    },
    onLeave () {
      this.$emit('mouseleave');
    }
  }
};
</script>

<style scoped>
.card-wrapper {
  position: relative;
  padding: 16px;
  width: 320px;
  height: 240px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);
  overflow: hidden;
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
