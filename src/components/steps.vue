<template>
<div class="steps-wrapper">
  <template v-for="(item, index) in config">
    <div class="step" :key="index">
      <img src="../assets/step-finish-0.png" alt="" v-if="index === 0" />
      <img src="../assets/step-finish-1.png" alt="" v-if="index !== 0 && current === index" />
      <img src="../assets/step-unfinish.png" alt="" v-if="index !== 0 && current !== index" />
      <span class="step-text">{{item}}</span>
    </div>
  </template>
</div>
</template>

<script>
export default {
  props: {
    config: {
      type: Array,
      required: true,
      default: [
        '填写活动信息',
        '选择报名信息',
        '等待审核'
      ]
    },
    current: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>

<style scoped>
.steps-wrapper {
  display: flex;
}
.step {
  position: relative;
}
.step-text {
  position: absolute;
  color: #f2f2f2;
  top: 5px;
  left: 28px;
}
</style>
