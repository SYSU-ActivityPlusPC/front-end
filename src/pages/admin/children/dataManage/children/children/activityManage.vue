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
    <template v-for="(item, index) in currentList">
      <ListItem @click="$emit('clickItem', item)"
                @remove="remove(item)"
                :key="index"
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
  computed: {
    currentList () {
      const selectCampus = this.selectCampus;
      return this.actList.filter(item => (item.campus & Math.pow(2, selectCampus)) !== 0);
    }
  },
  methods: {
    up (index) {
      if (index > 0) {
        const item = this.currentList[index];
        const preItem = this.currentList[index - 1];
        this.currentList.splice(index - 1, 1, item);
        this.currentList.splice(index, 1, preItem);
      }
    },
    down (index) {
      if (index < this.currentList.length - 1) {
        const postItem = this.currentList[index + 1];
        const item = this.currentList[index];
        this.currentList.splice(index, 1, postItem);
        this.currentList.splice(index + 1, 1, item);
      }
    },
    async remove (item) {
      try {
        await this.$http.delete('/act/' + item.id, {
          headers: {'Authorization': this.$root.token}
        });
        const index = this.actList.findIndex(ele => ele.id === item.id);
        this.actList.splice(index, 1);
      } catch (err) {
        console.log(err);
      }
    },
    generateCollection () {
      const len = this.currentList.length;
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
