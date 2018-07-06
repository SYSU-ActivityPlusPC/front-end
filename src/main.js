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
import Message from 'iview/src/components/message';
import axios from 'axios';
Vue.config.productionTip = false;
// 全局挂载公用变量或者函数或者工具

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? '/api' : 'https://www.sysuactivity.com/api'
});

// 给axois的实例添加响应拦截器，用于判断发生的错误，如果是401说明失去权限，进行页面跳转。
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const res = error.response;
    if (res.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('expires');
      localStorage.removeItem('name');
      localStorage.removeItem('logo');
      router.replace({path: '/', query: {redirect: router.currentRoute.fullPath}});
    }
    return Promise.reject(res);
  }
);

Vue.prototype.$http = axiosInstance;
Vue.prototype.$iview = 'iview/src/components';
Vue.prototype.$Notice = Notice;
Vue.prototype.$Message = Message;
Vue.use(VueLazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    const token = localStorage.getItem('token');
    if (token) {
      const expires = parseInt(localStorage.getItem('expires'));
      if (expires > +new Date()) {
        this.token = token;
        this.name = localStorage.getItem('name');
        this.logo = localStorage.getItem('logo');
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
        localStorage.removeItem('name');
        localStorage.removeItem('logo');
      }
    }
    this.imgBase = 'https://www.sysuactivity.com/static/';
  }
});
