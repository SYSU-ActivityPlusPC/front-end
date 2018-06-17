<template>
<div class="wrapper">
  <Card dis-hover :style="cardStyle">
    <div class="logo-wrapper">
      <img src="../../assets/logo.png" class="logo">
      <div class="slogan">
        <span class="slogan-firstline">活动PLUS</span><br/>
        <span class="slogan-secondline">让参与校园活动更简单</span>
      </div>
    </div>
    <form class="form">
      <div class="form-input">
        <iInput :style="inputStyle" size="large" placeholder="用户名" type="text" v-model="form.account"></iInput>
        <a href="javascript:void(0)" style="margin-left: 20px;" @click="$router.push('/tourist')">校外社团登录 ></a>
      </div>
      <div class="form-input">
        <iInput :style="inputStyle" size="large" placeholder="密码" type="password" v-model="form.password"></iInput>
        <a href="javascript:void(0)" style="margin-left: 20px;">忘记密码</a>
      </div>
      <div>
        <MyButton :width="240" @click="login" :disabled="loading || disabled">{{!loading ? '登录' : '请等待'}}</MyButton>
        <a href="javascript:void(0)" style="margin-left: 20px;" @click="$router.push('/regist')">注册</a>
      </div>
    </form>
  </Card>
</div>
</template>

<script>
import { Row, Col } from 'iview/src/components/grid';
import iInput from 'iview/src/components/input';
import Card from 'iview/src/components/card';
import MyButton from '@/components/button';
export default {
  async created () {
    const token = this.$root.token;
    if (token) {
      const {status} = await this.$http.post('/session', null, {
        headers: {'Authorization': token}
      });
      if (status === 200) {
        const payloadString = decodeURIComponent(escape(atob(token.split('.')[1])));
        const payload = JSON.parse(payloadString);
        this.$router.replace(payload.sub === 'sysuactivity2018' ? '/admin' : '/community');
      } else {
        localStorage.removeItem('name');
        localStorage.removeItem('logo');
      }
    }
  },
  data () {
    return {
      cardStyle: `padding: 7px 19px;
                  width: 438px;
                  position: absolute;
                  right: 50px;
                  top: 100px`,
      inputStyle: `width: 240px;`,
      form: {
        account: '',
        password: ''
      },
      loading: false
    };
  },
  components: {
    Card,
    iRow: Row,
    iCol: Col,
    iInput,
    MyButton
  },
  methods: {
    async login () {
      this.loading = true;
      const {data, status} = await this.$http.post('/session', this.form);
      if (status === 204) {
        this.$Notice.open({
          title: '用户不存在或者密码错误'
        });
        this.loading = false;
        return;
      } else {
        this.$Notice.open({
          title: '登录成功'
        });
      }
      this.loading = false;
      const token = data.token;
      const payloadString = decodeURIComponent(escape(atob(token.split('.')[1])));
      const payload = JSON.parse(payloadString);
      localStorage.setItem('token', token);
      localStorage.setItem('expires', payload.exp * 1000);
      localStorage.setItem('name', data.name);
      localStorage.setItem('logo', data.logo);
      localStorage.setItem('id', data.id);
      const root = this.$root;
      root.token = token;
      root.name = data.name;
      root.logo = data.logo;
      root.id = data.id;
      const redirect = this.$route.query.redirect;
      if (redirect) {
        // 若redirect的值有效，说明是从某页面由于失去权限而跳转而来
        this.$router.replace(redirect);
        return;
      }
      this.$router.replace(payload.sub === 'sysuactivity2018' ? '/admin' : '/community');
    }
  },
  computed: {
    disabled () {
      return this.form.account === '' || this.form.password === '';
    }
  }
};
</script>

<style scoped>
.wrapper {
  background-image: url("http://okuww23ih.bkt.clouddn.com/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}
.logo {
  height: 80px;
  width: 80px;
}
.slogan-firstline {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 10px;
}
.slogan-secondline {
  font-size: 16px;
}

.form-input {
  margin: 20px 0;
}
</style>
