<template>
<div class="wrapper">
  <div class="row1">
    <ul>
      <template v-for="item in campus">
        <li :class="{'select': selectCampus === `${item}`}" :key="item" @click="selectCampus=item">{{item}}校区</li>
      </template>
    </ul>
    <div class="row1-right">
      <span class="num">共3个</span>
      <iButton type="text" style="padding: 0 5px 0 0;">
        <img :src="remove" alt="删除" class="delete"/>
      </iButton>
    </div>
  </div>
  <div class="lists">
    <template>
      <ListItem>
        <div slot="left">
          <p class="title">三月义卖</p>
          <p class="font-small">2017.3.3提交</p>
        </div>
        <div slot="right" class="right">
          <div class="right-item">
            <p class="font-small">来源</p>
            <p style="color: #666666;">SDCS团委</p>
          </div>
          <div class="right-item">
            <p class="font-small">活动对象</p>
            <p style="color: #666666;">中山大学在校生</p>
          </div>
          <div class="right-item">
            <a href="javascript:void(0)" class="up">上移</a>
            <a href="javascript:void(0)" class="down">下移</a>
          </div>
        </div>
      </ListItem>
    </template>
  </div>
</div>
</template>

<script>
import { ListItem } from '@/components';
import { Button } from 'iview';
import remove from '@/assets/delete';
export default {
  components: {
    ListItem,
    IButton: Button
  },
  data () {
    return {
      remove,
      selectCampus: '东',
      campus: [
        '东',
        '南',
        '北',
        '珠海'
      ]
    };
  }
};
</script>

<style scoped>

ul {
  width: 46.67%;
  display: flex;
  justify-content: space-around;
}

li {
  cursor: pointer;
  color: #666666;
}

.select {
  color: #5074d7;
  font-weight: bold;
  font-size: 16px;
}

.row1 {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.647%;
}
.row1-right {
  align-self: flex-end;
}
.num {
  margin-right: 15px;
  color: #666666;
}

.title {
  font-size: 16px;
  color: #666666;
}

.right-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
}

.font-small {
  color: #999999;
  font-size: 10px;
}

.right {
  display: flex;
}

.up {
  color: #28bf96;
}

.down {
  color: #5074d7;
}
</style>
