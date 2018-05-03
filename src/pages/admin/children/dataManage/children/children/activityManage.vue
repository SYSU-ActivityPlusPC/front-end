<template>
<div class="wrapper">
  <div class="wrapper-tabs">
    <ul>
      <template v-for="(item, index) in campus">
        <li :class="{'select': selectCampus === index}" :key="item" @click="selectCampus=index">{{item}}校区</li>
      </template>
    </ul>
    <MyButton @click="generateCollection">生成推送</MyButton>
    <span class="num">共{{length}}个</span>
  </div>
  <transition-group name="flip-list" tag="div" class="lists">
    <template v-for="(item, index) in actList">
      <ListItem v-if="item.campus & Math.pow(2,selectCampus) !== 0 && item.verified === 1" @click="$emit('clickItem', item)"
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
        const temp = this.actList[index - 1];
        this.actList[index - 1] = this.actList[index];
        this.actList[index] = temp;
        this.actList = JSON.parse(JSON.stringify(this.actList));
      }
    },
    down (index) {
      if (index < this.actList.length - 1) {
        const temp = this.actList[index + 1];
        this.actList[index + 1] = this.actList[index];
        this.actList[index] = temp;
        this.actList = JSON.parse(JSON.stringify(this.actList));
      }
    },
    async remove (index) {
      await this.$http.delete('/act/' + this.actList[index].id);
      this.actList.splice(index, 1);
    },
    generateCollection () {
      const len = this.actList.filter(val => val.verified === 1 && val.campus & Math.pow(2, this.selectCampus) !== 0).length;
      if (!len) {
        alert('当前校区的活动列表为空。');
      } else {
        this.$emit('generateCollection', this.selectCampus);
      }
    }
  },
  computed: {
    length () {
      let count = 0;
      this.actList.forEach((val) => {
        if (val.verified) {
          count++;
        }
      });
      return count;
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
