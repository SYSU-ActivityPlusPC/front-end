<template>
<div :style="style" class="parent" @click="onClick">
  <iButton long 
          :style="buttonStyle"
          :type="type" 
          :disabled="disabled" 
          :size="size">
    <div class="button-innerbox">
      <slot name="icon"></slot>
      <span class="text" :class="{'text-ghost': type === 'ghost', 'text-primary': type === 'primary'}">
        <slot></slot>
      </span>
    </div>
  </iButton>
</div>
</template>

<script>
import iButton from 'iview/src/components/button';
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
    },
    size: {
      type: String,
      default: 'large'
    }
  },
  components: {
    iButton
  },
  computed: {
    style () {
      return `width: ${this.width}px; height: ${this.height}px; display: inline-block;`;
    },
    buttonStyle () {
      return `height: ${this.height}px;`;
    }
  },
  methods: {
    onClick () {
      if (this.disabled) return;
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.text {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s;
}

.button-innerbox {
  display: flex;
  align-items: center;
  justify-content: center;
}

.parent {
  position: relative;
}

.parent:hover .text-primary,
.parent:hover .text-ghost {
  font-size: 16px;
  transition: all .4s;
}


.parent:active .text-ghost {
  font-weight: bold;
}

.text-ghost {
  color: #5074d7;
}

.text-primary {
  color: white;
}

</style>
