<template>
<div>
  <BreadcrumbNav :config="config" />
  <div class="tabs">
    <div class="tab" :class="{'tab-select': curTab === '活动管理'}" @click="toggleCurTab">活动管理</div>
    <div class="tab" :class="{'tab-select': curTab === '活动审核'}" @click="toggleCurTab">活动审核</div>
  </div>
  <div class="router-view">
    <PublishForm v-if="editing" authority="admin" :editAct="editing" :form="form"
                 @endEdit="endEdit" />
    <Manage :actList="verifiedList"
            v-show="curTab === '活动管理' && !editing" @clickItem="clickItem"
            @generateCollection="generateCollection"/>
    <Review :actList="unverifiedList"
            v-show="curTab === '活动审核' && !editing" @clickItem="clickItem"
            @verify="verify"/>
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
    let pageNum = 1;
    let stat = 200;
    try {
      while (stat === 200) {
        const {data, status} = await this.$http.get('/act?page=' + pageNum + '&verify=1', {
          headers: {'Authorization': this.$root.token}
        });
        stat = status;
        if (stat !== 200) break;
        this.verifiedList = this.verifiedList.concat(data.content);
        pageNum++;
      }
      stat = 200;
      pageNum = 1;
      while (stat === 200) {
        const {data, status} = await this.$http.get('/act?page=' + pageNum + '&verify=0', {
          headers: {'Authorization': this.$root.token}
        });
        stat = status;
        if (stat !== 200) break;
        this.unverifiedList = this.unverifiedList.concat(data.content);
        pageNum++;
      }
    } catch (err) {
      console.log(err);
      return;
    }
  },
  data () {
    return {
      config: [],
      curTab: '活动管理',
      editing: false,
      form: null,
      verifiedList: [],
      unverifiedList: [],
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
    },
    generateCollection (id) {
      this.selectCampus = id;
      this.$router.push('/admin/data/collection?schoolID=' + id);
    },
    verify (item) {
      this.verifiedList.unshift(item);
    },
    endEdit (form) {
      if (form) {
        const curItem = this.curItem;
        for (let key of Object.keys(curItem)) {
          curItem[key] = form[key];
        }
      }
      this.form = null;
      this.editing = false;
      this.curItem = {};
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.path === '/admin/data/collection') {
      const actsOfCampus = this.verifiedList.filter(val => (val.campus & Math.pow(2, this.selectCampus)) !== 0);
      const temp = [];
      for (let i = 0; i < 7; i++) {
        const acts = actsOfCampus.filter(val => val.type === i);
        temp.push(acts);
      }
      to.params.acts = temp;
    }
    next();
  }
};
</script>

<style scoped>
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