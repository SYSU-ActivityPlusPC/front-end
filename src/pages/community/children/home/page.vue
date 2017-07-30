<template>
  <div class="page-wrapper">
    <iButton type="text" :disabled="cur === 1" style="padding: 0 15px 0 0;" @click="pre">
      <Icon type="arrow-left-b" :size="20" color="#5074d7"></Icon>
    </iButton>
    <span class="rate">{{cur}} / {{all}}</span>
    <iButton type="text" :disabled="cur === all" style="padding: 0 0 0 15px;" @click="next">
      <Icon type="arrow-right-b" :size="20" color="#5074d7"></Icon>
    </iButton>
  </div>
</template>

<script>
// import { Button, Icon } from 'iview';
import iButton from 'iview/src/components/button';
import Icon from 'iview/src/components/icon';
export default {
  props: {
    current: {
      type: Number,
      default: 1,
      required: true
    },
    total: {
      type: Number,
      default: 10,
      required: true
    }
  },
  components: {
    iButton,
    Icon
  },
  data () {
    return {
      cur: -1
    };
  },
  created () {
    this.cur = this.current;
  },
  computed: {
    all () {
      let mod = this.total % 5;
      let num = this.total / 5;
      return mod === 0 ? num : Math.floor(num) + 1;
    }
  },
  methods: {
    next () {
      this.cur++;
      this.$emit('pageChange', this.cur);
    },
    pre () {
      this.cur--;
      this.$emit('pageChange', this.cur);
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
