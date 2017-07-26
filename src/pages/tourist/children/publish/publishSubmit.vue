<template>
<div class="publishSubmit-wrapper">
  <Icon type="checkmark-circled" color="#28bf96" size="40"></Icon>
  <div class="right-wrapper">
    <div class="text-1">活动提交成功！</div>
    <div class="text-2">请等待管理员审核，审核结果将发送到您的联系邮箱</div>
    <MyButton width="120" class="button" @click="onClick">继续发布活动</MyButton>
  </div>
</div>  
</template>

<script>
import { Icon } from 'iview';
import { MyButton } from '@/components';
export default {
  components: {
    Icon,
    MyButton
  },
  methods: {
    onClick () {
      this.$emit('continute');
    }
  }
};
</script>

<style scoped>
.publishSubmit-wrapper {
  display: flex;
}
.right-wrapper {
  margin-left: 20px;
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
  margin-top: 30px;
}
</style>
