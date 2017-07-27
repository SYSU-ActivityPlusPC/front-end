<template>
<div class="notice-wrapper">
  <div class="left-box">
    <iForm :label-width="70">
      <FormItem label="活动名称">
        <iInput size="large" class="input" placeholder="请输入通知对象"/>
      </FormItem>
      <FormItem label="时间">
        <iInput size="large" class="input" placeholder="请输入通知主题"/>
      </FormItem>
      <FormItem label="正文">
        <iInput size="large" class="input" placeholder="请输入通知正文" type="textarea" :rows="12"/>
      </FormItem>
      <FormItem>
        <MyButton width="200" class="button">发送</MyButton>
      </FormItem>
    </iForm>
  </div>
  <div class="right-box">
    <SmallCard class="small-card" backgroundColor="#5074d7" @click="$router.push('/admin/community/notice/sent')">
      <img :src="sent" alt="注册申请" name="icon" />
      已发送(99)
    </SmallCard>
  </div>
</div>  
</template>

<script>
import { Form, FormItem, Input } from 'iview';
import { SmallCard, MyButton } from '@/components';
import sent from '@/assets/sent';
export default {
  components: {
    iForm: Form,
    FormItem,
    iInput: Input,
    SmallCard,
    MyButton
  },
  data () {
    return {
      sent
    };
  }
};
</script>

<style scoped>
.notice-wrapper {
  display: flex;
}

.left-box {
  width: 60.344%;
}

.right-box {
  flex: 1;
  margin-left: 6.034%;
}

.input {
  width: 85.714%;
  margin-left: -8px;
}

.small-card {
  width: 120px !important;
}
.button {
  margin-left: 16px;
}
</style>
