<template>
<div class="wrapper">
  <span class="num">共{{length}}个</span>
  <div class="lists">
    <template v-for="(item, index) in actList">
      <ListItem v-if="!item.verified" @click="$emit('clickItem', item)" :key="item.time" :item="item" @remove="remove(index)">
          <div class="right-item" slot="right">
            <a href="javascript:void(0)" class="accept" @click.stop="verify(item)">通过</a>
            <a href="javascript:void(0)" class="reject" @click.stop="remove(index)">拒绝</a>
          </div>
      </ListItem>
    </template>
  </div>
</div>
</template>

<script>
import ListItem from './children/listItem';
export default {
  components: {
    ListItem
  },
  props: ['actList'],
  methods: {
    async verify (item) {
      let form = Object.assign({}, item);
      form.verified = true;
      try {
        await this.$http.post('/act/' + form.id, form);
        item.verified = true;
      } catch (err) {
        console.log(err.response);
      }
    },
    async remove (index) {
      await this.$http.delete('/act/' + this.actList[index].id);
      this.actList.splice(index, 1);
    }
  },
  computed: {
    length () {
      let count = 0;
      this.actList.forEach((val) => {
        if (!val.verified) {
          count++;
        }
      });
      return count;
    }
  }
};
</script>

<style scoped>
.num {
  display: flex;
  justify-content: flex-end;
  color: #666666;
  margin-bottom: 0.647%;
}

.right {
  display: flex;
}

.right-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
}

.accept {
  color: #28bf96;
}

.reject {
  color: #f91c6f;
}


.title {
  font-size: 16px;
  color: #666666;
}

.font-small {
  color: #999999;
  font-size: 10px;
}
</style>
