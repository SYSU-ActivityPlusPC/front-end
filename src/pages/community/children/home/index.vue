<template>
<div class="wrapper">
  <div class="messages">
    <div class="messages-firstRow">
      <div class="title">
        <span>系统消息</span>
        <span>2条未读</span>
      </div>
      <iButton type="text" style="padding: 0 5px 0 0;" :disabled="clickIndex === -1">
        <img src="../../../../assets/delete.png" alt="删除" class="delete"/>
      </iButton>
    </div>
    <Card :padding="0" style="padding: 8px 0;">
      <div class="messages-wrapper">
        <div class="messagesList">
          <template v-for="(message, index) in messages">
            <div class="messages-item" 
                :class="{'messages-item-hover': hoverIndex === index || clickIndex === index}"
                @mouseover="hoverIndex = index"
                @mouseleave="hoverIndex = -1"
                @click="clickMessageItem(index)">
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
    <BigCard style="display: inline-block;" @mouseover="floatingLayerShow = true" @mouseleave="floatingLayerShow = false">
      <transition enter-active-class="animated fadeInDown"
                  leave-active-class="animated fadeOutUp"
                  slot="floatingLayer"
      >
        <div class="floatingLayer" v-show="floatingLayerShow">
          <ul>
            <li class="li" id="li-1">1个活动审核中</li>
            <li class="li" id="li-2">2个活动进行中</li>
          </ul>
        </div>
      </transition>      
      <span slot="text" >发布活动</span>
      <img slot="image" alt="发布活动" src="../../../../assets/publish.png"/>
    </BigCard>
    <BigCard style="display: inline-block; margin-right: 2px;">
      <span slot="text">社团管理</span>
      <img slot="image" alt="社团管理" src="../../../../assets/manage.png" />
    </BigCard>
  </div>
</div>
</template>

<script>
import { BigCard } from '@/components';
import Page from './page';
import { Card, iButton } from 'iview';
export default {
  data () {
    return {
      hoverIndex: -1,
      clickIndex: -1,
      current: 1,
      floatingLayerShow: false,
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
    BigCard,
    Card,
    Page,
    iButton
  },
  filters: {
    shortTitle (value) {
      return value.length > 14 ? value.slice(0, 14) + '...' : value;
    }
  },
  methods: {
    pageChange (newPage) {
      console.log(newPage);
    },
    clickMessageItem (index) {
      this.clickIndex = index;
      this.curMessage = this.messages[index];
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding-top: 2.647%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.messages {
  width: 720px;
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
  padding: 28px 0 20px 0;
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

.floatingLayer {
  position: relative;
  height: 80px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.li {
  color: white;
}

#li-1::before {
  content: "\02022";
  color: #5074d7;
  font-size: 22px;
  margin-right: 5px;
}

#li-2::before {
  content: "\02022";
  color: rgb(136, 136, 136);
  font-size: 22px;
  margin-right: 5px;
}

.delete {
  height: 20px;
  width: 20px;
}

.messages-firstRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
</style>
