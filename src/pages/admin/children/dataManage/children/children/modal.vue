<template>
<Modal scrollable :value="open">
  <div slot="header" class="header">三月义卖</div>
  <div></div>
  <div slot="footer" class="footer">
    <MyButton :width="140">编辑活动信息</MyButton>
  </div>
</Modal>  
</template>

<script>
import { Modal } from 'iview';
import { MyButton } from '@/components';
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false
    },
    data: {
      type: Object,
      required: false
    }
  },
  components: {
    Modal,
    MyButton
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5074d7;
  padding: 20px 14px;
}

.footer {
  display: flex;
  justify-content: center;
}
</style>
