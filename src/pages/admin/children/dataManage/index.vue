<template>
<div class="data-wrapper">
  <BreadcrumbNav :config="config" />
  <div class="tabs">
    <div class="tab" :class="{'tab-select': curTab === '活动管理'}" @click="toggleCurTab">活动管理</div>
    <div class="tab" :class="{'tab-select': curTab === '活动审核'}" @click="toggleCurTab">活动审核</div>
  </div>
  <div class="router-view">
    <PublishForm v-if="editing" authority="admin" :editAct="editing" :form="form" @endEdit="form = null; editing = false;"></PublishForm>
    <Manage :actList="actList" v-show="curTab === '活动管理' && !editing" @clickItem="clickItem"/>
    <Review :actList="actList" v-show="curTab === '活动审核' && !editing" @clickItem="clickItem"/>
    <Modal :data="curItem" :open="open" @close="open=false" @edit="editAct"/>
  </div>
</div>
</template>

<script>
import BreadcrumbNav from '@/components/breadcrumbNav';
import { setConfig } from '@/utils';
import Manage from './children/activityManage';
import Review from './children/activityReview';
import PublishForm from '@/components/publishForm';
import Modal from './children/modal';

export default {
  async created () {
    this.config = setConfig.bind(this)();
    let last = false;
    let page = 0;
    while (!last) {
      const {data} = await this.$http.get('/act?page=' + page);
      this.actList = this.actList.concat(data.content);
      last = data.last;
      page++;
    }
  },
  data () {
    return {
      config: [],
      curTab: '活动管理',
      editing: false,
      form: null,
      actList: [],
      curItem: {},
      open: false
    };
  },
  components: {
    BreadcrumbNav,
    Manage,
    Review,
    PublishForm,
    Modal
  },
  methods: {
    toggleCurTab () {
      this.curTab = this.curTab === '活动管理' ? '活动审核' : '活动管理';
      this.editing = false;
    },
    editAct (data) {
      this.form = data;
      this.editing = true;
      this.open = false;
    },
    clickItem (data) {
      this.open = true;
      this.curItem = data;
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
