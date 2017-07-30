<template>
<div class="detail-wrapper">
  <div class="nextAndPre">
    <a>上一条</a>
    <a class="next">下一条</a>
  </div>
  <div class="table">
    <div class="row">
      <div class="label">组织名称</div>
      <div class="content"></div>
    </div>
    <div class="row">
      <div class="label">申请时间</div>
      <div class="content"></div>
    </div>
    <div class="row">
      <div class="label">联系邮箱</div>
      <div class="content"></div>
    </div>
    <div class="row logo">
      <div class="label">组织logo</div>
      <div class="content"></div>
    </div>
    <div class="row proof">
      <div class="label">证明材料</div>
      <div class="content"></div>
    </div>
    <div class="row">
      <div class="label">备注信息</div>
      <div class="content"></div>
    </div>
  </div>
  <div class="button-group">
    <a class="a">拒绝</a>
    <MyButton :width="140" class="button">通过注册</MyButton>
  </div>
</div>  
</template>

<script>
import MyButton from '@/components/button';
export default {
  components: {
    MyButton
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
</style>
