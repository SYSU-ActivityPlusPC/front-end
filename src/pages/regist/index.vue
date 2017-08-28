<template>
<div class="regist-wrapper">
  <TopBar />
  <div class="body" :style="style">
    <div class="logo-wrapper">
      <img src="../../assets/logo.png" class="logo">
      <div class="slogan">
        <span class="slogan-1">活动PLUS</span><br/>
        <span class="slogan-2">让参与校园活动更简单</span>
      </div>
    </div>
    <iForm :label-width="100" class="form" :model="form" :rules="rules">
      <FormItem label="组织名称" prop="name">
        <iInput size="large" class="input-size" placeholder="请输入完整的社团名称" v-model="form.name" />
      </FormItem>
      <FormItem label="联系邮箱" prop="email">
        <iInput size="large" class="input-size" placeholder="系统通知将发送到本邮箱" v-model="form.email" />
      </FormItem>
      <FormItem label="组织logo">
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <MyButton type="ghost" :width="110" :height="30" size="small">
            <img :src="upload" class="icon-upload" slot="icon" />
            点击上传
          </MyButton>
        </Upload>
      </FormItem>
      <FormItem label="身份证明" class="formitem">
        <Upload action="//jsonplaceholder.typicode.com/posts/" class="upload">
          <MyButton type="ghost" :width="110" :height="30" size="small">
            <img :src="upload" class="icon-upload" slot="icon" />
            点击上传
          </MyButton>
        </Upload>
        <div class="why">
            <img :src="why" alt="问号" class="icon-why" @click="show=!show">
            <div class="text-why" v-show="show">
              请提供可证明组织身份的材料，材料以<span class="strong">图片形式</span>上传
              <br />
              所有上传材料都将严密保密
            </div>
        </div>
      </FormItem>
      <FormItem label="备注信息" prop="info">
        <iInput class="textarea-size" type="textarea" :rows="6" v-model="form.info" />
      </FormItem>
      <FormItem>
        <MyButton :width="200" class="button-regist" @click="regist" :disabled="disabled">注册</MyButton>
      </FormItem>
    </iForm>
  </div>
</div>  
</template>

<script>
import TopBar from '@/components/header';
import MyButton from '@/components/button';
import upload from '@/assets/upload';
import why from '@/assets/why';
import iInput from 'iview/src/components/input';
import Upload from 'iview/src/components/upload';
import Form from 'iview/src/components/form';

export default {
  components: {
    TopBar,
    iForm: Form,
    FormItem: Form.Item,
    iInput,
    MyButton,
    Upload
  },
  data () {
    return {
      upload,
      why,
      style: '',
      show: false,
      form: {
        name: '',
        email: '',
        info: ''
      },
      rules: {
        name: {
          trigger: 'blur',
          validator (rule, value, callback) {
            if (value === '') {
              callback(new Error('不能为空'));
            } else {
              callback();
            }
          }
        },
        email: {
          trigger: 'blur',
          validator (rule, value, callback) {
            if (value === '') {
              callback(new Error('不能为空'));
            } else if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) === false) {
              callback(new Error('请输入正确的邮箱地址'));
            } else {
              callback();
            }
          }
        }
      }
    };
  },
  mounted () {
    const paddingTop = document.getElementsByTagName('body')[0].clientHeight * 0.091;
    this.style = `padding-top: ${paddingTop}px`;
  },
  methods: {
    async regist () {
      await this.$http.post('/club/signUp', this.form);
    }
  },
  computed: {
    disabled () {
      return this.form.name === '' || this.form.email === '' || !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.form.email);
    }
  }
};
</script>

<style scoped>
.regist-wrapper {
  margin: 1.8886% 7.35%;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 1.886%;
}

.logo {
  height: 72px;
}

.slogan-1 {
  font-size: 22px;
  color: #5074d7;
}

.slogan-2 {
  font-size: 16px;
}

.form {
  width: 56.6%
}

.input-size {
  width: 57.14%;
}

.textarea-size {
  width: 80%;
}

.button-regist {
  margin-left: 26px;
}
.why {
  position: absolute;
  width: 500px;
  left: 162px;
  top: 3px;
  display: flex;
}

.icon-why {
  height: 24px;
  width: 24px;
}

.text-why {
  line-height: 24px;
  margin-left: 10px;
}

.formitem {
  position: relative;
}

.strong {
  color: #5074d7;
}
</style>
