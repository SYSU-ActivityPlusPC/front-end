// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App';
import router from './router';
import 'iview/dist/styles/iview';
import '@/style/animate';
import '@/style/common';
import axios from 'axios';
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$iview = 'iview/src/components';

Vue.use(VueLazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
