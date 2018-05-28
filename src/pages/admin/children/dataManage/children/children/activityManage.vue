<template>
<div class="wrapper">
  <div class="wrapper-tabs">
    <ul>
      <template v-for="(item, index) in campus">
        <li :class="{'select': selectCampus === index}" :key="item" @click="selectCampus = index">{{item}}校区</li>
      </template>
    </ul>
    <MyButton @click="generateCollection">生成推送</MyButton>
    <span class="num">共{{actList.length}}个</span>
  </div>
  <transition-group name="flip-list" tag="div" class="lists">
    <template v-for="(item, index) in actList">
      <ListItem v-if="item.campus & Math.pow(2, selectCampus)" @click="$emit('clickItem', item)"
                @remove="remove(index)"
                :key="item.id" 
                :item="item">
          <div class="list-right-item" slot="right">
            <a href="javascript:void(0)" class="up" @click.stop="up(index)">上移</a>
            <a href="javascript:void(0)" class="down" @click.stop="down(index)">下移</a>
          </div>
      </ListItem>
    </template>
  </transition-group>
</div>
</template>

<script>
import ListItem from './children/listItem';
import MyButton from '@/components/button';
export default {
  components: {
    ListItem,
    MyButton
  },
  props: ['actList'],
  data () {
    return {
      open: false,
      selectCampus: 0,
      campus: [
        '东',
        '南',
        '北',
        '珠海'
      ],
      curItem: {
        startTime: '',
        endTime: ''
      }
    };
  },
  methods: {
    up (index) {
      if (index) {
        const item = this.actList[index];
        const preItem = this.actList[index - 1];
        this.actList.splice(index - 1, 1, item);
        this.actList.splice(index, 1, preItem);
      }
    },
    down (index) {
      if (index < this.actList.length - 1) {
        const postItem = this.actList[index + 1];
        const item = this.actList[index];
        this.actList.splice(index, 1, postItem);
        this.actList.splice(index + 1, 1, item);
      }
    },
    async remove (index) {
      try {
        await this.$http.delete('/act/' + this.actList[index].id, {
          headers: {'Authorization': this.$root.token}
        });
        this.actList.splice(index, 1);
      } catch (err) {
        console.log(err);
      }
    },
    generateCollection () {
      const len = this.actList.filter(val => val.campus & Math.pow(2, this.selectCampus)).length;
      if (!len) {
        alert('当前校区的活动列表为空。');
      } else {
        this.$emit('generateCollection', this.selectCampus);
      }
    }
  }
};
</script>

<style scoped>
.lists {
  display: flex;
  flex-direction: column;
}

.wrapper {
  position: relative;
}

.wrapper-tabs {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.647%;
}

ul {
  width: 40%;
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


.num {
  align-self: flex-end;
  color: #666666;
}


.list-right-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
}

.up {
  color: #28bf96;
}

.down {
  color: #5074d7;
}


</style>
