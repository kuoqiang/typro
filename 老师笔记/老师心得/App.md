### 开发一款APP

> 首先是技术框架的选型
>
> https://www.kancloud.cn/chandler/web_app/98298

1. 原生开发(Native-app)
   1. Android使用java语言
   2. IOS 使用Object C或者swift
2. Hybrid开发(hybrid App)
   1. ionic (基于angular，cordova(phonegap))
   2. react native
   3. weex
   4. flutter
   5. 选择合适的移动端UI框架Framework7，weui，vux，ant-design-mobile，vonic
3. Web App
   1. Angularjs, Angular
   2. React
   3. vue
   4. Dojo2
   5. ember
   6. Aurelia
   7. d3, threejs
4. 常见的几个名词
   1. IDE: 集成开发环境，如`vs，eclipse，Xcode`都是，一般包括代码的编辑，编译，调试等； 我们的`vscode，nodepad++ `只是文本编辑器
   2. SDK： 软件开发工具包，辅助开发一类软件的文档，api，范例和工具的集合叫SDK；例如在安卓中的叫做android SDK
   3. NDK： 和android SDK差不多，是专门给安卓手机开发软件使用的； 区别是它用的是C语言，而android SDK用的是Java语言
   4. JDK： JAVA开发人员使用的sdk
5. 参考文档
   1. `http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html`





#### 三种APP的区别

1. Web APP
  Web App 指采用Html5语言写出的App，不需要下载安装。类似于现在所说的轻应用。生存在浏览器中的应用，基本上可以说是触屏版的网页应用。
  优点
  （1）开发成本低，
  （2）更新快，
  （3）更新无需通知用户，不需要手动升级
  （4）能够跨多个平台和终端。
  缺点：
  （1）临时性的入口
  （2）无法获取系统级别的通知，提醒，动效等等
  （3）用户留存率低
  （4）设计受限制诸多
  （5）体验较差
2. Hybrid App
  Hybrid APP指的是半原生半Web的混合类App。需要下载安装，看上去类似Native App，但只有很少的UI Web View，访问的内容是 Web 。
  例如Store里的新闻类APP，视频类APP普遍采取的是Native的框架，Web的内容。
  Hybrid App 极力去打造类似于Native App 的体验，但仍受限于技术，网速，等等很多因素。尚不完美。
3. Native App
  Native APP 指的是原生程序，一般依托于操作系统，有很强的交互，是一个完整的App，可拓展性强。需要用户下载安装使用。
  优点：
  （1）打造完美的用户体验
  （2）性能稳定
  （3）操作速度快，上手流畅
  （4）访问本地资源（通讯录，相册）
  （5）设计出色的动效，转场，
  （6）拥有系统级别的贴心通知或提醒
  （7）用户留存率高
  缺点：
  （1）分发成本高（不同平台有不同的开发语言和界面适配）
  （2）维护成本高（例如一款App已更新至V5版本，但仍有用户在使用V2， V3， V4版本，需要更多的开发人员维护之前的版本）
  （3）更新缓慢，根据不同平台，提交–审核–上线 等等不同的流程，需要经过的流程较复杂