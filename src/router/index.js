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

const adminCommunityManageNotice = resolve => require(['../pages/admin/children/communityManage/children/notice/index'], resolve);
const adminCommunityManageNoticeDefault = resolve => require(['../pages/admin/children/communityManage/children/notice/children/default'], resolve);
const adminCommunityManageNoticeSent = resolve => require(['../pages/admin/children/communityManage/children/notice/children/sent'], resolve);

const adminCommunityManageApplication = resolve => require(['../pages/admin/children/communityManage/children/application/index'], resolve);
const adminCommunityManageApplicationDefault = resolve => require(['../pages/admin/children/communityManage/children/application/children/default'], resolve);
const adminCommunityManageApplicationDetail = resolve => require(['../pages/admin/children/communityManage/children/application/children/detail'], resolve);
const adminCommunityManageDetail = resolve => require(['../pages/admin/children/communityManage/children/detail'], resolve);

const adminDataManage = resolve => require(['../pages/admin/children/dataManage/index'], resolve);

const community = resolve => require(['../pages/community/index'], resolve);
const communityHome = resolve => require(['../pages/community/children/home'], resolve);
const communityActivityManage = resolve => require(['../pages/community/children/activityMange/index'], resolve);
const communityActivityManageDefault = resolve => require(['../pages/community/children/activityMange/children/default'], resolve);
const communityActivityManageSignup = resolve => require(['../pages/community/children/activityMange/children/signup'], resolve);

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
        path: 'data',
        meta: {
          name: '/首页/数据管理'
        },
        component: adminDataManage
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
            component: adminCommunityManageNotice,
            children: [
              {
                path: '',
                meta: {
                  name: '/首页/社团管理/通知社团'
                },
                component: adminCommunityManageNoticeDefault
              },
              {
                path: 'sent',
                meta: {
                  name: '/首页/社团管理/通知社团/已发送'
                },
                component: adminCommunityManageNoticeSent
              }
            ]
          },
          {
            path: 'application',
            component: adminCommunityManageApplication,
            children: [
              {
                path: '',
                meta: {
                  name: '/首页/社团管理/注册申请'
                },
                component: adminCommunityManageApplicationDefault
              },
              {
                path: 'detail/:id',
                meta: {
                  name: '/首页/社团管理/注册申请/注册详情'
                },
                component: adminCommunityManageApplicationDetail
              }
            ]
          },
          {
            path: 'detail/:id',
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
      },
      {
        path: 'activity',
        component: communityActivityManage,
        children: [
          {
            path: '',
            component: communityActivityManageDefault,
            meta: {
              name: '/首页/活动管理'
            }
          },
          {
            path: 'signup',
            component: communityActivityManageSignup,
            meta: {
              name: '/首页/活动管理/报名管理'
            }
          }
        ]
      }
    ]
  }
];

export default new VueRouter({
  routes
});

