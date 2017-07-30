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
        <iInput :style="inputStyle" size="large" placeholder="用户名" type="text"></iInput>
        <a href="javascript:void(0)" style="margin-left: 20px;">校外社团登录 ></a>
      </div>
      <div class="form-input">
        <iInput :style="inputStyle" size="large" placeholder="密码" type="password"></iInput>
        <a href="javascript:void(0)" style="margin-left: 20px;">忘记密码</a>
      </div>
      <div>
        <MyButton :width="240" @click="login">登录</MyButton>
        <a href="javascript:void(0)" style="margin-left: 20px;" @click="$router.push('/regist')">注册</a>
      </div>
    </form>
  </Card>
</div>  
</template>

<script>
// import { Card, Row, Col, Input } from 'iview';
import { Row, Col } from 'iview/src/components/grid';
import iInput from 'iview/src/components/input';
import Card from 'iview/src/components/card';
import { MyButton } from '@/components';
export default {
  data () {
    return {
      cardStyle: `padding: 7px 19px;
                  width: 438px; 
                  position: absolute; 
                  right: 50px; 
                  top: 100px`,
      inputStyle: `width: 240px;`
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
