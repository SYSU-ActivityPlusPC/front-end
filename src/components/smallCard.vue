<template>
<div class="card-wrapper" @click="onClick">
  <div class="icon-wrapper" :style="style">
    <slot name="icon"></slot>
    <slot></slot>
  </div>
</div>  
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$emit('click');
    }
  },
  props: {
    backgroundColor: {
      type: String
    }
  },
  computed: {
    style () {
      return `background-color: ${this.backgroundColor}`;
    }
  }
};
</script>

<style scoped>
.card-wrapper {
  height: 84px;
  width: 84px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);
  padding: 1px;
  border-radius: 4px;
}

img {
  height: 42px;
  width: 42px;
  margin-bottom: 5px;
}
.icon-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f2f2f2;
  border-radius: 4px;
}
</style>
