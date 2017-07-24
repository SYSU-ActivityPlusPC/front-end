<template>
  <div class="page-wrapper">
    <iButton type="text" :disabled="cur === 1" style="padding: 0 15px 0 0;">
      <Icon type="arrow-left-b" :size="20" color="#5074d7"></Icon>
    </iButton>
    <span class="rate">{{cur}} / {{all}}</span>
    <iButton type="text" :disabled="cur === all" style="padding: 0 0 0 15px;">
      <Icon type="arrow-right-b" :size="20" color="#5074d7"></Icon>
    </iButton>
  </div>
</template>

<script>
import { Button, Icon } from 'iview';
export default {
  props: {
    current: {
      type: Number,
      default: 1,
      required: true
    },
    total: {
      type: Number,
      default: 1,
      required: true
    }
  },
  components: {
    iButton: Button,
    Icon
  },
  computed: {
    all () {
      return Math.floor(this.total / 5) + 1;
    },
    cur () {
      return this.current;
    }
  }
};
</script>

<style scoped>
.page-wrapper {
  margin-left: 94px;
  display: flex;
  justify-content: flex-start;
}
.rate {
  color: #5074d7;
}
</style>
