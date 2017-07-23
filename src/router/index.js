import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const Login = resolve => require(['../pages/login'], resolve);

const routes = [
  {
    path: '/',
    component: Login
  }
];

export default new VueRouter({
  routes
});

