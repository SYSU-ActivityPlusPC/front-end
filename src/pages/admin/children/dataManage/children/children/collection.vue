<template>
<div>
  <BreadcrumbNav :config="config"/>
  <button class="copy" data-clipboard-target="#container">复制</button>
  <div id="container">
    <p></p>
    <section style="font-family: 微软雅黑;">
      <section>
        <div>
          <section class="header">
            <p class="title"><strong>今日活动</strong></p>
            <section style="padding: 20px 8px;">
              <section style="background-color: #F4F4F4;">
                <section v-for="(item, i) of types" v-if="activities[i].length > 0" :key="i">
                  <p class="act-type small">{{item}}</p>
                  <article class="act-list">
                    <p v-for="(act, index) of activities[i]" :key="index">{{index + 1}}.　{{act.name}}</p>
                  </article>
                </section>
              </section>
            </section>
          </section>
        </div>
        <div v-for="(item, i) of types" v-if="activities[i].length > 0" :key="i">
          <section style="text-align: center;">
            <section class="act-type-header">
              <section>
                <section class="act-type-border left"></section>
                <section class="clear"></section>
              </section>
              <section class="act-type big">　{{item}}　</section>
              <section>
                <section class="act-type-border right"></section>
                <section class="clear"></section>
              </section>
            </section>
          </section>
          <section class="activity" v-for="(act, index) of activities[i]" :key="index">
            <section class="act-index">
              <section class="point" style="float: left"></section>
              <section class="index-area">{{index + 1}}</section>
              <section class="point" style="float:right;"></section>
            </section>
            <p class="title"><strong>{{act.name}}</strong></p>
            <article class="act-info">
              <p><strong>活动时间：</strong>{{timeToDate(act.startTime)}}-{{timeToDate(act.endTime)}}</p>
              <p><strong>活动地点：</strong>{{act.location}}</p>
              <p v-if="!!act.introduction"><strong>活动简介：</strong>{{act.introduction}}</p>
              <p><strong>活动对象：</strong>{{act.enrollCondition}}</p>
              <p><strong>主办方：</strong>{{act.sponsor}}</p>
              <p><strong>报名方式：</strong>{{act.enrollWay}}</p>
              <p v-if="!!act.enrollEndTime"><strong>报名截止日期：</strong>{{timeToDate(act.enrollEndTime)}}</p>
              <p v-if="!!act.reward" style="color:#1EA8EE;"><strong style="color:black;">活动奖励：</strong>{{act.reward}}</p>
              <p v-if="!!act.requirement"><strong>活动要求：{{act.requirement}}</strong></p>
              <p><strong>活动详情：</strong>{{act.detail}}</p>
              <p v-if="!!act.poster" style="text-align: center;">
                <strong style="display: block;">海报：</strong>
                <img style="max-width: 100%; margin-top: 10px;" :src="imgBase + act.poster + '?type=poster'" />
              </p>
              <p v-if="!!act.qrcode" style="text-align: center;">
                <strong style="display: block;">二维码：</strong>
                <img style="max-width: 100%; margin-top: 10px;" :src="imgBase + act.qrcode + '?type=qrCode'" />
              </p>
            </article>
          </section>
        </div>
        <div>
          <section class="campus-qrcode">
            <section class="qrcode-area">
              <p class="title" style="color: black;"><strong>长按查看更多本校区校活动</strong></p>
              <img class="campus" alt="图片加载失败" v-if="id === 0" :src="east" />
              <img class="campus" alt="图片加载失败" v-if="id === 1" :src="south" />
              <img class="campus" alt="图片加载失败" v-if="id === 2" :src="north" />
              <img class="campus" alt="图片加载失败" v-if="id === 3" :src="zhuhai" />
            </section>
          </section>
        </div>
        <div>
          <section style="height: 30px; text-align:center;">
            <section class="end"><p><span>END</span></p></section>
            <section style="margin-top: -6px;"><p class="line"></p></section>
          </section>
        </div>
        <p style="margin-top: 10px;">
          <img alt="图片加载失败" style="width: 100%;" :src="qrcode" />
        </p>
      </section>
    </section>
    <p><br /></p>
  </div>
</div>
</template>

<script>
import Clipboard from 'clipboard';
import BreadcrumbNav from '@/components/breadcrumbNav';
import TopBar from '@/components/header';
import { setConfig } from '@/utils';
import east from '@/assets/dongxiaoqu.png';
import south from '@/assets/nanxiaoqu.png';
import north from '@/assets/beixiaoqu.png';
import zhuhai from '@/assets/zhuhaixiaoqu.png';
import qrcode from '@/assets/qrcode.png';
export default {
  created () {
    this.config = setConfig.bind(this)();
    this.id = parseInt(this.$route.query.schoolID);
    this.activities = this.$route.params.acts;
  },
  components: {
    BreadcrumbNav,
    TopBar
  },
  data () {
    return {
      collection: '',
      types: ['公益', '体育', '比赛', '讲座', '户外', '休闲', '演出'],
      east,
      south,
      north,
      zhuhai,
      qrcode,
      activities: [],
      imgBase: 'http://119.29.155.194:8080/img/download/'
    };
  },
  mounted () {
    this.clipboard = new Clipboard('.copy');
  },
  beforeDestroy () {
    this.clipboard.destroy();
    this.clipboard = null;
  },
  methods: {
    timeToDate (time) {
      if (time) {
        return new Date(time).toLocaleString();
      }
      return '';
    }
  }
};
</script>

<style scoped>
.copy {
  position: fixed;
  right: 5%;
  top: 20%;
  width: 80px;
  height: 40px;
  line-height: 40px;
  background-color: #1e9be8;
  border: 1px solid #1e9be8;
  cursor: pointer;
  color: white;
  border-radius: 5px;
}

#container {
  margin: 0 auto;
  width: 50%;
  font-size: 16px;
  font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
  background-color: white;
}

.header, .qrcode-area {
  border: 1px dashed black;
  border-radius: 10px;
}

.header {
  margin: 10px;
}

.title {
  padding: 20px 0;
  text-align: center;
  color: #1EA8EE;
  font-size: 18px;
}

.activities {
  background-color: #F4F4F4;
}

.act-type {
  background-color: #1EA8EE;
  color: white;
  text-align: center;
  font-weight: bolder;
}

.small {
  width: 10%;
}

.act-list {
  padding-top: 20px;
  padding-left: 20px;
  font-size: 14px;
}

.act-type-header {
  margin: 0 auto;
  padding: 70px 0;
  display: inline-block;
}

.act-type-border {
  width: 1.5em;
  height: 1.5em;
}

.left {
  float: left;
  border-left: 0.4em solid rgb(198,198,199);
  border-top: 0.4em solid rgb(198,198,199);
}

.right {
  float: right;
  border-bottom: 0.4em solid rgb(198,198,199);
  border-right: 0.4em solid rgb(198,198,199);
}

.clear {
  clear: both;
}

.big {
  margin: 10px 30px;
  font-size: 1.5em;
}

.activity {
  border: 1px solid #1EA8EE;
  margin-bottom: 40px;
}

.act-index {
  background-color: white;
  height: 0.5em;
  width: 20%;
  margin: -0.25em auto;
  text-align: center;
}

.point {
  height: 0.5em;
  width: 0.5em;
  border-radius: 50%;
  background-color: #1EA8EE;
}

.index-area {
  width: 2.5em;
  height: 2.5em;
  line-height: 2.5em;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  margin-top: -1em;
  background-color: #1EA8EE;
  color: white;
  font-weight: bolder;
}

.act-info {
  padding: 10px 10px 30px 10px;
  font-size: 14px;
}

.campus-qrcode {
  background-color: #F4F4F4;
  padding: 18px;
  margin: 30px 0;
}

.qrcode-area {
  text-align: center;
  background-color: white;
  padding: 16px;
}

.campus {
  width: auto;
  height: auto;
}

.end-line {
  height: 30px;
  text-align: center;
}

.end {
  display: inline-block;
  font-size: 14px;
  background-color: white;
  padding: 10px;
}

.line {
  border-top: 1px dashed black;
}
</style>