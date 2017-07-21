<template>
<div class="wrapper">
  <div class="avatar">
    <img src="https://avatars0.githubusercontent.com/u/23744602?v=4&u=8914e318dbe1a0bb7872a4e12fb3201b053e54ad&s=400" alt="avatar" class="avatar-img"/>
    <span>社团</span>
  </div>
  <iMenu theme="dark" active-name="1" width="100%" class="navMenu">
    <template v-for="( title, index ) in titles">
      <iMenuItem :key="index" :name="index" class="navMenuItem">{{title}}</iMenuItem>
    </template>
  </iMenu>
</div>
</template>

<script>
import { Menu, MenuItem } from 'iview';
export default {
  props: {
    titles: {
      required: true,
      type: Array
    },
    avatar: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    paths: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      titles: [
        '文章管理',
        '评论管理',
        '用户留存'
      ]
    };
  },
  components: {
    iMenu: Menu,
    iMenuItem: MenuItem
  }
};
</script>

<style scoped>
.wrapper {
  background-color: #495060;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  display: flex;
  align-items: center;
  margin: 50px 0;
  color: rgba(255, 255, 255, 0.7);
}


.avatar-img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-right: 30px;
}

.navMenu {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.navMenuItem {
  width: inherit;
  display: flex;
  justify-content: center;
}
</style>
