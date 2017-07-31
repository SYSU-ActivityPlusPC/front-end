<template>
<div class="wrapper">
  <div class="wrapper-tabs">
    <ul>
      <template v-for="item in campus">
        <li :class="{'select': selectCampus === `${item}`}" :key="item" @click="selectCampus=item">{{item}}校区</li>
      </template>
    </ul>
    <span class="num">共{{mock.length}}个</span>
  </div>
  <transition-group name="flip-list" tag="div" class="lists">
    <template v-for="(item, index) in mock">
      <ListItem @click="open=true" 
                @remove="remove(index)"
                :key="item.time" 
                :item="item">
          <div class="list-right-item" slot="right">
            <a href="javascript:void(0)" class="up" @click.stop="up(index)">上移</a>
            <a href="javascript:void(0)" class="down" @click.stop="down(index)">下移</a>
          </div>
      </ListItem>
    </template>
  </transition-group>
  <Modal :open="open" @close="open=false"/>
</div>
</template>

<script>
import ListItem from './children/listItem';
import Modal from './children/modal';

const mock = [
  {
    title: '三月义卖',
    time: '30s',
    src: 'sdcs',
    tar: '中山大学在校生'
  },
  {
    title: '三月义卖',
    time: '1天',
    src: 'sdcs',
    tar: '中山大学在校生'
  },
  {
    title: '三月义卖',
    time: '2月',
    src: 'sdcs',
    tar: '中山大学在校生'
  },
  {
    title: '三月义卖',
    time: '3年',
    src: 'sdcs',
    tar: '中山大学在校生'
  }
];

export default {
  components: {
    ListItem,
    Modal
  },
  data () {
    return {
      mock,
      open: false,
      selectCampus: '东',
      campus: [
        '东',
        '南',
        '北',
        '珠海'
      ]
    };
  },
  methods: {
    up (index) {
      if (index) {
        const temp = this.mock[index - 1];
        this.mock[index - 1] = this.mock[index];
        this.mock[index] = temp;
        this.mock = JSON.parse(JSON.stringify(this.mock));
      }
    },
    down (index) {
      if (index < this.mock.length - 1) {
        const temp = this.mock[index + 1];
        this.mock[index + 1] = this.mock[index];
        this.mock[index] = temp;
        this.mock = JSON.parse(JSON.stringify(this.mock));
      }
    },
    remove (index) {
      this.mock.splice(index, 1);
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
