####  中大活动PC前端

####  启动

+ ` git clone git@github.com:Juliiii/sysu-activity.git`

+ ` npm install`

+ ` npm run dev` （本地开发）
+ ` npm run build` （打包上线）
####  技术栈

+ Vue
+ axios (用于与服务器发送http请求)
+ ivew (UI框架)
(目前是这么多，如果有需要各个组件共享一些数据的话，可以考虑使用 vuex)

####  目前完成
目前完成了绝大部分的UI

####  近期任务
+ 与后端对接api，并完善UI和交互
+ 2017-10-8, docs文件夹里有api文档, 红色部分为待做，除了登录和发布活动外。

####  项目结构
[可以看这里](https://jsfiddle.net/cgshbr3f/16/)

由于当时我一个人开发，按照我的想法，是将各种资源放在自己应该在的文件夹。比如全局的css放在style，icon放在assets, 可复用的组件放在 components， 页面放在pages。。。现在有个比较不好的地方，当时没考虑到扁平化的问题，页面的文件夹，可能有点深，你们看起来可能有点不舒服。。。这是我的错。。

####  PS
即将接手的两位同事，最近你们可以先看看vue的使用，然后看看项目的代码。。目前项目的代码除了pages文件夹可能有点蛋疼外，其余其实基本没写什么js代码，基本是css和html，所以你们看起来应该不会有很大的问题。
