import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const Login = resolve => require(['../pages/login'], resolve);
const tourist = resolve => require(['../pages/tourist/index'], resolve);
const touristHome = resolve => require(['../pages/tourist/children/home'], resolve);
const touristPublish = resolve => require(['../pages/tourist/children/publish/index'], resolve);

const admin = resolve => require(['../pages/admin/index'], resolve);
const adminHome = resolve => require(['../pages/admin/children/home'], resolve);

const community = resolve => require(['../pages/community/index'], resolve);
const communityHome = resolve => require(['../pages/community/children/home'], resolve);

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
      },
      {
        path: 'publish',
        component: touristPublish
      }
    ]
  },
  {
    path: '/admin',
    component: admin,
    children: [
      {
        path: '',
        component: adminHome
      }
    ]
  },
  {
    path: '/community',
    component: community,
    children: [
      {
        path: '',
        component: communityHome
      }
    ]
  }
];

export default new VueRouter({
  routes
});

