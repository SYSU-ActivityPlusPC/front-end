<template>
<div class="sent-wrapper">
  <div class="row-1">
    <span class="messagesNum">2条信息</span>
    <iButton type="text" style="padding: 0 5px 0 0;">
      <img :src="remove" alt="删除" class="delete"/>
    </iButton>
  </div>
  <template v-for="(item, index) in mock">
    <ListItem :key="index" class="list-item">
      <div slot="left" class="titleAndTime">
        <p class="title">{{item.title}}</p>
        <p class="font">{{item.time}}发布</p>
      </div>
      <div slot="right" class="sentTo">
        <span class="font">发送至</span>
        <span>{{item.to}}</span>
      </div>
    </ListItem>
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
  width: 55.344%;  
}
.row-1 {
  display: flex;
  justify-content: flex-end;
}
.messagesNum {
  color: #666666;
  margin-right: 20px;
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
</style>
