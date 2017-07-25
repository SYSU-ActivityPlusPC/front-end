<template>
<div class="wrapper">
  <div class="messages">
    <div class="title">
      <span>系统消息</span>
      <span>2条未读</span>
    </div>
    <Card :padding="0" style="padding: 8px 0 16px 0;">
      <div class="messages-wrapper">
        <div class="messagesList">
          <template v-for="(message, index) in messages">
            <div class="messages-item" 
                :class="{'messages-item-hover': hoverIndex === index}"
                @mouseover="hoverIndex = index"
                @mouseleave="hoverIndex = -1"
                @click="curMessage=message">
              <span class="message-time">{{message.time}}</span>
              <span class="message-title">{{message.title | shortTitle}}</span>
              <span class="message-status">{{message.status}}</span>
            </div>
          </template>
          <Page :current="current" :total="16" @pageChange="pageChange" />
        </div>
        <div class="message-content">
          <div class="message-content-title">
            <span>{{curMessage.title}}</span>
            <span class="message-time">{{curMessage.time}}</span>
          </div>
          <p>{{curMessage.content}}</p>
        </div>
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
import Page from './page';
import { Card } from 'iview';
export default {
  data () {
    return {
      hoverIndex: -1,
      current: 1,
      messages: [
        {
          time: '刚刚',
          title: '功能暂停功能暂停功能暂停',
          status: '未读',
          content: '大奖赛的卡就大家打的卡就大家打的卡就大家打的卡就的的卡就大家打的卡就的卡就大家打的卡就的卡就大家打的卡就的卡就大家的卡就大家打的卡就的卡就大家打的卡就的卡就大家打的卡就的卡就大家打的卡就打的卡就的卡就大家打的卡就的卡就大家打的卡就的卡就大家打的卡就的卡就大家打的卡就的卡就大家打的卡就卡就大家打的卡就的卡就大家打的卡就的卡就大家打的卡就的卡就大家打的卡就的卡就大家打的卡就大家打的卡就大家打的卡就大家打架啊打开撒娇的话卡死'
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
      ],
      curMessage: {}
    };
  },
  components: {
    myCard,
    Card,
    Page
  },
  filters: {
    shortTitle (value) {
      return value.length > 14 ? value.slice(0, 14) + '...' : value;
    }
  },
  methods: {
    pageChange (newPage) {
      console.log(newPage);
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

.messages-wrapper {
  display: flex;
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
  margin: 0 10px;
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

.message-content {
  width: 359px;
  height: 209px;
  border-left: 1px solid #f2f2f2;
  padding: 0 20px;
  overflow: auto;
}

.message-content-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.message-content-title>:first-child {
  font-weight: bold;
}
</style>
