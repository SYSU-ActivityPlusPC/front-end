<template>
<div class="form-wrapper">
  <div class="left-wrapper">
    <div class="tab tab-must" :class="{'curTab': currentTab === 'must'}" @click="currentTab='must'">必填</div>
    <div class="tab tab-select" :class="{'curTab': currentTab !== 'must'}" @click="currentTab='select'">选填</div>
    <div class="fill"></div>
  </div>
  <div class="right-wrapper" v-show="currentTab === 'must'">
    <iForm ref="requiredForm" :label-width="110" :rules="requiredRules" :model="form">
      <FormItem label="活动名称" prop="name">
        <iInput size="large" class="input-size" placeholder="请输入活动名称(30字以内)" v-model="form.name" />
      </FormItem>
      <FormItem label="活动时间" prop="time">
        <DatePicker type="datetimerange" placeholder="选择日期和时间"
                    style="width: 300px" size="large" v-model="form.time"
                    :editable="false" format="yyyy-MM-dd HH:mm"/>
      </FormItem>
      <FormItem label="活动地点" prop="location">
        <iInput class="textarea-size" type="textarea" :rows="3" placeholder="请输入活动地点(100字以内)" v-model="form.location" />
      </FormItem>
      <FormItem label="校区" prop="campus">
        <iSelect class="select" size="large" multiple v-model="form.campus">
          <iOption v-for="(area, index) in areas" :value="Math.pow(2, index)" :key="area">{{area}}</iOption>
        </iSelect>
      </FormItem>
      <FormItem label="活动对象" prop="enrollCondition">
        <iInput class="textarea-size" type="textarea" :rows="3" placeholder="例如: 中山大学全体在校学生" v-model="form.enrollCondition" />
      </FormItem>
      <FormItem label="主办方" prop="sponsor">
        <iInput class="textarea-size" type="textarea" :rows="3" placeholder="请输入活动主办方" v-model="form.sponsor" />
      </FormItem>
      <FormItem label="活动类型" prop="type">
        <iSelect class="select" size="large" v-model="form.type" >
          <iOption v-for="(type, index) in types" :value="index" :key="type">{{type}}</iOption>
        </iSelect>
      </FormItem>
      <FormItem label="宣传时间" prop="pubTime">
        <DatePicker type="datetimerange" placeholder="选择日期和时间"
                    style="width: 300px" v-model="form.pubTime"
                    :editable="false" format="yyyy-MM-dd HH:mm"/>
      </FormItem>
      <FormItem label="活动详情" prop="detail">
        <iInput class="textarea-size" type="textarea" :rows="6" placeholder="请输入活动详情，让大家更了解活动吧!" v-model="form.detail" />
      </FormItem>
      <FormItem label="邮箱" prop="email" v-if="authority === 'tourist'">
        <iInput class="input-size" placeholder="活动审核结果将会发送到此邮箱!" size="large" v-model="form.email" />
      </FormItem>
      <FormItem>
        <MyButton :width="200" class="submit" @click="confirm" :disabled="disabled">提交活动</MyButton>
        <MyButton v-if="editAct" :width="200" class="submit" @click="$emit('endEdit')">取消</MyButton>
      </FormItem>
    </iForm>
  </div>
  <div class="right-wrapper" v-show="currentTab === 'select'">
    <iForm ref="optionalForm" :label-width="110" :rules="requiredRules" :model="form">
      <FormItem label="报名方式">
        <iInput size="large" class="input-size" placeholder="例如：短信" v-model="form.enrollWay" />
      </FormItem>
      <FormItem label="报名截止日期">
        <DatePicker type="datetime" placeholder="选择日期和时间"
                    style="width: 300px" size="large" v-model="form.enrollEndTime"
                    :editable="false" format="yyyy-MM-dd HH:mm"/>
      </FormItem>
      <FormItem label="活动奖励">
        <iInput class="textarea-size" type="textarea" :rows="3" placeholder="例如：3个体育章" v-model="form.reward" />
      </FormItem>
      <FormItem label="活动简介" prop="introduction">
        <iInput class="textarea-size" type="textarea" :rows="3" placeholder="请输入活动简介(50个字以内)" v-model="form.introduction" />
      </FormItem>
      <FormItem label="活动要求">
        <iInput class="textarea-size" type="textarea" :rows="3" placeholder="例如: 参与者身体健康，无重大疾病" v-model="form.requirement" />
      </FormItem>
      <FormItem label="宣传图">
        <div>
          <div class="demo-upload-list" v-for="item in posterUploadList"  :key="item.url">
            <template>
                <img :src="item.url" style="width: 58px;height:58px;line-height: 58px;">
                <div class="demo-upload-list-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
                    <Icon type="ios-trash-outline" @click.native="onPosterRemove()"></Icon>
                </div>
            </template>
          </div>
          <Upload 
            action="/api/images" 
            accept="image/*"
            :format="format"
            :max-size="2048" 
            :before-upload="onBeforePoster"
            :show-upload-list="false"
            :on-remove="onPosterRemove"
            :on-format-error="onFormatError"
            style="display: inline-block;width:58px;"
            type="drag"
            :on-exceeded-size="onExceededSize">
            <!-- <MyButton type="ghost" :width="110" :height="30" size="small">
              <img :src="upload" class="icon-upload" slot="icon" />
              点击上传
            </MyButton> -->
              <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="ios-cloud-upload-outline" :size="20" />
              </div>
          </Upload>
        </div>
      </FormItem>
      <FormItem label="二维码">
        <div>
          <div class="demo-upload-list" v-for="item in qrcodeUploadList"  :key="item.url">
            <template>
                <img :src="item.url" style="width: 58px;height:58px;line-height: 58px;">
                <div class="demo-upload-list-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
                    <Icon type="ios-trash-outline" @click.native="onQrcodeRemove()"></Icon>
                </div>
            </template>
          </div>
          <Upload
            action="/api/images"
            accept="image/*"
            :format="format"
            :show-upload-list="false"
            :max-size="2048"
            :before-upload="onBeforeQrcode"
            :on-remove="onQrcodeRemove"
            :on-format-error="onFormatError"
            style="display: inline-block;width:58px;"
            type="drag"
            :on-exceeded-size="onExceededSize">
            <!-- <MyButton type="ghost" :width="110" :height="30" size="small">
              <img :src="upload" class="icon-upload" slot="icon" />
              点击上传
            </MyButton> -->
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-cloud-upload-outline" :size="20" />
            </div>
          </Upload>
        </div>
      </FormItem>
      <FormItem>
        <MyButton :width="200" class="submit" @click="confirm" :disabled="disabled">提交活动</MyButton>
        <MyButton v-if="editAct" :width="200" class="submit" @click="$emit('endEdit')">取消</MyButton>
      </FormItem>
    </iForm>
  </div>
  <Modal title="View Image" v-model="preview.visible">
    <img :src="preview.url" v-if="preview.visible" style="width: 100%">
  </Modal>
</div>
</template>

<script>
import upload from '@/assets/upload';
import iForm from 'iview/src/components/form';
import iInput from 'iview/src/components/input';
import { Select, Option } from 'iview/src/components/select';
import DatePicker from 'iview/src/components/date-picker';
import Icon from 'iview/src/components/icon';
import Modal from 'iview/src/components/modal';
import Upload from 'iview/src/components/upload';
import MyButton from './button';
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

const getImgUrl = file => new Promise(resolve => {
  if (window.FileReader) {
    const fr = new FileReader();
    fr.onloadend = function (e) {
      resolve(e.target.result);
    };
    fr.readAsDataURL(file);
  }
});

export default {
  created () {
    if (this.editAct) {
      this.originForm = Object.assign({}, this.form);
    }
  },
  props: {
    authority: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      default: () => ({
        name: '',
        time: ['', ''],
        location: '',
        campus: [],
        enrollCondition: '',
        sponsor: '',
        type: null,
        pubTime: ['', ''],
        detail: '',
        can_enrolled: 0,

        email: undefined,
        enrollWay: undefined,
        enrollEndTime: undefined,
        reward: undefined,
        introduction: undefined,
        requirement: undefined,

        poster: undefined,
        QRCode: undefined
      })
    },
    editAct: {
      type: Boolean,
      default: false
    },
    reset: {
      type: Boolean
    }
  },
  watch: {
    reset (val) {
      if (val) {
        this.$refs['requiredForm'].resetFields();
        this.$refs['optionalForm'].resetFields();
      }
    }
  },
  components: {
    iInput,
    iForm,
    FormItem: iForm.Item,
    iSelect: Select,
    iOption: Option,
    DatePicker,
    MyButton,
    Upload,
    Icon,
    Modal
  },
  data () {
    return {
      upload,
      preview: {
        visible: false,
        url: null
      },
      qrcodeUploadList: [],
      posterUploadList: [],
      types: ['公益', '体育', '比赛', '讲座', '户外', '休闲', '演出'],
      areas: ['东校区', '南校区', '北校区', '珠海校区'],
      format: ['bmp', 'jpg', 'jpeg', 'png', 'gif'],
      currentTab: 'must',
      dynamicDatePicker: [
        {
          value: ''
        }
      ],
      QRCode: null,
      Poster: null,
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
        campus: {
          trigger: 'change',
          validator (rule, value, cb) {
            if (rules.isEmpty(value)) {
              cb(new Error(errorText.empty()));
            } else {
              cb();
            }
          }
        },
        type: {
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
  computed: {
    disabled () {
      // emmmm 目测这样写很暴力，如果有更好的方法，请重构
      const { isEmpty, istooLong, isEmail } = rules;
      const { form } = this;

      // 先测试必须填是否正确， 否 直接return, 是 进一步
      const isRequiredError = isEmpty(form.name) || istooLong(form.name, 30) ||
                  isEmpty(form.time) ||
                  isEmpty(form.type) ||
                  isEmpty(form.campus) ||
                  isEmpty(form.pubTime) ||
                  isEmpty(form.location) || istooLong(form.location, 100) ||
                  isEmpty(form.sponsor) || istooLong(form.sponsor, 50) ||
                  isEmpty(form.enrollCondition) || istooLong(form.enrollCondition, 50) ||
                  isEmpty(form.detail) || istooLong(form.detail, 150);

      if (isRequiredError) return true;

      // 必填的正确了，测试选填的
      // 如果是游客，还必填一个邮箱
      let isEmailError = false;
      if (this.authority === 'tourist') {
        isEmailError = isEmpty(form.email) || !isEmail(form.email);
      }

      let isOptionError = istooLong(form.enrollWay, 50) || istooLong(form.introduction, 50) || istooLong(form.reward, 30) || istooLong(form.requirement, 50);

      return isEmailError || isOptionError;
    }
  },
  methods: {
    handleView (url) {
      this.preview.visible = true;
      this.preview.url = url;
    },
    handleForm () {
      let form = Object.assign({}, this.form);
      form.startTime = formattedDate(form.time[0]);
      form.endTime = formattedDate(form.time[1]);
      form.pubStartTime = formattedDate(form.pubTime[0]);
      form.pubEndTime = formattedDate(form.pubTime[1]);
      const enrollEndTime = form.enrollEndTime;
      if (enrollEndTime) {
        form.enrollEndTime = formattedDate(enrollEndTime);
      } else {
        delete form.enrollEndTime;
      }
      let campus = 0;
      for (let index of form.campus) {
        campus |= index;
      }
      form.campus = campus;
      delete form.pubTime;
      delete form.time;
      for (const key in form) {
        if (form[key] === undefined) delete form[key];
      }
      return form;
    },
    async confirm () {
      const form = this.handleForm();
      if (this.editAct) {
        // 游客就直接提交表单
        try {
          const id = form.id;
          delete form.id;
          if (form.poster && typeof form.poster !== 'string') {
            await this.uploadFile(form.poster, 'poster', form);
          }
          if (form.qrcode && typeof form.qrcode !== 'string') {
            await this.uploadFile(form.qrcode, 'qrCode', form);
          }
          await this.$http.post('/act/' + id, form, {
            headers: {'Authorization': this.$root.token}
          });
          form.id = id;
          this.$Notice.open({
            title: '修改活动成功'
          });
          this.$emit('endEdit', form);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          if (form.poster && typeof form.poster !== 'string') {
            await this.uploadFile(form.poster, 'poster', form);
          }
          if (form.qrcode && typeof form.qrcode !== 'string') {
            await this.uploadFile(form.qrcode, 'qrCode', form);
          }
          await this.$http.post('/act', form, {
            headers: {'Authorization': null}
          });
          this.$emit('next');
        } catch (err) {
          console.log(err);
        }
      }
    },
    onPosterRemove () {
      this.form.poster = undefined;
      this.posterUploadList = [];
    },
    onQrcodeRemove () {
      this.form.QRCode = undefined;
      this.qrcodeUploadList = [];
    },
    async onBeforePoster (file) {
      this.form.poster = file;
      this.posterUploadList = [];
      this.posterUploadList.push({
        url: await getImgUrl(file),
        name: file.name
      });
      return Promise.reject();
    },
    async onBeforeQrcode (file) {
      this.form.qrcode = file;
      this.qrcodeUploadList = [];
      this.qrcodeUploadList.push({
        url: await getImgUrl(file),
        name: file.name
      });
      return Promise.reject();
    },
    async uploadFile (file, type, form) {
      const formdata = new FormData();
      formdata.append('file', file);
      const { data } = await this.$http.post('/images', formdata, {
        method: 'post',
        headers: {'content-type': 'multipart/form-data'}
      });
      this.form[type.toLowerCase()] = form[type.toLowerCase()] = data.filename;
    },
    onExceededSize (file) {
      this.$Notice.warning({
        title: '超出文件大小限制',
        desc: `文件${file.name}太大，不能超过2M。`
      });
    },
    onFormatError (file) {
      this.$Notice.warning({
        title: '文件格式错啦',
        desc: `文件格式应该为图片的格式`
      });
    }
  }
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  justify-content: flex-start;
  width: 742px;
}

.left-wrapper {
  width: 60px;
  display: flex;
  flex-direction: column;
}

.tab {
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-left: 2px solid #2d8cf0;
  box-sizing: border-box;
  /* color: #2d8cf0; */
  color: white;
  background-color: #f2f2f2;
  cursor: pointer;
}
.tab-must {
  border-top: 2px solid #2d8cf0;
}
.tab-select {
  border-bottom: 2px solid #2d8cf0;
}
.fill {
  flex: 1;
  border-right: 2px solid #2d8cf0;
}

.curTab {
  background-color: #2d8cf0;
  color: #f2f2f2;
}

.right-wrapper {
  width: 91.3%;
  border: 2px solid #2d8cf0;
  border-left: transparent;
  border-radius: 3px;
  padding: 20px 0;
}
.input-size {
  width: 300px;
}
.textarea-size {
  width: 500px;
}
.select {
  width: 100px;
}
.submit {
  margin-left: 26px;
}

.button-removeTime {
  margin-left: 20px;
}

.demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
}
.demo-upload-list img{
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
    display: block;
}
.demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}
</style>
