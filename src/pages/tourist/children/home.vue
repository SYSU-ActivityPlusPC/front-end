<template>
<div class="wrapper">
  <div class="warn">
    <img class="warn-icon" src="../../../assets/warning.png" />
    <div class="warn-text">
      <span class="warn-text-1">你当前为游客状态, 只有发布活动的权限</span>
      <span class="warn-text-2">发布活动后两天内审核结果将以邮件通知你，请及时查看邮箱<br />感谢你的支持！</span>
    </div>
  </div>
  <Card :style="cardStyle">
    <img src="../../../assets/publish.png" alt='发布活动' class="card-img"/>
    <span class="card-text">发布活动</span>
  </Card>
</div>  
</template>

<script>
import { Card } from 'iview';
export default {
  data () {
    return {
      cardStyle: `margin: 20px 0 0 56px;
                  width: 320px;
                  height: 240px;
                  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);
      `
    };
  },
  components: {
    Card
  }
};
</script>

<style scoped>
.wrapper {
  padding: 20px 100px;
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
