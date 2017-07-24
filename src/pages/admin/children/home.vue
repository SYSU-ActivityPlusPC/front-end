<template>
<div class="wrapper">
  <div class="card-wrapper">
    <Card style="margin: 0 48px 0 0; display: inline-block;">
      <span slot="text">数据管理</span>
      <img slot="image" alt="数据管理" src="../../../assets/data.png" />
    </Card>
    <Card style="display: inline-block;">
      <span slot="text">发布活动</span>
      <img slot="image" alt="发布活动" src="../../../assets/publish.png"/>
    </Card>
    <br/>
    <Card style="display: inline-block; margin: 18px 0 0 0;">
      <span slot="text">社团管理</span>
      <img slot="image" alt="社团管理" src="../../../assets/manage.png" />
    </Card>
  </div>
</div>  
</template>

<script>
import Card from '@/components/bigCard';
export default {
  components: {
    Card
  }
};
</script>

<style scoped>
.wrapper {
  padding: 84px 0 10px 0;
  height: 100%;
  display: flex;
  justify-content: center;
}
.card-wrapper {
  width: 700px;
}
</style>
