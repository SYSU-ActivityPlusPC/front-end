<template>
<div class="wrapper">
  <div class="card-wrapper">
    <BigCard style="margin: 0 48px 0 0; display: inline-block;">
      <span slot="text">数据管理</span>
      <img slot="image" alt="数据管理" :src="data" />
    </BigCard>
    <BigCard style="display: inline-block;">
      <span slot="text">发布活动</span>
      <img slot="image" alt="发布活动" :src="publish"/>
    </BigCard>
    <br/>
    <BigCard style="display: inline-block; margin: 18px 0 0 0;" @click="$router.push('/admin/community')">
      <span slot="text">社团管理</span>
      <img slot="image" alt="社团管理" :src="manage" />
    </BigCard>
  </div>
</div>  
</template>

<script>
import data from '@/assets/data';
import publish from '@/assets/publish';
import manage from '@/assets/manage';
import { BigCard } from '@/components';
export default {
  data () {
    return {
      data,
      publish,
      manage
    };
  },
  components: {
    BigCard
  }
};
</script>

<style scoped>
.wrapper {
  padding: 1.764% 0 10px 0;
  height: 100%;
  display: flex;
  justify-content: center;
}
.card-wrapper {
  width: 700px;
}
</style>
