<template>
<div class="detail-wrapper">
  <div class="item">
    <label class="label">社团名称</label>
    <span>{{info.name}}</span>
  </div>
  <div class="item">
    <label class="label">账号</label>
    <span>{{info.account}}</span>
  </div>
  <div class="item">
    <label class="label">密码</label>
    <span>{{info.password}}</span>
  </div>
  <div class="item">
    <label class="label">注册时间</label>
    <span>{{info.registrationTime}}</span>
  </div>
  <div class="item">
    <label class="label">证明材料</label>
    <div>
      <p>活动1</p>
      <p>活动2</p>
      <p>活动3</p>
      <p>活动1</p>
      <p>活动2</p>
      <p>活动3</p>
      <p>活动1</p>
      <p>活动2</p>
      <p>活动3</p>
    </div>
  </div>
  <div class="item">
    <label class="label">已发布活动</label>
    <div>
      <p>活动1</p>
      <p>活动2</p>
      <p>活动3</p>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  data () {
    return {
      info: {}
    };
  },
  async created () {
    const { id } = this.$route.params;
    await this.getInfo(id);
  },
  methods: {
    async getInfo (id) {
      this.info = (await this.$http.get(`/club/${id}`)).data;
    }
  }
};
</script>

<style scoped>
.detail-wrapper {
  height: 100%;
}

.item {
  display: flex;
  margin: 10px 0;
}

.label {
  width: 110px;
  text-align: right;
  margin-right: 40px;
}

p, span {
  color: #666666;
}
</style>
