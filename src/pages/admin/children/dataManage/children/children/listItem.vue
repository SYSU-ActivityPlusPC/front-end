<template>
<div class="list-wrapper">
  <ListItem @click="onClick"  class="list-item">
    <div slot="left">
      <p class="list-title">{{item.title}}</p>
      <p class="font-small">{{item.time}}提交</p>
    </div>
    <div slot="right" class="right">
      <div class="list-right-item">
        <p class="font-small">来源</p>
        <p style="color: #666666;">{{item.src}}</p>
      </div>
      <div class="list-right-item">
        <p class="font-small">活动对象</p>
        <p style="color: #666666;">{{item.tar}}</p>
      </div>
      <slot name="right"></slot>
    </div>
  </ListItem>
  <iButton type="text" class="button-remove" @click="onRemove">
    <img :src="remove" alt="删除" />
  </iButton>
</div>
</template>

<script>
import ListItem from '@/components/listItem';
import iButton from 'iview/src/components/button';
import remove from '@/assets/delete';
export default {
  props: ['item'],
  components: {
    ListItem,
    iButton
  },
  data () {
    return {
      remove
    };
  },
  methods: {
    onClick () {
      this.$emit('click');
    },
    onRemove () {
      this.$emit('remove');
    }
  }
};
</script>

<style scoped>
.list-wrapper {
  display: flex;
  margin-bottom: 2.85%;
  position: relative;
}

.button-remove {
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
}

.list-title {
  font-size: 16px;
  color: #666666;
}

.list-right-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
}

.font-small {
  color: #999999;
  font-size: 10px;
}

.right {
  display: flex;
}
</style>
