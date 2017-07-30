<template>
<div class="default-wrapper">
  <template v-for="(item, index) in mock">
    <div class="list-wrapper" :key="index">
      <Status :status="getStatus(item.status)" />
      <ListItem class="list-item">
        <div slot="left" class="left-wrapper">
          <span class="name">{{item.name}}</span>
          <span class="time">{{item.time}}发布</span>
        </div>
        <div slot="right" class="right-wrapper">
          <span class="list-right-text">浏览数</span>
          <span class="view">{{item.view}}</span>
        </div>
      </ListItem>
      <SmallCard class="small-card">
        <div class="card-content">
          <span class="card-num" v-if="item.num">{{item.num}}</span>
          <span class="card-num" style="font-weight: bold;" v-else>—</span>
          <span class="card-text">报名数</span>
        </div>
      </SmallCard>
    </div>
  </template>
</div>  
</template>

<script>
import ListItem from '@/components/listItem';
import Status from '@/components/status';
import SmallCard from '@/components/smallCard';
export default {
  methods: {
    getStatus (status) {
      switch (status) {
        case 0: return 'reviewing';
        case 1: return 'continuting';
        case 2: return 'end';
      }
    }
  },
  components: {
    ListItem,
    Status,
    SmallCard
  },
  data () {
    return {
      mock: [
        {
          status: 0,
          name: '三月义卖',
          time: '2017.3.3',
          view: 77,
          num: 0
        },
        {
          status: 1,
          name: '三月义卖',
          time: '2017.3.3',
          view: 77,
          num: 177
        },
        {
          status: 2,
          name: '三月义卖',
          time: '2017.3.3',
          view: 77,
          num: 277
        }
      ]
    };
  }
};
</script>

<style scoped>
.default-wrapper {
  width: 68.965%;
}

.list-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2.5%;
}

.list-item {
  width: 75% !important;
}

.small-card {
  height: 68px !important;
  width: 68px !important;
  box-shadow: 0 0 0 white !important;
  border: 1px solid #5074d7;
  border-radius: 8px !important;
  cursor: pointer;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-text,
.list-right-text {
  color: #666666;
  font-size: 12px;
}

.list-right-text {
  font-size: 14px;
  margin-right: 5px;
}

.card-num {
  color: #5074d7;
  font-size: 20px;
}

.left-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.time {
  font-size: 12px;
  color: #999999;
  margin-top: 5px;
}

.view {
  font-size: 20px;
}

.name {
  font-size: 16px;
}
</style>
