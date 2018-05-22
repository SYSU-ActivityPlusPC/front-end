<template>
<div class="selectForm-wrapper">
  <div class="row-1">
    <img :src="warning" alt="警告" class="icon-warning" />
    如果不需要开启线上报名，请直接<a href="javascript:void(0)" class="strong">提交活动</a>
  </div>
  <div class="checkbox">
    <span class="color666666">请选择需要收集的信息</span>
    <CheckboxGroup class="checkbox-group" v-model="values">
      <Checkbox class="checkbox" label="姓名" />
      <Checkbox class="checkbox" label="手机号" />
      <Checkbox class="checkbox" label="邮箱" />
      <br />
      <Checkbox class="checkbox" label="院系" />
      <Checkbox class="checkbox" label="学号" />
    </CheckboxGroup>
  </div>
  <div class="addMessageItem">
    <MyButton type="ghost" :width="180">
      <img :src="add" slot="icon" class="icon-add" alt="添加">
      添加其他报名信息
    </MyButton>
    <img :src="why" alt="问号" class="why" />
    <span>如果需要其他报名信息，请点击左边的按钮进行自定义添加</span>
  </div>
  <div class="setLimit">
    <iSwitch v-model="limit" size="small" />
    <span class="switch-label">开启人数报名限制</span>
    <div v-show="limit" class="input-limit-wrapper">
      最多<iInput class="input-limit" />人报名
    </div>
  </div>
  <MyButton type="ghost" :width="150">
    <img :src="eye" slot="icon" class="icon-eye" alt="添加">
    预览报名表
  </MyButton>
  <div class="button-group">
    <a href="javascript:void(0)" @click="pre">上一步</a>
    <MyButton :width="200" class="button-submit" @click="next">提交活动</MyButton>
  </div>
</div>
</template>

<script>
import Checkbox from 'iview/src/components/checkbox';
import iInput from 'iview/src/components/input';
import iSwitch from 'iview/src/components/switch';
import MyButton from './button';
import warning from '@/assets/warning-1';
import add from '@/assets/add';
import why from '@/assets/why';
import eye from '@/assets/eye';

export default {
  components: {
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    MyButton,
    iSwitch,
    iInput
  },
  props: ['form'],
  data () {
    return {
      warning,
      add,
      why,
      eye,
      limit: false,
      values: ['姓名', '手机号', '邮箱', '院系', '学号']
    };
  },
  methods: {
    pre () {
      this.$emit('pre');
    },
    async next () {
      const form = this.form;
      try {
        if (form.qrcode && typeof form.qrcode !== 'string') {
          await this.uploadFile(form.qrcode, 'qrCode');
        }
        if (form.poster && typeof form.poster !== 'string') {
          await this.uploadFile(form.poster, 'poster');
        }
        await this.$http.post('/act', form, {
          headers: {'Authorization': this.$root.token}
        });
        this.$emit('next');
      } catch (err) {
        console.log(err.response);
      }
    },
    async uploadFile (file, type) {
      const formdata = new FormData();
      formdata.append('file', file);
      const { data } = await this.$http.post('/images', formdata, {
        method: 'post',
        headers: {'content-type': 'multipart/form-data'}
      });
      this.form[type.toLowerCase()] = data.filename;
    }
  }
};
</script>

<style scoped>
.selectForm-wrapper {
  padding-bottom: 10px;
}

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

.addMessageItem {
  display: flex;
  align-items: center;
}

.why {
  margin: 0 1% 0 2.452%;
}

.setLimit {
  margin: 1.8867% 0;
  display: flex;
  align-items: center;
  height: 32px;
}
.input-limit-wrapper {
  flex: 1;
}
.input-limit {
  width: 60px;
  margin: 0 0.471%;
}

.switch-label {
  margin-right: 5.66%;
}

.button-group {
  margin-top: 3.4%;
}

.button-submit {
  margin-left: 3.77%;
}
</style>
