<template>
<div class="publishSubmit-wrapper">
  <Icon type="checkmark-circled" color="#28bf96" size="40"></Icon>
  <div class="right-wrapper">
    <span class="text-1">活动提交成功!</span>
    <br />
    <span class="text-2">{{authority === 'tourist' ? '请等待管理员审核，审核结果将发送到您的联系邮箱' : '请等待管理员审核，审核通过后活动会在PLUS平台上发布'}}</span>
    <div>
      <a href="javascript:void(0)" v-if="authority !== 'tourist'" @click="$emit('continute')">继续发布活动</a>
      <MyButton :width="120" class="button" @click="onClick">{{authority === 'tourist' ? '继续发布活动' : '活动管理'}}</MyButton>
    </div>
  </div>
</div>  
</template>

<script>
import Icon from 'iview/src/components/icon';
import MyButton from '@/components/button';
export default {
  props: {
    authority: {
      type: String,
      required: true
    }
  },
  components: {
    Icon,
    MyButton
  },
  methods: {
    onClick () {
      if (this.authority === 'tourist') {
        this.$emit('continute');
      } else {
        this.$emit('manage');
      }
    }
  }
};
</script>

<style scoped>
.publishSubmit-wrapper {
  display: flex;
}
.right-wrapper {
  margin-left: 1.887%;
}
.text-1 {
  height: 40px;
  line-height: 40px;
  font-size: 22px;
}
.text-2 {
  font-size: 16px;
}
.button {
  margin: 30px 0 0 40px;
}
</style>
