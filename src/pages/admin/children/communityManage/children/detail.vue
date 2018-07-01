<template>
<div class="detail-wrapper">
  <div class="item">
    <label class="label">社团名称</label>
    <span>{{info.name}}</span>
  </div>
  <div class="item">
    <label class="label">账号</label>
    <span>{{info.email}}</span>
  </div>
  <div class="item">
    <label class="label">注册时间</label>
    <span>{{info.registerTime}}</span>
  </div>
  <div class="item">
    <label class="label">组织logo</label>
    <div>
      <img style="max-width: 800px" :src="$root.imgBase + info.logo" alt="加载图片失败">
    </div>
  </div>
  <div class="item">
    <label class="label">证明材料</label>
    <div>
      <img style="max-width: 800px" :src="$root.imgBase + info.evidence" alt="加载图片失败">
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
      const { data } = await this.$http.get(`/pcusers/${id}`, {
        headers: {'Authorization': this.$root.token}
      });
      this.info = data;
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
