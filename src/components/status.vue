<template>
<div>
  <div class="status" v-if="status==='success'">
    <img class="icon" :src="success">
    <span class="text-green">已通过</span>
  </div>
  <div class="status" v-if="status === 'reviewing'">
    <img class="icon" :src="reviewing">
    <span class="text-reviewing">审核中</span>
  </div>
  <div class="status" v-if="status === 'end'">
    <img class="icon" :src="end">
    <span class="text-red">已结束</span>
  </div>
  <div class="status" v-if="status === 'continuting'">
    <img class="icon" :src="continuting">
    <span class="text-green">进行中</span>
  </div>
</div>
</template>

<script>
import reviewing from '@/assets/reviewing';
import success from '@/assets/success';
import end from '@/assets/end';
import continuting from '@/assets/continuting';

export default {
  props: {
    status: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      reviewing,
      success,
      end,
      continuting
    };
  }
};
</script>

<style scoped>
.status {
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  align-items: center;
  width: 50px;
}
.text-green {
  color: #28bf96;
}

.text-reviewing {
  color: #5074d7;
}

.text-red {
  color: #f91c6f;
}

.icon {
  height: 24px;
  width: 24px;
}
</style>
