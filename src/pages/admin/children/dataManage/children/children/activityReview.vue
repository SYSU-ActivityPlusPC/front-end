<template>
<div class="wrapper">
  <span class="num">共{{actList.length}}个</span>
  <div class="lists">
    <template v-for="(item, index) in actList">
      <ListItem v-if="item.verified === 0" @click="$emit('clickItem', item)" :key="item.time" :item="item" @remove="remove(index)">
          <div class="right-item" slot="right">
            <a href="javascript:void(0)" class="accept" @click.stop="verify(index)">通过</a>
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
    async verify (index) {
      const item = this.actList[index];
      try {
        await this.$http.put('/act?act=' + item.id + '&verify=1', null, {
          headers: {'Authorization': this.$root.token}
        });
        item.verified = 1;
        this.actList.splice(index, 1);
        this.$emit('verify', item);
      } catch (err) {
        console.log(err);
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
