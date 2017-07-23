<template>
<div class="wrapper">
  <iRow class-name="row">
    <iCol span="7" offset="16">
      <Card dis-hover style="padding: 8px 20px">
        <div class="logo-wrapper">
          <img src="../../assets/logo.png" class="logo">
          <div class="slogan">
            <span class="slogan-firstline">活动PLUS</span><br/>
            <span class="slogan-secondline">让参与校园活动更简单</span>
          </div>
        </div>
        <form class="form">
          <iInput style="width: 240px" size="large" placeholder="用户名" type="text"></iInput>
          <iInput style="width: 240px" size="large" placeholder="密码" type="password"></iInput>
          <iButton width="240px" @click="login">登录</iButton>
        </form>
      </Card>
    </iCol>
  </iRow>
</div>  
</template>

<script>
import { Card, Row, Col, Input } from 'iview';
import Button from '@/components/button';
export default {
  components: {
    Card,
    iRow: Row,
    iCol: Col,
    iInput: Input,
    iButton: Button
  },
  methods: {
    login () {
      console.log('on');
    }
  }
};
</script>

<style scoped>
.wrapper {
  background-image: url("../../assets/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
}
.row {
  padding-top: 150px;
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
.form {
  margin: 20px 0 0 0;
}
</style>
