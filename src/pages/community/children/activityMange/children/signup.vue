<template>
<div>
  <div class="signup-wrapper">
    <div class="button-group">
      <MyButton class="end-button" @click="onCloseClick">结束报名</MyButton>
      <MyButton>导出名单</MyButton>
    </div>
    <div class="table">
      <div class="row">
        <div class="col col-name col-width-70">序号</div>
        <div class="col col-name col-flex-1">姓名</div>
        <div class="col col-name col-width-70">性别</div>
        <div class="col col-name col-width-100">学号</div>
        <div class="col col-name col-flex-1">学院</div>
        <div class="col col-name col-width-150">联系电话</div>
        <div class="col col-name col-width-70">操作</div>
      </div>
      <template v-for="(item, index) in mock">
        <div :key="index" class="row" :class="{'bg': index % 2 === 0}">
          <div class="col col-width-70">{{index}}</div>
          <div class="col col-flex-1">{{item.name}}</div>
          <div class="col col-width-70">{{item.gender}}</div>
          <div class="col col-width-100">{{item.sid}}</div>
          <div class="col col-flex-1">{{item.college}}</div>
          <div class="col col-width-150">{{item.phone}}</div>
          <a href="javascript:void(0)" class="col col-width-70 operator" @click="DeleteActApply(item.id)">删除</a>
        </div>
      </template>
    </div>
  </div>
  <!-- <Table border :columns="columns7" :data="data6"></Table> -->
</div>
</template>

<script>
import MyButton from '@/components/button';
import Table from 'iview/src/components/table';
import Modal from 'iview/src/components/modal';
export default {
  components: {
    MyButton,
    Table,
    Modal
  },
  data () {
    return {
      // columns7: [
      //   {
      //     title: '姓名',
      //     key: 'username'
      //   },
      //   {
      //     title: '学号',
      //     key: 'studentid'
      //   },
      //   {
      //     title: '学院',
      //     key: 'school'
      //   },
      //   {
      //     title: '联系电话',
      //     key: 'phone'
      //   },
      //   {
      //     title: 'Action',
      //     key: 'action',
      //     width: 150,
      //     align: 'center',
      //     render: (h, params) => {
      //       return h('div', [
      //         h('a', {
      //           attrs: {
      //             href: 'javascript:void(0)'
      //           },
      //           on: {
      //             click: () => {
      //               console.log(1);
      //             }
      //           }
      //         }, '删除')
      //       ]);
      //     }
      //   }
      // ],
      // data6: [
      //   {
      //     name: 'John Brown',
      //     age: 18,
      //     address: 'New York No. 1 Lake Park'
      //   },
      //   {
      //     name: 'Jim Green',
      //     age: 24,
      //     address: 'London No. 1 Lake Park'
      //   },
      //   {
      //     name: 'Joe Black',
      //     age: 30,
      //     address: 'Sydney No. 1 Lake Park'
      //   },
      //   {
      //     name: 'Jon Snow',
      //     age: 26,
      //     address: 'Ottawa No. 2 Lake Park'
      //   }
      // ]
      mock: [
        {
          name: '张三',
          gender: '男',
          sid: '15331439',
          college: '药学院',
          phone: 13719177292
        },
        {
          name: '张三',
          gender: '男',
          sid: '15331439',
          college: '数据科学与计算机学院',
          phone: 13719177292
        },
        {
          name: '张三',
          gender: '男',
          sid: '15331439',
          college: '数据科学与计算机学院',
          phone: 13719177292
        }
      ]
    };
  },
  async created () {
    // await this.getActApply();
  },
  methods: {
    async onCloseClick () {
      const res = window.confirm('确认要关闭报名么？');
      if (res) {
        await this.CloseApply();
      }
    },
    async CloseApply () {
      const { actId } = this.$route.params;
      await this.$http({
        url: `/act/${actId}`,
        method: 'put'
      });
    },
    async DeleteActApply (applyId) {
      const { actId } = this.$route.params;

      await this.$http({
        url: `/act?act=${actId}&actApply=${applyId}`,
        method: 'delete'
      });
    },
    async getActApply () {
      // const { actId } = this.$route.params;
      // const { token } = this.$root;

      // const { data } = await this.$http({
      //   method: 'get',
      //   url: `/actApply?act=${actId}`,
      //   headers: {
      //     'Authorization': token
      //   }
      // });
      // const { tableTitle, content } = data;

      // this.columns7 = tableTitle.map(item => ({
      //   id:
      // }))

      // console.log(data);
    }
  }
};
</script>

<style scoped>
.signup-wrapper {
  width: 68.965%;
}

.table {
  border: 1px solid #cccccc;
  border-bottom: transparent;
  border-right: transparent;
}

.row {
  display: flex;
}

.col {
  border: 1px solid #cccccc;
  border-left: transparent;
  border-top: transparent;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.col-flex-1 {
  flex: 1
}

.col-width-70 {
  width: 70px;
}

.col-width-100 {
  width: 100px;
}

.col-width-150 {
  width: 150px;
}

.operator {
  color: #f91c6f;
}

.col-name {
  color: #5074d7;
}

.bg {
  background-color: #f2f2f2;
}

.button-group {
  text-align: right;
  margin-bottom: 2.25%;
}

.end-button {
  margin-right: 3.75%
}
</style>
