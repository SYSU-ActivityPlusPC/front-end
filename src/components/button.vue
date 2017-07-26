<template>
<iButton :style="style" :type="type" :disabled="disabled" size="large" @click="onClick">
  <span style="color: white"><slot></slot></span>
</iButton>  
</template>

<script>
import { Button } from 'iview';
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    height: {
      type: String,
      default: '40px'
    },
    width: {
      type: String,
      default: '100%'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    iButton: Button
  },
  computed: {
    style () {
      return `width: ${this.width}px; height: ${this.height}px;`;
    }
  },
  methods: {
    onClick () {
      this.$emit('click');
    }
  }
};
</script>

<style>
  
</style>
