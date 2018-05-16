<template>
<div class="list-item" @click="onClick">
  <slot name="left"></slot>
  <slot name="right"></slot>
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
.list-item {
  padding: 0 20px;
  height: 68px;
  /*margin: 0 0 12px 0;*/
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  cursor: pointer;
}  
</style>
