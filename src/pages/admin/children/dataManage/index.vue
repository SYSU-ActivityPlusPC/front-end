<template>
<div class="data-wrapper">
  <BreadcrumbNav :config="config" />
  <div class="tabs">
    <div class="tab" :class="{'tab-select': curTab === '活动管理'}" @click="toggleCurTab">活动管理</div>
    <div class="tab" :class="{'tab-select': curTab === '活动审核'}" @click="toggleCurTab">活动审核</div>
  </div>
  <div class="router-view">
    <Manage v-if ="curTab === '活动管理'" />
    <Review v-else />
  </div>
</div>
</template>

<script>
import BreadcrumbNav from '@/components/breadcrumbNav';
import { setConfig } from '@/utils';
import Manage from './children/activityManage';
import Review from './children/activityReview';

export default {
  data () {
    return {
      config: [],
      curTab: '活动管理'
    };
  },
  components: {
    BreadcrumbNav,
    Manage,
    Review
  },
  created () {
    this.config = setConfig.bind(this)();
  },
  methods: {
    toggleCurTab () {
      this.curTab = this.curTab === '活动管理' ? '活动审核' : '活动管理';
    }
  }
};
</script>

<style scoped>
.data-wrapper {
  padding: 2.647% 7.32% 10px 7.32%;
}

.tabs {
  width: 24.14%;
  height: 42px;
  margin: 2.069% 0;
  border: 1px solid #5074d7;
  display: flex;
}

.tab {
  width: 50%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #5074d7;
  cursor: pointer;
}

.tab-select {
  background-color: #5074d7;
  color: #f2f2f2;
}
.router-view {
  width: 56.6%;
}
</style>
