<template>
<div class="detail-wrapper">
  <div class="button-wrapper">
    <a href="javascript:void(0)">修改活动信息</a>
  </div>
  <div class="body">
    <div class="header">三月义卖</div>
    <div class="content">
      <div class="content-item">
        <span class="label">活动时间:</span>
        <p class="value">7.9-7.12</p>
      </div>
      <div class="content-item">
        <span class="label">活动地点:</span>
        <p class="value">xxxx</p>
      </div>
      <div class="content-item">
        <span class="label">活动对象:</span>
        <p class="value">xxxxx</p>
      </div>
      <div class="content-item">
        <span class="label">活动简介:</span>
        <p class="value">xxxx</p>
      </div>
      <div class="content-item">
        <span class="label">主办方:</span>
        <p class="value">xxxx</p>
      </div>
      <div class="content-item">
        <span class="label">报名方式:</span>
        <p class="value">xxxx</p>
      </div>
      <div class="content-item">
        <span class="label">报名截止日期:</span>
        <p class="value">xxxx</p>
      </div>
      <div class="content-item">
        <span class="label">奖励:</span>
        <p class="value">xxxxx</p>
      </div>
      <div class="content-item">
        <span class="label">参加要求:</span>
        <p class="value">xxxxx</p>
      </div>
      <div class="content-item">
        <span class="label">活动详情:</span>
        <p class="value">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

};
</script>

<style scoped>
.body {
  border: 2px solid #5074d7;
  border-radius: 8px;
}

.header,
.content-item {
  display: flex;
  justify-content: center;
}

.header {
  align-items: center;
  color: #5074d7;
  padding: 20px 14px 0 14px;
  font-size: 16px;
}

.content {
  padding: 0 8.33333%;
}

.content-item {
  justify-content: flex-start;
  margin-bottom: 2.8846%;
}
.label {
  font-weight: bold;
  margin-right: 10px;
}
.value {
  flex: 1;
  word-wrap: break-word;
  word-break: break-all;
}

.detail-wrapper {
  width: 56.6%
}
.button-wrapper {
  text-align: right;
  margin-bottom: 0.8333%;
}
</style>
