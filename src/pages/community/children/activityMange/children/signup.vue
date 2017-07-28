<template>
<div class="signup-wrapper">
  <div>
    <div>序号</div>
    <div>姓名</div>
    <div>性别</div>
    <div>学号</div>
    <div>学院</div>
    <div>联系电话</div>
    <div>操作</div>
  </div>
  <template v-for="(item, index) in mock">
    <div :key="index">
      <div>{{index}}</div>
      <div>{{item.name}}</div>
      <div>{{item.gender}}</div>
      <div>{{item.sid}}</div>
      <div>{{item.college}}</div>
      <div>{{item.phone}}</div>
      <a href="javascript:void(0)">删除</a>
    </div>   
  </template>
</div>  
</template>

<script>
export default {
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
    }
  }
};
</script>

<style scoped>
.signup-wrapper {
  width: 68.965%;
}  
</style>
