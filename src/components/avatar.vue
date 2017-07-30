<template>
<div class="avatar-wrapper">
  <img v-lazy="avatar" class="avatar" alt="你的头像" :style="imgStyle" />
  <span class="name" :style="spanStyle">{{name}}</span>
</div>  
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDuMzNb49vsxj0jZvYrJnJz8zk3pebawHiwBh7SzV7G_fTpDRwg'
    },
    name: {
      type: String,
      required: true,
      default: '我'
    },
    labelColor: {
      type: String,
      required: false,
      default: '#333333'
    },
    size: {
      type: Number,
      required: false,
      default: 48
    }
  },
  computed: {
    imgStyle () {
      return `height: ${this.size}px;
              width: ${this.size}px;
      `;
    },
    spanStyle () {
      return `color: ${this.labelColor};
      `;
    }
  }
};
</script>

<style scoped>
.avatar-wrapper {
  display: flex;
  align-items: center;
  height: inherit;
}

.avatar {
  border-radius: 50%;
}

.name {
  margin-left: 12px;
  font-size: 16px;
}
</style>
