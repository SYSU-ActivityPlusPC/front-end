import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const Login = resolve => require(['../pages/login'], resolve);
const Regist = resolve => require(['../pages/regist'], resolve);
const registSuccess = resolve => require(['../pages/regist/success'], resolve);

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
const adminDataManageHome = resolve => require(['../pages/admin/children/dataManage/children/home'], resolve);
const collection = resolve => require(['../pages/admin/children/dataManage/children/children/collection'], resolve);

const adminPublish = resolve => require(['../pages/admin/children/publish/index'], resolve);

const community = resolve => require(['../pages/community/index'], resolve);
const communityHome = resolve => require(['../pages/community/children/home'], resolve);

const communityActivityManage = resolve => require(['../pages/community/children/activityMange/index'], resolve);
const communityActivityManageDefault = resolve => require(['../pages/community/children/activityMange/children/default'], resolve);
const communityActivityManageSignup = resolve => require(['../pages/community/children/activityMange/children/signup'], resolve);
const communityActivityManageDetail = resolve => require(['../pages/community/children/activityMange/children/detail'], resolve);
const communityPublish = resolve => require(['../pages/community/children/publish/index'], resolve);

const routes = [
  {
    path: '/',
    meta: {
      noAuth: true
    },
    component: Login
  },
  {
    path: '/regist',
    meta: {
      noAuth: true
    },
    component: Regist
  },
  {
    path: '/regist-success',
    meta: {
      noAuth: true
    },
    component: registSuccess
  },
  {
    path: '/tourist',
    meta: {
      noAuth: true
    },
    component: tourist,
    children: [
      {
        path: '',
        meta: {
          name: '/首页',
          noAuth: true
        },
        component: touristHome
      },
      {
        path: 'publish',
        meta: {
          name: '/首页/发布活动',
          noAuth: true
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
        children: [
          {
            path: '',
            meta: {
              name: '/首页/数据管理'
            },
            component: adminDataManageHome
          },
          {
            path: 'collection',
            meta: {
              name: '/首页/数据管理/推送'
            },
            component: collection
          }
        ],
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
      },
      {
        path: 'publish',
        meta: {
          name: '/首页/发布活动'
        },
        component: adminPublish
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
            path: 'signup/:actId',
            component: communityActivityManageSignup,
            meta: {
              name: '/首页/活动管理/报名管理'
            }
          },
          {
            path: 'detail/:actId',
            component: communityActivityManageDetail,
            meta: {
              name: '/首页/活动管理/活动详情'
            }
          }
        ]
      },
      {
        path: 'publish',
        component: communityPublish,
        meta: {
          name: '/首页/发布活动'
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/admin/'
});

router.beforeEach((to, from, next) => {
  // 需要登录的页面需要在每次进入时进行登录验证
  if (!to.meta.noAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      const expires = parseInt(localStorage.getItem('expires'));
      if (expires > +new Date()) {
        next();
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
        localStorage.removeItem('name');
        localStorage.removeItem('logo');
        next({
          path: '/',
          query: {redirect: to.fullPath}  // 将进入的页面的路由path作为参数，登录成功后跳转回原页面
        });
      }
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      });
    }
  } else {
    next();
  }
});

export default router;
