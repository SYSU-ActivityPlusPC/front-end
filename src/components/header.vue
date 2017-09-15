<template>
<iRow class-name="wrapper">
  <iCol class-name="col" span="21">
    <div class="logo-wrapper">
      <img src="../assets/logo.png" class="logo" alt="中大活动LOGO" />
    </div>
    <span class="title">活动PLUS管理平台</span>
  </iCol>
  <iCol class-name="col" span="3">
    <avatar labelColor="#f2f2f2" 
            name="fish" 
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1PG-_WjPvp6EIlu24xTzgQ-W3dNj9NooaAGTJQ3zZa3_KGVp"
            :size="size" />
    <a href="javascript:void(0)" v-if="showExit" @click="exit">退出</a>
  </iCol>
</iRow>
</template>

<script>
import { Row, Col } from 'iview/src/components/grid';
import avatar from '@/components/avatar';
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
    iCol: Col,
    avatar
  },
  methods: {
    exit () {
      this.$emit('logout');
      this.$router.push('/');
    },
    onResize () {
      const height = document.getElementsByTagName('html')[0].clientHeight;
      // 相应分辨率，对avatar大小做下改变
      this.size = height * 0.09 * 48 / 60;
    }
  },
  data () {
    return {
      size: 0
    };
  },
  mounted () {
    // 绑定监听屏幕大小改变事件
    window.onresize = this.onResize.bind(this);
    const height = document.getElementsByTagName('html')[0].clientHeight;
    // 相应分辨率，对avatar大小做下改变
    this.size = height * 0.09 * 48 / 60;
  },
  beforeDestroy () {
    window.onresize = null;
  }
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 9.1%;
  width: 100%;
  background-color: #5074d7;
  box-shadow: 0 1px 1px #666666;
  z-index: 666;
}


.logo-wrapper {
  display: inline-block;
  text-align: center;
  background-color: white;
  width: 8.37%;
  height: inherit;
}
.logo {
  height: inherit;
  width: 60%;
}
.title {
  color: white;
  font-size: 18px;
  margin-left: 16px;
}
.col {
  display: flex;
  align-items: center;
  height: 100%;
}


a {
  margin-left: 20px;
  font-size: 12px;
  color: #e4e4e4;
}
a:hover,
a:active {
  color: #e4e4e4 !important;
}
</style>
