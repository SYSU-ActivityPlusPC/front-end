<template>
<div class="wrapper">
  <div class="warn">
    <img class="warn-icon" src="../../../assets/warning.png" />
    <div class="warn-text">
      <span class="warn-text-1">你当前为游客状态, 只有发布活动的权限</span>
      <span class="warn-text-2">发布活动后两天内审核结果将以邮件通知你，请及时查看邮箱<br />感谢你的支持！</span>
    </div>
  </div>
  <BigCard @click="$router.push('/tourist/publish')" style="margin: 20px 0 0 56px;">
    <img src="../../../assets/publish.png" alt='发布活动' slot="image"/>
    <span slot="text">发布活动</span>
  </BigCard>
</div>  
</template>

<script>
import BigCard from '@/components/bigCard';

export default {
  components: {
    BigCard
  },
  methods: {
  },
  mounted () {
  }
};
</script>

<style scoped>
.wrapper {
  padding: 2.647% 7.32% 20px 7.32%;
  height: 100%;
  width: 100%;
}
.warn {
  display: flex;
  justify-content: flex-start;
}
.warn-icon {
  width: 40px;
  height: 40px;
}
.warn-text {
  margin-left: 16px;
}
.warn-text-1 {
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #5074d7;
}

.warn-text-2 {
  font-size: 16px;
}
.card-img {
  height: 158px;
  width: 288px;
}
.card-text {
  display: block;
  font-size: 16px;
  color: #5074d7;
  margin: 10px;
  text-align: center;
}
</style>
