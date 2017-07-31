<template>
<div class="wrapper">
  <span class="num">共{{mock.length}}个</span>
  <div class="lists">
    <template v-for="(item, index) in mock">
      <ListItem @click="open=true" :key="item.time" :item="item">
          <div class="right-item" slot="right">
            <a href="javascript:void(0)" class="accept">通过</a>
            <a href="javascript:void(0)" class="reject">拒绝</a>
          </div>
      </ListItem>
    </template>
  </div>
  <Modal :open="open" @close="open=false"/>
</div>
</template>

<script>
const mock = [
  {
    title: '三月义卖',
    time: '30s',
    src: 'sdcs',
    tar: '中山大学在校生'
  },
  {
    title: '三月义卖',
    time: '1天',
    src: 'sdcs',
    tar: '中山大学在校生'
  },
  {
    title: '三月义卖',
    time: '2月',
    src: 'sdcs',
    tar: '中山大学在校生'
  },
  {
    title: '三月义卖',
    time: '3年',
    src: 'sdcs',
    tar: '中山大学在校生'
  }
];

import ListItem from './children/listItem';
import Modal from './children/modal';
export default {
  components: {
    ListItem,
    Modal
  },
  data () {
    return {
      mock,
      open: false
    };
  }
};
</script>

<style scoped>
.num {
  display: flex;
  justify-content: flex-end;
  color: #666666;
  margin-bottom: 0.647%;
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


.title {
  font-size: 16px;
  color: #666666;
}

.font-small {
  color: #999999;
  font-size: 10px;
}
</style>
