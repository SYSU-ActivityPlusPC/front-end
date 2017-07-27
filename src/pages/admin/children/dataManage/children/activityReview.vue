<template>
<div class="wrapper">
  <div class="row1">
    <span class="num">共3个</span>
    <iButton type="text" style="padding: 0 5px 0 0;">
      <img :src="remove" alt="删除" class="delete"/>
    </iButton>
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
      remove
    }
  }
};
</script>

<style>
  
</style>
