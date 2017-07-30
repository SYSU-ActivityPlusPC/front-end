<template>
<div class="signup-wrapper">
  <div class="button-group">
    <MyButton class="end-button">结束报名</MyButton>
    <MyButton>导出名单</MyButton>
  </div>
  <div class="table">
    <div class="row">
      <div class="col col-name col-width-70">序号</div>
      <div class="col col-name col-flex-1">姓名</div>
      <div class="col col-name col-width-70">性别</div>
      <div class="col col-name col-width-100">学号</div>
      <div class="col col-name col-flex-1">学院</div>
      <div class="col col-name col-width-150">联系电话</div>
      <div class="col col-name col-width-70">操作</div>
    </div>
    <template v-for="(item, index) in mock">
      <div :key="index" class="row" :class="{'bg': index % 2 === 0}">
        <div class="col col-width-70">{{index}}</div>
        <div class="col col-flex-1">{{item.name}}</div>
        <div class="col col-width-70">{{item.gender}}</div>
        <div class="col col-width-100">{{item.sid}}</div>
        <div class="col col-flex-1">{{item.college}}</div>
        <div class="col col-width-150">{{item.phone}}</div>
        <a href="javascript:void(0)" class="col col-width-70 operator">删除</a>
      </div>   
    </template>
  </div>
</div>  
</template>

<script>
import MyButton from '@/components/button';
export default {
  components: {
    MyButton
  },
  data () {
    return {
      mock: [
        {
          name: '张三',
          gender: '男',
          sid: '15331439',
          college: '药学院',
          phone: 13719177292
        },
        {
          name: '张三',
          gender: '男',
          sid: '15331439',
          college: '数据科学与计算机学院',
          phone: 13719177292
        },
        {
          name: '张三',
          gender: '男',
          sid: '15331439',
          college: '数据科学与计算机学院',
          phone: 13719177292
        }
      ]
    };
  }
};
</script>

<style scoped>
.signup-wrapper {
  width: 68.965%;
}

.table {
  border: 1px solid #cccccc;
  border-bottom: transparent;
  border-right: transparent;
}

.row {
  display: flex;
}

.col {
  border: 1px solid #cccccc;
  border-left: transparent;
  border-top: transparent;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.col-flex-1 {
  flex: 1
}

.col-width-70 {
  width: 70px;
}

.col-width-100 {
  width: 100px;
}

.col-width-150 {
  width: 150px;
}

.operator {
  color: #f91c6f;
}

.col-name {
  color: #5074d7;
}

.bg {
  background-color: #f2f2f2;
}

.button-group {
  text-align: right;
  margin-bottom: 2.25%;
}

.end-button {
  margin-right: 3.75%
}
</style>
