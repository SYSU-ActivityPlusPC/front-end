<template>
<div class="wrapper">
  <div class="wrapper-tabs">
    <ul>
      <template v-for="item in campus">
        <li :class="{'select': selectCampus === `${item}`}" :key="item" @click="selectCampus=item">{{item}}校区</li>
      </template>
    </ul>
    <span class="num">共3个</span>
  </div>
  <div class="lists">
    <transition-group name="flip-list">
      <template v-for="(item, index) in mock">
        <div class="list-wrapper" :key="item.time">
          <ListItem @click="open=true"  class="list-item">
            <div slot="left">
              <p class="list-title">{{item.title}}</p>
              <p class="font-small">{{item.time}}提交</p>
            </div>
            <div slot="right" class="right">
              <div class="list-right-item">
                <p class="font-small">来源</p>
                <p style="color: #666666;">{{item.src}}</p>
              </div>
              <div class="list-right-item">
                <p class="font-small">活动对象</p>
                <p style="color: #666666;">{{item.tar}}</p>
              </div>
              <div class="list-right-item">
                <a href="javascript:void(0)" class="up" @click.stop="up(index)">上移</a>
                <a href="javascript:void(0)" class="down" @click.stop="down(index)">下移</a>
              </div>
            </div>
          </ListItem>
          <iButton type="text" class="button-remove">
            <img :src="remove" alt="删除" />
          </iButton>
        </div>
      </template>
    </transition-group>
  </div>
  <Modal :open="open" @close="open=false"/>
</div>
</template>

<script>
import ListItem from '@/components/listItem';
import iButton from 'iview/src/components/button';
import Modal from './children/modal';
import remove from '@/assets/delete';

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
    iButton: iButton,
    Modal
  },
  data () {
    return {
      mock,
      remove,
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
    }
  }
};
</script>

<style scoped>

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


.list-title {
  font-size: 16px;
  color: #666666;
}

.list-right-item {
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


.list-wrapper {
  display: flex;
  margin-bottom: 2.85%;
  position: relative;
}

.button-remove {
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
}

</style>
