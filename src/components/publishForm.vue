<template>
<div class="form-wrapper">
  <div class="left-wrapper">
    <div class="tab tab-must" :class="{'curTab': currentTab !== 'must'}" @click="currentTab='must'">必填</div>
    <div class="tab tab-select" :class="{'curTab': currentTab === 'must'}" @click="currentTab='select'">选填</div>
    <div class="fill"></div>
  </div>
  <div class="right-wrapper" v-show="currentTab === 'must'">
    <iForm :label-width="110">
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
      <FormItem label="邮箱">
        <iInput class="input-size" placeholder="活动审核结果将会发送到此邮箱!"/>
      </FormItem>
      <FormItem>
        <myButton width="200" class="submit">下一步</myButton>
      </FormItem>
    </iForm>
  </div>
  <div class="right-wrapper" v-show="currentTab === 'select'">
    <iForm :label-width="110">
      <FormItem label="活动方式">
        <iInput size="large" class="input-size" placeholder="例如：短信"/>
      </FormItem>
      <FormItem label="报名截止日期">
        <DatePicker type="datetime" placeholder="选择日期和时间" style="width: 300px"></DatePicker>
      </FormItem>
      <FormItem label="活动奖励">
        <iInput size="large" class="input-size" placeholder="例如：3个体育章"/>
      </FormItem>
      <FormItem label="活动简介">
        <iInput size="large" class="input-size" placeholder="请输入活动简介"/>
      </FormItem>
      <FormItem label="活动需求">
        <iInput size="large" class="input-size" placeholder="例如: 参与者身体健康，无重大疾病"/>
      </FormItem>
      <FormItem label="宣传图">
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <iButton type="ghost" style="width: 100px;" size="small">
            <Icon type="ios-cloud-upload-outline" :size="25" color="#2d8cf0"></Icon>
          </iButton>
        </Upload>
      </FormItem>
      <FormItem label="二维码">
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <iButton type="ghost" style="width: 100px;" size="small">
            <Icon type="ios-cloud-upload-outline" :size="25" color="#2d8cf0"></Icon>
          </iButton>
        </Upload>
      </FormItem>
      <FormItem>
        <myButton width="200" class="submit">下一步</myButton>
      </FormItem>
    </iForm>
  </div>
</div>
</template>

<script>
import { Form, FormItem, Input, Select, Option, DatePicker, Upload, Button, Icon } from 'iview';
import myButton from './button';
export default {
  components: {
    iInput: Input,
    iForm: Form,
    FormItem,
    iSelect: Select,
    iOption: Option,
    DatePicker,
    myButton,
    iButton: Button,
    Upload,
    Icon
  },
  data () {
    return {
      types: ['公益', '体育', '比赛', '讲座'],
      areas: ['东校区', '南校区', '珠海校区', '北校区'],
      currentTab: 'must'
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
  color: #2d8cf0;
  cursor: pointer;
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

.curTab {
  background-color: #2d8cf0;
  color: #f2f2f2;
}

.right-wrapper {
  width: 640px;
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
.submit {
  margin-left: 26px;
}
</style>
