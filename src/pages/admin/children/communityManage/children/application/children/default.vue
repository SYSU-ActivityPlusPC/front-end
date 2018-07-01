<template>
<div class="application-wrapper">
  <div class="row-1">共{{users.length}}个</div>
  <template v-for="(item, index) in users">
    <div class="list-wrapper" :key="index">
      <Status :status="getStatus(item.verified)" />
      <ListItem class="list-item" @click="$router.push(`/admin/community/application/detail/${item.id}`)">
        <Avatar slot="left" :avatar="$root.imgBase + item.logo" :name="item.name" />
        <span slot="right" class="time">{{item.register_time}}申请</span>
      </ListItem>
    </div>
  </template>
</div>  
</template>

<script>
import Status from '@/components/status';
import Avatar from '@/components/avatar';
import ListItem from '@/components/listItem';
export default {
  created () {
    this.users = this.$route.params.pcUsersList || [];
  },
  data () {
    return {
      users: []
    };
  },
  components: {
    ListItem,
    Avatar,
    Status
  },
  methods: {
    getStatus (status) {
      return status === 1 ? 'success' : status === 2 ? 'end' : 'reviewing';
    }
  },
  beforeRouteLeave (to, from, next) {
    to.params.pcUsersList = this.users;
    next();
  }
};
</script>

<style scoped>
.application-wrapper {
  width: 55.344%;  
}
.row-1 {
  text-align: right;
  color: #666666;
  margin-bottom: 5px;
}

.list-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.list-item {
  flex: 1;
  margin-bottom: 1.132%;
}

.time {
  color: #666666;
}
</style>
