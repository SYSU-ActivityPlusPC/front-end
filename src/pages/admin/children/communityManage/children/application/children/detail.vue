<template>
<div class="detail-wrapper">
  <div class="nextAndPre">
    <a href="javascript:void(0)" :class="{'disable-link': index === 0}"  @click="lastUser">上一条</a>
    <a href="javascript:void(0)" :class="{'disable-link': index === usersList.length - 1}"  class="next" @click="nextUser">下一条</a>
  </div>
  <div class="table">
    <div class="row">
      <div class="label">组织名称</div>
      <div class="content">{{pcuser.name}}</div>
    </div>
    <div class="row">
      <div class="label">申请时间</div>
      <div class="content">{{pcuser.registerTime}}</div>
    </div>
    <div class="row">
      <div class="label">联系邮箱</div>
      <div class="content">{{pcuser.email}}</div>
    </div>
    <div class="row logo">
      <div class="label">组织logo</div>
      <div class="content">
        <img style="max-height: 100%" :src="$root.imgBase + pcuser.logo" alt="加载图片失败">
      </div>
    </div>
    <div class="row proof">
      <div class="label">证明材料</div>
      <div class="content">
        <img style="max-height: 100%" :src="$root.imgBase + pcuser.evidence" alt="加载图片失败">
      </div>
    </div>
    <div class="row">
      <div class="label">备注信息</div>
      <div class="content">{{pcuser.info}}</div>
    </div>
  </div>
  <div class="button-group">
    <a class="a" href="javascript:void(0)" @click="reject=true">拒绝</a>
    <MyButton :width="140" class="button" @click="allowUser">通过注册</MyButton>
  </div>
  <div class="reject-info-area" v-if="reject">
    <textarea class="reject-info" placeholder="请输入拒绝审核原因" v-model="refuseInfo" />
    <my-button :width="140" style="margin-left: 100px;" @click="reject=false">取消</my-button>
    <my-button :width="140" style="margin-left: 100px;" @click="rejectUser">确定</my-button>
  </div>
</div>  
</template>

<script>
import MyButton from '@/components/button';
export default {
  async created () {
    const params = this.$route.params;
    this.usersList = params.pcUsersList || [];
    const { data } = await this.$http.get(`/pcusers/${params.id}`, {
      headers: {'Authorization': this.$root.token}
    });
    this.pcuser = Object.assign({}, data, {id: params.id});
    this.index = this.usersList.findIndex((item) => item.id.toString() === params.id.toString());
  },
  data () {
    return {
      pcuser: {},
      refuseInfo: '',
      reject: false,
      index: -1,
      usersList: []
    };
  },
  components: {
    MyButton
  },
  methods: {
    async allowUser () {
      await this.$http.put(`/pcusers?id=${this.pcuser.id}&verify=1`, null, {
        headers: {'Authorization': this.$root.token}
      });
      alert('审核通过！');
    },
    async rejectUser () {
      await this.$http.put(`/pcusers?id=${this.pcuser.id}&verify=1`, {
        refuseInfo: this.refuseInfo
      }, {
        headers: {'Authorization': this.$root.token}
      });
      alert('已拒绝！');
    },
    lastUser () {
      if (this.index === 0) return;
      const item = this.usersList[this.index - 1];
      this.$router.push(`/admin/community/application/detail/${item.id}`);
    },
    nextUser () {
      if (this.index === this.usersList.length) return;
      const item = this.usersList[this.index + 1];
      this.$router.push(`/admin/community/application/detail/${item.id}`);
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.path.indexOf('/admin/community/application/detail') !== -1) {
      to.params.pcUsersList = this.usersList;
    }
    next();
  }
};
</script>

<style scoped>
.detail-wrapper {
  width: 55.344%;
  height: 100%;
}
.table {
  border: 1px solid #cccccc;
  border-bottom: transparent;
}
.label {
  border-bottom: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.row {
  position: relative;
  display: flex;
  min-height: 35px;
}
.content {
  flex: 1;
  border-bottom: 1px solid #cccccc;
  padding: 10px;
}
.logo {
  height: 100px;
}
.proof {
  height: 180px;
}

.nextAndPre {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.417%;
}
.next {
  margin-left: 40px;
}
.button-group {
  margin-top: 1.417%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.button {
  margin-left: 40px;
}
.a {
  color: #f91c6f;
}

.reject-info-area {
  position: fixed;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.reject-info {
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #808080;
}

.reject-info:focus {
  border: 1px solid #57a3f3;
}

.disable-link {
  pointer-events: none;
  color: #808080;
}

</style>
