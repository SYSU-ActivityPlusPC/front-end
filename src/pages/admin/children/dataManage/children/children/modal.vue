<template>
<Modal scrollable v-model="privateOpen" :transition-names="['fade', 'fade']" :width="width">
  <div slot="header" class="header">三月义卖</div>
  <div class="content">
    <div class="content-item">
      <span class="label">活动时间:</span>
      <p class="value">{{startTime}}-{{endTime}}</p>
    </div>
    <div class="content-item">
      <span class="label">活动地点:</span>
      <p class="value">{{data.location}}</p>
    </div>
    <div class="content-item">
      <span class="label">活动对象:</span>
      <p class="value">{{data.enrollCondition}}</p>
    </div>
    <div class="content-item">
      <span class="label">活动简介:</span>
      <p class="value">{{data.introduction || '略'}}</p>
    </div>
    <div class="content-item">
      <span class="label">主办方:</span>
      <p class="value">{{data.sponsor}}</p>
    </div>
    <div class="content-item">
      <span class="label">报名方式:</span>
      <p class="value">{{data.enrollWay || '略'}}</p>
    </div>
    <div class="content-item">
      <span class="label">报名截止日期:</span>
      <p class="value">{{data.enrollEndTime}}</p>
    </div>
    <div class="content-item">
      <span class="label">奖励:</span>
      <p class="value">{{data.reward}}</p>
    </div>
    <div class="content-item">
      <span class="label">参加要求:</span>
      <p class="value">{{data.requirement}}</p>
    </div>
    <div class="content-item">
      <span class="label">活动详情:</span>
      <p class="value">{{data.detail}}</p>
    </div>
  </div>
  <div slot="footer" class="footer">
    <MyButton :width="140" @click="edit">编辑活动信息</MyButton>
  </div>
</Modal>  
</template>

<script>
import Modal from 'iview/src/components/modal';
import MyButton from '@/components/button';
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false
    },
    data: {
      type: Object,
      required: false
    }
  },
  components: {
    Modal,
    MyButton
  },
  data () {
    return {
      privateOpen: false,
      width: 520
    };
  },
  created () {
    const width = document.getElementsByTagName('html')[0].clientWidth;
    this.width = width * 0.3824;
  },
  watch: {
    open (val) {
      this.privateOpen = val;
    },
    privateOpen (val) {
      if (!val) {
        this.$emit('close');
      }
    }
  },
  methods: {
    async edit () {
      const {data} = await this.$http.get('/act/' + this.data.id, {
        headers: {'Authorization': this.$root.token}
      });
      data.time = [new Date(data.startTime), new Date(data.endTime)];
      data.pubTime = [new Date(data.pubStartTime), new Date(data.pubEndTime)];
      let campus = [];
      for (let i = 0; i < 4; i++) {
        const index = Math.pow(2, i);
        if (data.campus & index) campus.push(index);
      }
      data.campus = campus;
      this.$emit('edit', data);
    }
  },
  computed: {
    startTime () {
      return new Date(this.data.startTime).toLocaleDateString();
    },
    endTime () {
      return new Date(this.data.endTime).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.footer,
.header,
.content-item {
  display: flex;
  justify-content: center;
}

.header {
  align-items: center;
  color: #5074d7;
  padding: 20px 14px 0 14px;
  font-size: 16px;
}

.content {
  padding: 0 15.3846%;
}

.content-item {
  justify-content: flex-start;
  margin-bottom: 2.8846%;
}
.label {
  font-weight: bold;
  margin-right: 10px;
}
.value {
  flex: 1;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
