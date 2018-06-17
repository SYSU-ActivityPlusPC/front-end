<template>
<div class="detail-wrapper">
  <div class="button-wrapper">
    <a v-if="!isEdit" href="javascript:void(0)" @click="onEditClick">修改活动信息</a>
  </div>
  <div class="body" v-if="!isEdit">
    <div class="header">{{detail.name}}</div>
    <div class="content">
      <div class="content-item">
        <span class="label">活动时间:</span>
        <p class="value">{{`${detail.startTime} - ${detail.endTime}`}}</p>
      </div>
      <div class="content-item">
        <span class="label">活动地点:</span>
        <p class="value">{{detail.location || '无'}}</p>
      </div>
      <div class="content-item">
        <span class="label">活动对象:</span>
        <p class="value">{{detail.enrollCondition || '无'}}</p>
      </div>
      <div class="content-item">
        <span class="label">活动简介:</span>
        <p class="value">{{detail.introduction || '无'}}</p>
      </div>
      <div class="content-item">
        <span class="label">主办方:</span>
        <p class="value">{{detail.sponsor || '无'}}</p>
      </div>
      <div class="content-item">
        <span class="label">报名方式:</span>
        <p class="value">{{detail.enrollWay || '无'}}</p>
      </div>
     <div class="content-item">
        <span class="label">宣传时间:</span>
        <p class="value">{{`${detail.pubStartTime} - ${detail.pubEndTime}`}}</p>
      </div>
      <div class="content-item">
        <span class="label">报名截至日期:</span>
        <p class="value">{{detail.enrollEndTime || '无'}}</p>
      </div>
      <div class="content-item">
        <span class="label">奖励:</span>
        <p class="value">{{detail.reward || '无'}}</p>
      </div>
      <div class="content-item">
        <span class="label">参加要求:</span>
        <p class="value">{{detail.requirement || '无'}}</p>
      </div>
      <div class="content-item">
        <span class="label">活动详情:</span>
        <p class="value">{{detail.detail || '无'}}</p>
      </div>
      <div class="content-item">
        <span class="label">是否允许报名:</span>
        <p class="value">{{!!detail.can_enrolled ? '是' : '否'}}</p>
      </div>
      <div class="content-item" v-if="detail.email">
        <span class="label">匿名发布填写的email:</span>
        <p class="value">{{detail.email}}</p>
      </div>
      <div class="content-item">
        <span class="label">海报:</span>
        <img class="content-item-img" :src="detail.poster" alt="海报">
      </div>
      <div class="content-item">
        <span class="label">二维码:</span>
        <img class="content-item-img" :src="detail.qrcode" alt="二维码">
      </div>
    </div>
  </div>

  <div class="body" v-else>
    <Form ref="requiredForm" :label-width="110" :rules="requiredRules" :model="detailCopy">
      <FormItem label="活动名称" prop="name">
        <Input class="textarea-size" placeholder="请输入活动名称(30字以内)" v-model="detailCopy.name" />
      </FormItem>
      <FormItem label="活动时间" prop="time">
        <DatePicker type="datetimerange" placeholder="选择日期和时间"
                    style="width: 300px" v-model="detailCopy.time"
                    :editable="false" format="yyyy-MM-dd HH:mm"/>
      </FormItem>
      <FormItem label="活动地点" prop="location">
        <Input class="textarea-size" type="textarea" :rows="3" placeholder="请输入活动地点(100字以内)" v-model="detailCopy.location" />
      </FormItem>
      <FormItem label="活动对象" prop="enrollCondition">
        <Input class="textarea-size" type="textarea" :rows="3" placeholder="例如: 中山大学全体在校学生" v-model="detailCopy.enrollCondition" />
      </FormItem>
      <FormItem label="主办方" prop="sponsor">
        <Input class="textarea-size" type="textarea" :rows="3" placeholder="请输入活动主办方" v-model="detailCopy.sponsor" />
      </FormItem>
      <FormItem label="宣传时间" prop="pubTime">
        <DatePicker type="datetimerange" placeholder="选择日期和时间"
                    style="width: 300px" v-model="detailCopy.pubTime"
                    :editable="false" format="yyyy-MM-dd HH:mm"/>
      </FormItem>
      <FormItem label="报名方式" prop="enrollWay">
        <Input class="textarea-size" placeholder="例如：短信" v-model="detailCopy.enrollWay" />
      </FormItem>
      <FormItem label="报名截止日期" prop="enrollEndTime">
        <DatePicker type="datetime" placeholder="选择日期和时间"
                    style="width: 300px" v-model="detailCopy.enrollEndTime"
                    :editable="false" format="yyyy-MM-dd HH:mm"/>
      </FormItem>
      <FormItem label="活动详情" prop="detail">
        <Input class="textarea-size" type="textarea" :rows="6" placeholder="请输入活动详情，让大家更了解活动吧!" v-model="detailCopy.detail" />
      </FormItem>
      <FormItem label="奖励" prop="reward">
        <Input class="textarea-size" type="textarea" :rows="3" placeholder="例如：3个体育章" v-model="detailCopy.reward" />
      </FormItem>
      <FormItem label="参加要求" prop="requirement">
        <Input class="textarea-size" type="textarea" :rows="3" placeholder="例如: 参与者身体健康，无重大疾病" v-model="detailCopy.requirement" />
      </FormItem>
      <FormItem>
        <MyButton type="primary" @click="onModify" class="submit">提交</MyButton>
        <MyButton type="ghost" class="submit" @click="onCancel">取消</MyButton>
      </FormItem>
    </Form>
  </div>
</div>
</template>

<script>
import DatePicker from 'iview/src/components/date-picker';
import { Select, Option } from 'iview/src/components/select';
import Form from 'iview/src/components/form';
import Input from 'iview/src/components/input';
import MyButton from '@/components/button';
import { rules, errorText } from '@/utils/validate';

function formattedDate (time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

export default {
  components: {
    FormItem: Form.Item,
    Form,
    MyButton,
    Input,
    Select,
    Option,
    DatePicker
  },
  data () {
    return {
      detail: {},
      detailCopy: {},
      isEdit: false,
      requiredRules: {
        name: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.isEmpty(value)) {
              cb(new Error(errorText.empty()));
            } else if (rules.istooLong(value, 30)) {
              cb(new Error(errorText.tooLong(30)));
            } else {
              cb();
            }
          }
        },
        time: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.isEmpty(value)) {
              cb(new Error(errorText.empty()));
            } else {
              cb();
            }
          }
        },
        pubTime: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.isEmpty(value)) {
              cb(new Error(errorText.empty()));
            } else {
              cb();
            }
          }
        },
        location: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.isEmpty(value)) {
              cb(new Error(errorText.empty()));
            } else if (rules.istooLong(value, 100)) {
              cb(new Error(errorText.tooLong(100)));
            } else {
              cb();
            }
          }
        },
        sponsor: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.isEmpty(value)) {
              cb(new Error(errorText.empty()));
            } else if (rules.istooLong(value, 50)) {
              cb(new Error(errorText.tooLong(50)));
            } else {
              cb();
            }
          }
        },
        enrollCondition: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.isEmpty(value)) {
              cb(new Error(errorText.empty()));
            } else if (rules.istooLong(value, 50)) {
              cb(new Error(errorText.tooLong(50)));
            } else {
              cb();
            }
          }
        },
        detail: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.isEmpty(value)) {
              cb(new Error(errorText.empty()));
            } else if (rules.istooLong(value, 150)) {
              cb(new Error(errorText.tooLong(150)));
            } else {
              cb();
            }
          }
        },
        email: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.isEmpty(value)) {
              cb(new Error(errorText.empty()));
            } else if (!rules.isEmail(value)) {
              cb(new Error(errorText.notEmail()));
            } else {
              cb();
            }
          }
        },
        enrollWay: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.istooLong(value, 50)) {
              cb(new Error(errorText.tooLong(50)));
            } else {
              cb();
            }
          }
        },
        introduction: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.istooLong(value, 50)) {
              cb(new Error(errorText.tooLong(50)));
            } else {
              cb();
            }
          }
        },
        reward: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.istooLong(value, 30)) {
              cb(new Error(errorText.tooLong(30)));
            } else {
              cb();
            }
          }
        },
        requirement: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.istooLong(value, 50)) {
              cb(new Error(errorText.tooLong(50)));
            } else {
              cb();
            }
          }
        }
      }
    };
  },
  async created () {
    await this.getActDetail();
  },
  methods: {
    onCancel () {
      this.isEdit = false;
    },
    onEditClick () {
      this.detailCopy = JSON.parse(JSON.stringify(this.detail));
      this.detailCopy.time = [this.detailCopy.startTime, this.detailCopy.endTime];
      this.detailCopy.pubTime = [this.detailCopy.pubStartTime, this.detailCopy.pubEndTime];
      this.isEdit = true;
    },
    async getActDetail () {
      const { actId } = this.$route.params;
      const { token } = this.$root;
      const { data } = await this.$http({
        method: 'get',
        url: `/act/${actId}`,
        headers: {
          'Authorization': token
        }
      });
      this.detail = data;
    },
    onModify () {
      const { actId } = this.$route.params;
      const { token } = this.$root;
      this.$refs.requiredForm.validate(async (valid) => {
        if (valid) {
          // this.$Message.success('Success!');
          const data = {
            ...this.detailCopy,
            startTime: formattedDate(this.detailCopy.time[0]),
            endTime: formattedDate(this.detailCopy.time[1]),
            pubStartTime: formattedDate(this.detailCopy.pubTime[0]),
            pubEndTime: formattedDate(this.detailCopy.pubTime[1])
          };

          if (data.enrollEndTime) {
            data.enrollEndTime = formattedDate(this.detailCopy.enrollEndTime);
          } else {
            delete data.enrollEndTime;
          }

          await this.$http({
            method: 'post',
            url: `/act/${actId}`,
            data,
            headers: {
              'Authorization': token
            }
          });

          this.isEdit = false;
          this.$Message.success('修改成功');
          await this.getActDetail();
        } else {
          this.$Message.error('格式错误！');
        }
      });
    }
  }
};
</script>

<style scoped>
.body {
  border: 2px solid #5074d7;
  border-radius: 8px;
  padding: 20px;
}

.header,
.content-item {
  display: flex;
  justify-content: center;
}

.header {
  align-items: center;
  color: #5074d7;
  padding: 20px 14px 0 14px;
  font-size: 16px;
}

.content {
  padding: 0 8.33333%;
}

.content-item {
  justify-content: flex-start;
  margin-bottom: 2.8846%;
}
.label {
  font-weight: bold;
  margin-right: 10px;
}
.value {
  flex: 1;
  word-wrap: break-word;
  word-break: break-all;
}

.detail-wrapper {
  width: 56.6%
}
.button-wrapper {
  text-align: right;
  margin-bottom: 0.8333%;
}

.content-item-img {
  height: 80px;
  width: 80px;
}

.textarea-size {
  width: 500px;
}

.submit {
  margin-left: 26px;
}
</style>
