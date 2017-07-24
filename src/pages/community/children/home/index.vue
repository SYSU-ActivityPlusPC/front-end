<template>
<div class="wrapper">
  <div class="messages">
    <div class="title">
      <span>系统消息</span>
      <span>2条未读</span>
    </div>
    <Card :padding="0" style="padding: 8px 0 16px 0;">
      <div class="messagesList">
        <template v-for="(message, index) in messages">
          <div class="messages-item" 
               :class="{'messages-item-hover': hoverIndex === index}"
               @mouseover="hoverIndex = index"
               @mouseleave="hoverIndex = -1">
            <span class="message-time">{{message.time}}</span>
            <span class="message-title">{{message.title | shortTitle}}</span>
            <span class="message-status">{{message.status}}</span>
          </div>
        </template>
      </div>
      <div>
      </div>
    </Card>
  </div>
  <div class="card">
    <myCard style="display: inline-block;">
      <span slot="text">发布活动</span>
      <img slot="image" alt="发布活动" src="../../../../assets/publish.png"/>
    </myCard>
    <myCard style="display: inline-block;">
      <span slot="text">社团管理</span>
      <img slot="image" alt="社团管理" src="../../../../assets/manage.png" />
    </myCard>
  </div>
</div>
</template>

<script>
import myCard from '@/components/bigCard';
import { Card } from 'iview';
export default {
  data () {
    return {
      hoverIndex: -1,
      messages: [
        {
          time: '刚刚',
          title: '功能暂停功能暂停功能暂停',
          status: '未读'
        },
        {
          time: '30分钟前',
          title: '功能暂停功能暂停功能暂停功能暂停',
          status: '未读'
        },
        {
          time: '2017年7月2',
          title: '功能暂停功能暂停功能暂停功能暂停',
          status: '已读'
        },
        {
          time: '2016.6.6',
          title: '功能暂停功能暂停功能暂停功能暂停',
          status: '已读'
        },
        {
          time: '2015年9月1',
          title: '功能暂停功能暂停功能暂停功能暂停',
          status: '已读'
        }
      ]
    };
  },
  components: {
    myCard,
    Card
  },
  filters: {
    shortTitle (value) {
      return value.length > 14 ? value.slice(0, 14) + '...' : value;
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.messages {
  width: 720px;
}
.title {
  margin-bottom: 12px;
}
.title>:first-child {
  font-size: 16px;
  color: #5074d7;
}
.title>:last-child {
  font-size: 12px;
  color: #f91c6f;
}
.messagesList {
  width: 359px;
  border-right: 1px solid #f2f2f2;
}
.messages-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
}

.messages-item-hover {
  background-color: #f2f2f2;
}

.message-time {
  width: 84px;
  text-align: right;
  font-size: 12px;
  color: #999999;
}

.message-title {
  margin: 0 5px;
}

.message-status {
  font-size: 10px;
  color: #f91c6f;
}

.card {
  margin: 30px 0 0 0;
  width: 720px;
  display: flex;
  justify-content: space-between;
}


</style>
