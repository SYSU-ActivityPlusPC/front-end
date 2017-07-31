<template>
<div class="sent-wrapper">
  <span class="messagesNum">2条信息</span>
  <template v-for="(item, index) in mock">
    <div :key="index" class="lists-wrapper">
      <ListItem  class="list-item">
        <div slot="left" class="titleAndTime">
          <p class="title">{{item.title}}</p>
          <p class="font">{{item.time}}发布</p>
        </div>
        <div slot="right" class="sentTo">
          <span class="font">发送至</span>
          <span>{{item.to}}</span>
        </div>
      </ListItem>
      <iButton type="text" class="button-remove">
        <img :src="remove" alt="删除" />
      </iButton>
    </div>
  </template>
</div>  
</template>

<script>
import ListItem from '@/components/listItem';
import Icon from 'iview/src/components/icon';
import iButton from 'iview/src/components/button';
import remove from '@/assets/delete';
export default {
  data () {
    return {
      remove,
      mock: [
        {
          title: '请各个社团快点完善信息xxxxxx',
          time: '2017.3.3',
          to: 'SDCS学生会'
        },
        {
          title: '请各个社团快点完善信息xxxxxx',
          time: '2017.3.3',
          to: 'SDCS学生会'
        },
        {
          title: '请各个社团快点完善信息xxxxxx',
          time: '2017.3.3',
          to: 'SDCS学生会'
        },
        {
          title: '请各个社团快点完善信息xxxxxx',
          time: '2017.3.3',
          to: 'SDCS学生会'
        }
      ]
    };
  },
  components: {
    ListItem,
    Icon,
    iButton
  }
};
</script>

<style scoped>
.sent-wrapper {
  width: 56.6%;  
}

.messagesNum {
  color: #666666;
  display: block;
  text-align: right;
  margin-bottom: 0.667%;
}
.font {
  color: #999999;
  font-size: 10px;
}
.sentTo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleAndTime {
  align-self: flex-end;
  margin-bottom: 6px;
}
.title {
  font-size: 16px;
}

.list-item {
  margin-bottom: 3.389%;
}

.lists-wrapper {
  position: relative;
}

.button-remove {
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
