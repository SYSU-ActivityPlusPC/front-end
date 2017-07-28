<template>
<div>
  <div class="row-1">
    <img :src="warning" alt="警告" class="icon-warning" />
    如果不需要开启线上报名，请直接<a href="javascript:void(0)" class="strong">提交活动</a>
  </div>
  <div class="checkbox">
    <span class="color666666">请选择需要收集的信息</span>
    <CheckboxGroup class="checkbox-group">
      <Checkbox class="checkbox" label="姓名" />
      <Checkbox class="checkbox" label="手机号" />
      <Checkbox class="checkbox" label="邮箱" />
      <br />
      <Checkbox class="checkbox" label="院系" />
      <Checkbox class="checkbox" label="学号" />
    </CheckboxGroup>
  </div>
  <iButton type="ghost">添加其他报名信息</iButton>
</div>
</template>

<script>
import { Checkbox, CheckboxGroup, Button } from 'iview';
import warning from '@/assets/warning-1.png';
export default {
  components: {
    Checkbox,
    CheckboxGroup,
    iButton: Button
  },
  data () {
    return {
      warning
    };
  }
};
</script>

<style scoped>
.icon-warning {
  height: 32px;
  width: 32px;
  margin-right: 0.94%;
}

.row-1 {
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 1.132%;
}

.strong {
  color: #5074d7;
  font-size: inherit;
}

.color666666 {
  color: #666666;
}

.checkbox-group {
  margin-top: 1.132%;
}

.checkbox {
  margin-bottom: 1.132%;
  margin-right: 5%;
}
</style>
