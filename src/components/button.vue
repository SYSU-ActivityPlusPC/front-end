<template>
<div :style="style" @mouseover="onHover" @mouseleave="onLeave" class="parent" @click="onClick">
  <iButton long 
          :style="buttonStyle"
          :type="type" 
          :disabled="disabled" 
          size="large">
    <span :style="textStyle" class="text"><slot></slot></span>
  </iButton>
</div>
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
      type: Number,
      default: 40
    },
    width: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false
    };
  },
  components: {
    iButton: Button
  },
  computed: {
    style () {
      return `width: ${this.width}px; height: ${this.height}px; display: inline-block;`;
    },
    buttonStyle () {
      return `height: ${this.height}px;`;
    },
    textStyle () {
      return this.hover ? 'color: white; font-size: 16px;' : 'color: white;';
    }
  },
  methods: {
    onClick () {
      if (this.disabled) return;
      this.$emit('click');
    },
    onHover () {
      if (this.disabled) return;
      this.hover = true;
    },
    onLeave () {
      if (this.disabled) return;
      this.hover = false;
    }
  }
};
</script>

<style scoped>
.text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.parent {
  position: relative;
}
</style>
