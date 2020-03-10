### WebAPP相关

1. ng项目启动

   ```javascript
   npm install @angular/cli -g
   ng new shop --directory 1903_Angular7 --style scss
   ng serve --port 3001
   ng build
   ```



### Vue脚手架 @vue/cli (https://cli.vuejs.org/zh/guide/)

1. 不管2.x 还是3.x都是使用的webpack构建，外在的一些表现形式不一样而已

2. 使用3.x的脚手架  `npm install @vue/cli -g` 安装全局的脚手架命令

3. 创建一个项目 `vue create test` 这里的默认配置有很多

   1. ```
      使用vue create 创建项目时，它的一些默认配置在 ~/.vuerc配置文件里面
      1. 里面可以修改一些babel的配置，如preset
      2. 手动选择包管理器 yarn， npm，cnpm 等配置的书写叫packageManager
      3. 使用 vue create --help 查看其他的一些命令, 配置指定的npm客户端，指定需要的npm源
      4. 使用 vue create hello 即可， 一些配置在.vuerc配置文件里面更改，如useTaobaoRegistry改为true， packageManager从yarn改为npm
      ```

      

      ```
      npm install @vue/cli -g    3.X
      vue create shopapp
      yarn serve  ==== npm run serve
      还有一个gui的启动项目   vue ui
      yarn add axois --save === npm install axios --save
      
      // 如果想使用vue-cli 2.x 的脚手架模板 （里面有webpack的配置文件，3.x没有）， 安装一个工具
      npm install -g @vue/cli-init
      vue init webpack my-project
      // `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
      ```

      

   2. 1123



3. 路由懒加载

   1. 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了

   2. 把组件按组分块

      ```
      // 有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name
      const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
      const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
      const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
      ```

      


### npm、yarn的区别

1. 从github上面clone一个项目后本地运行两种方式

   ```
   // 使用npm
   git clone xxx
   npm install
   npm run dev
   
   // 使用yarn
   git clone xxx
   yarn
   yarn start
   ```

2. yarn 也是js包管理工具， 有google和facebook联合开发

3. npm安装包的一些坑

   1. `npm install`的时候巨慢。特别是新的项目拉下来要等半天，删除node_modules，重新install的时候依旧如此

   2. 同一个项目，安装的时候**无法保持一致性**。由于package.json文件中版本号的特点

      ```
      "1.0.1", 表示安装指定的1.0.1版本
      "~1.0.1", 表示安装指定的1.0.x 中的最新版本
      "^1.0.1" 表示安装指定的1.x.x中最新的版本
      ```

4. 目前npm更新到了5.0+之后， 已经解决了上面大部分问题，甚至有些优化比yarn还好，所以使用稳定的高级的npm就足够了

   1. yarn的不同 yarn 在下载模块或包时，命令行输出的信息更加简洁
   2. npm是 队列挨个下载，一个下载完成后，再下载另一个
   3. yarn是将要下载的包进行同时下载
   4. npm版本5.0 之后，会自带package.lock.json 文件，该文件主要描述了你项目中安装的包都是哪一个版本，你再进行npm install 的话，会安装指定版本的包。
      yarn 一直都有lock 文件，功能和npm 的package.lock.json差不多。

5. 常见命令对比

   ```
   npm install ====  yarn
   npm install vue --save === yarn add vue
   ```

   



