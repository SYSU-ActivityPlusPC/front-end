<template>
<div class="box">
  <div class="left-box">
    <template v-for="(item, index) in users">
      <ListItem class="list-item" :key="index" @click="$router.push(`/admin/community/detail/${item.id}`)">
        <Avatar :avatar="$root.imgBase + item.logo" :name="item.name" slot="left" />
        <span class="time" slot="right">{{item.register_time}}注册</span>
      </ListItem>
    </template>
  </div>
  <div class="right-box">
    <!--SmallCard class="small-card-1" backgroundColor="#5074d7" @click="$router.push('/admin/community/notice')">
      <img :src="notice" alt="通知社团" name="icon" />
      通知社团
    </SmallCard-->
    <SmallCard class="small-card-2" backgroundColor="#28bf96" @click="$router.push('/admin/community/application')">
      <img :src="application" alt="注册申请" name="icon" />
      注册申请
    </SmallCard>
  </div>
</div>
</template>

<script>
import notice from '@/assets/notice';
import application from '@/assets/application';
import Avatar from '@/components/avatar';
import SmallCard from '@/components/smallCard';
import ListItem from '@/components/listItem';

export default {
  components: {
    Avatar,
    SmallCard,
    ListItem
  },
  data () {
    return {
      notice,
      application,
      users: []
    };
  },
  async created () {
    await this.getData();
  },
  methods: {
    async getData () {
      const data1 = await this.$http.get('/pcusers?type=1', {
        headers: {'Authorization': this.$root.token}
      });
      if (typeof data1.data === 'object') this.users.push(...data1.data.content);
      const data2 = await this.$http.get('/pcusers?type=0', {
        headers: {'Authorization': this.$root.token}
      });
      if (typeof data2.data === 'object') this.users.push(...data2.data.content);
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.path === '/admin/community/application') {
      const needVerifyList = this.users.filter(user => user.verified === 0);
      to.params.pcUsersList = needVerifyList;
    }
    next();
  }
};
</script>

<style scoped>
.box {
  display: flex;
}
.left-box {
  width: 51.72%;
}

.time {
  color: #666666;
}

.right-box {
  flex: 1;
  margin-left: 6.034%;
  display: flex;
}


.small-card-2 {
  margin-left: 50px;
}

.list-item {
  margin-bottom: 2%
}
</style>
