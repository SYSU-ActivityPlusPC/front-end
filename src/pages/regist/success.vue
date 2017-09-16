<template>
<div class="success-wrapper">
  <TopBar />
  <div class="body" :style="style">
    <div class="content-1">
      <Icon type="checkmark-circled" color="#28bf96" size="40"></Icon>
      <span class="content-1-text">您的注册申请提交成功，请耐心等待管理员审核</span>
    </div>
    <div class="content-2">
      <div class="content-2-text">审核结果将在<span style="color: #5074d7; font-size: inherit">两个工作日内</span>发送到您的联系邮箱</div>
      <div class="content-2-text">若出现问题，我们会通过邮箱与您联系，请留意您的邮箱邮件</div>
      <div class="content-2-text">感谢你们对活动plus的支持</div>
      <MyButton :width="120" class="button" @click="goBack">返回首页</MyButton>
    </div>    
  </div>
</div>    
</template>

<script>
import Icon from 'iview/src/components/icon';
import MyButton from '@/components/button';
import TopBar from '@/components/header';
export default {
  components: { TopBar, Icon, MyButton },
  data () {
    return {
      style: ''
    };
  },
  mounted () {
    const paddingTop = document.getElementsByTagName('body')[0].clientHeight * 0.091;
    this.style = `padding-top: ${paddingTop}px`;
  },
  methods: {
    goBack () {
      this.$router.replace('/');
    }
  }
};
</script>

<style scoped>
.success-wrapper {
  margin: 1.8886% 7.35%;
}

.content-1 {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.content-1-text {
  margin-left: 20px;
  font-size: 22px;
}

.content-2 {
  padding-left: 55px;
}

.content-2-text {
  font-size: 16px;
  margin-top: 10px;
}

.button {
  margin-top: 30px;
}
</style>
