<template>
<div class="wrapper">
  <div class="card-wrapper">
    <BigCard style="margin: 0 48px 0 0; display: inline-block;" @click="$router.push('/admin/data')">
      <span slot="text">数据管理</span>
      <img slot="image" alt="数据管理" src="http://okuww23ih.bkt.clouddn.com/data.png" />
    </BigCard>
    <BigCard style="display: inline-block;" @click="$router.push('/admin/publish')">
      <span slot="text">发布活动</span>
      <img slot="image" alt="发布活动" src="http://okuww23ih.bkt.clouddn.com/publish.png"/>
    </BigCard>
    <br/>
    <BigCard style="display: inline-block; margin: 18px 0 0 0;" @click="$router.push('/admin/community')">
      <span slot="text">社团管理</span>
      <img slot="image" alt="社团管理" src="http://okuww23ih.bkt.clouddn.com/manage.png" />
    </BigCard>
  </div>
</div>  
</template>

<script>
import BigCard from '@/components/bigCard';
export default {
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
