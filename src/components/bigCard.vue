<template>
<div class="card-wrapper" @click="onClick" @mouseover="onHover" @mouseleave="onLeave">
  <slot name="floatingLayer"></slot>
  <div class="card-body">
    <slot name="image"></slot>
    <slot name="text"></slot>
  </div>
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
  width: 320px;
  height: 240px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}
img {
  height: 160px;
  width: 290px;
}
span {
  display: block;
  font-size: 16px;
  color: #5074d7;
  margin-top: 10px;
  text-align: center;
}
.card-body {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 16px 15px 0 15px;
}
</style>
