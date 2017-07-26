import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const Login = resolve => require(['../pages/login'], resolve);
const tourist = resolve => require(['../pages/tourist/index'], resolve);
const touristHome = resolve => require(['../pages/tourist/children/home'], resolve);
const touristPublish = resolve => require(['../pages/tourist/children/publish/index'], resolve);

const admin = resolve => require(['../pages/admin/index'], resolve);
const adminHome = resolve => require(['../pages/admin/children/home'], resolve);
const adminCommunityManage = resolve => require(['../pages/admin/children/communityManage/index'], resolve);
const adminCommunityManageDefault = resolve => require(['../pages/admin/children/communityManage/children/default'], resolve);
const adminCommunityManageNotice = resolve => require(['../pages/admin/children/communityManage/children/notice'], resolve);
const adminCommunityManageApplication = resolve => require(['../pages/admin/children/communityManage/children/application'], resolve);
const adminCommunityManageDetail = resolve => require(['../pages/admin/children/communityManage/children/detail'], resolve);

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
        meta: {
          name: '/首页'
        },
        component: touristHome
      },
      {
        path: 'publish',
        meta: {
          name: '/首页/发布活动'
        },
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
        meta: {
          name: '/首页'
        },
        component: adminHome
      },
      {
        path: 'community',
        component: adminCommunityManage,
        children: [
          {
            path: '',
            meta: {
              name: '/首页/社团管理'
            },
            component: adminCommunityManageDefault
          },
          {
            path: 'notice',
            meta: {
              name: '/首页/社团管理/通知社团'
            },
            component: adminCommunityManageNotice
          },
          {
            path: 'application',
            meta: {
              name: '/首页/社团管理/注册申请'
            },
            component: adminCommunityManageApplication
          },
          {
            path: 'detail',
            meta: {
              name: '/首页/社团管理/社团信息'
            },
            component: adminCommunityManageDetail
          }
        ]
      }
    ]
  },
  {
    path: '/community',
    component: community,
    children: [
      {
        path: '',
        meta: {
          name: '/首页'
        },
        component: communityHome
      }
    ]
  }
];

export default new VueRouter({
  routes
});

