<template>
<iRow class-name="wrapper">
  <iCol class-name="col" span="18">
    <div class="logo-wrapper">
      <img src="../assets/logo.png" class="logo" alt="中大活动LOGO" />
    </div>
    <span class="title">活动PLUS管理平台</span>
  </iCol>
  <iCol class-name="col" span="6">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDuMzNb49vsxj0jZvYrJnJz8zk3pebawHiwBh7SzV7G_fTpDRwg" class="avatar" alt="你的头像" />
    <span class="name">社团</span>
    <a href="javascript:void(0)" v-if="showExit" @click="exit">退出</a>
  </iCol>
</iRow>
</template>

<script>
import { Row, Col } from 'iview';
export default {
  props: {
    name: {
      type: String,
      required: false
    },
    avatar: {
      type: String,
      required: false
    },
    showExit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    iRow: Row,
    iCol: Col
  },
  methods: {
    exit () {
      this.$emit('logout');
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #2d8cf0;
  box-shadow: 0 1px 1px #666666;
  z-index: 666;
}
.logo-wrapper {
  display: inline-block;
  text-align: center;
  background-color: white;
  width: 100px;
  height: 60px;
}
.logo {
  height: inherit;
  width: 60px;
}
.title {
  color: white;
  font-size: 18px;
  margin-left: 16px;
}
.col {
  display: flex;
  align-items: center;
  height: inherit;
}
.avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}


.name {
  margin-left: 12px;
  color: white;
  font-size: 16px;
}

a {
  margin-left: 20px;
  font-size: 12px;
  color: #e4e4e4;
}

</style>
