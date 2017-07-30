<template>
<div class="wrapper">
  <div class="row1">
    <span class="num">共3个</span>    
    <iButton type="text" style="padding: 0 5px 0 0;">
      <img :src="remove" alt="删除" class="delete"/>
    </iButton>
  </div>
  <div class="lists">
    <template>
      <ListItem @click="open=true">
        <div slot="left">
          <p class="title">三月义卖</p>
          <p class="font-small">2017.3.3提交</p>
        </div>
        <div slot="right" class="right">
          <div class="right-item">
            <p class="font-small">来源</p>
            <p style="color: #666666;">SDCS团委</p>
          </div>
          <div class="right-item">
            <p class="font-small">活动对象</p>
            <p style="color: #666666;">中山大学在校生</p>
          </div>
          <div class="right-item">
            <a href="javascript:void(0)" class="accept">通过</a>
            <a href="javascript:void(0)" class="reject">拒绝</a>
          </div>
        </div>
      </ListItem>
    </template>
  </div>
  <Modal :open="open" @close="open=false"/>
</div>
</template>

<script>
import ListItem from '@/components/listItem';
import iButton from 'iview/src/components/button';
import Modal from './children/modal';
import remove from '@/assets/delete';
export default {
  components: {
    ListItem,
    iButton,
    Modal
  },
  data () {
    return {
      remove,
      open: false
    };
  }
};
</script>

<style scoped>
.row1 {
  display: flex;
  justify-content: flex-end;
}

.right {
  display: flex;
}

.right-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
}

.accept {
  color: #28bf96;
}

.reject {
  color: #f91c6f;
}

.num {
  margin-right: 15px;
  color: #666666;
}

.title {
  font-size: 16px;
  color: #666666;
}

.font-small {
  color: #999999;
  font-size: 10px;
}
</style>
