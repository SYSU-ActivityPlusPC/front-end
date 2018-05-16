// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App';
import router from './router';
import 'iview/dist/styles/iview';
import '@/style/animate';
import '@/style/common';
import Notice from 'iview/src/components/notice';
import axios from 'axios';
Vue.config.productionTip = false;
// 全局挂载公用变量或者函数或者工具

let base = 'https://sysuactivity.com/api';
if (process && process.env.NODE_ENV !== 'production') {
  base = '/api';
}

Vue.prototype.$http = axios.create({
  baseURL: base
});

// Vue.prototype.$http = axios;
Vue.prototype.$iview = 'iview/src/components';
Vue.prototype.$Notice = Notice;
Vue.use(VueLazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
