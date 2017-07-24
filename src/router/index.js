import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const Login = resolve => require(['../pages/login'], resolve);
const tourist = resolve => require(['../pages/tourist/index'], resolve);
const touristHome = resolve => require(['../pages/tourist/children/home'], resolve);

const admin = resolve => require(['../pages/admin/index'], resolve);

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/tourist',
    component: tourist,
    children: [
      {
        path: '',
        component: touristHome
      }
    ]
  },
  {
    path: '/admin',
    component: admin
  }
];

export default new VueRouter({
  routes
});

