<template>
<div class="form-wrapper">
  <div class="left-wrapper">
    <div class="tab tab-must">必填</div>
    <div class="tab tab-select">选填</div>
    <div class="fill"></div>
  </div>
  <div class="right-wrapper">
    <iForm :label-width="90">
      <FormItem label="活动名称">
        <iInput size="large" class="input-size" placeholder="请输入活动名称"/>
      </FormItem>
      <FormItem label="时间">
        <DatePicker type="datetimerange" placeholder="选择日期和时间" style="width: 300px"></DatePicker>
      </FormItem>
      <FormItem label="活动地点">
        <iInput size="large" class="input-size" placeholder="请输入活动地点"/>
      </FormItem>
      <FormItem label="校区">
        <iSelect class="select">
          <iOption v-for="area in areas" :value="area" :key="area">{{area}}</iOption>
        </iSelect>
      </FormItem>
      <FormItem label="报名条件">
        <iInput size="large" class="input-size" placeholder="例如: 中山大学全体在校学生"/>
      </FormItem>
      <FormItem label="主办方">
        <iInput size="large" class="input-size" placeholder="请输入活动主办方"/>
      </FormItem>
      <FormItem label="活动类型">
        <iSelect class="select">
          <iOption v-for="type in types" :value="type" :key="type">{{type}}</iOption>
        </iSelect>
      </FormItem>
      <FormItem label="宣传时间">
        <DatePicker type="datetimerange" placeholder="选择日期和时间" style="width: 300px"></DatePicker>
      </FormItem>
      <FormItem label="活动详情">
        <iInput class="input-size" type="textarea" :rows="4" placeholder="请输入活动详情，让大家更了解活动吧!"/>
      </FormItem>
    </iForm>
  </div>
</div>
</template>

<script>
import { Form, FormItem, Input, Select, Option, DatePicker } from 'iview';
export default {
  components: {
    iInput: Input,
    iForm: Form,
    FormItem,
    iSelect: Select,
    iOption: Option,
    DatePicker
  },
  data () {
    return {
      types: ['公益', '体育', '比赛', '讲座'],
      areas: ['东校区', '南校区', '珠海校区', '北校区']
    };
  }
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  justify-content: flex-start;
}

.left-wrapper {
  width: 60px;
  display: flex;
  flex-direction: column;
}

.tab {
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-left: 2px solid #2d8cf0;
  box-sizing: border-box;
}
.tab-must {
  border-top: 2px solid #2d8cf0;
}
.tab-select {
  border-bottom: 2px solid #2d8cf0;
}
.fill {
  flex: 1;
  border-right: 2px solid #2d8cf0;
}

.right-wrapper {
  width: 700px;
  border: 2px solid #2d8cf0;
  border-left: transparent;
  border-radius: 3px;
  padding: 20px 0;
}
.input-size {
  width: 300px;
}
.select {
  width: 100px;
}
</style>
