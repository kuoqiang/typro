### Babel是什么

1. 就是标准语法在更新，但是浏览器各厂商并没有完全支持， 所以要想使用新的标准语法，必须使用工具将新语法浏览器不认的语法， 转换为浏览器认识的；babel工具就是干这个的 ES6/ES7/ES8 => Babel => ES5



### preset,plugin,stage-x

1. preset:  Babel团队将ES2015的很多个transform plugin集成到babel-preset-xx里面，
   1. `babel-preset-env` 这个是最新的使用方式，引入这个(同babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017结合到一起，表现的一致)
2. stage-x:  stage-x分别代表的是stage-0、stage-1、stage-2、stage-3进入EMAC标准之前的4个阶段
3. plugin:  



### babel-polyfill "垫片"

1. 把旧的浏览器想象成为一面有了裂缝的墙.这些 `polyfill`(腻子) 会帮助我们把这面墙的裂缝抹平,还我们一个更好的光滑的墙壁 (浏览器)
2. Babel编译时只编译语法，并不会编译BOM不兼容的API，如：`async ，Set，Symbol，Promise`等，`babel-polyfill`会把这些没有的API全部挂载到全局对象，也就是所谓的“垫片”。
   1. 优点： 引入所有的`api`，一劳永逸
   2. 缺点：`babel-polyfill`比较简单粗暴，在引入的同时，也污染了全局对象，导致无效增加了很多用不到的`polyfill`，也可能会污染子模块的变量引用，可能导致不必要的冲突



### babel-tuntime和babel-plugin-transform-runtime

1.  `babel-runtime和babel-polyfill`有点类似，都是去兼容新API的“垫片”，它和`babel-polyfill`最大的不同就是可以做到按需引用，哪里需要什么就用什么，比如我需要Promise。一般在生成环境，首先安装依赖，然后引入：

   1. ```
      npm install --save babel-runtime;
      
      import Promise from 'babel-runtime/core-js/promise';
      ```

2. `babel-plugin-transform-runtime`如果用babel-runtime，如果我10个文件要引用Promise，难道每个文件都得写个babel-runtime的Promise引入么，显然很麻烦。那么babel-plugin-transform-runtime就是用来解决这个问题的，无论你多少个文件引入了相关新的API，它只会存在一份，babel-plugin-transform-runtime本质上依赖于babel-runtime的core-js，在编译的时候会帮你自动处理，在开发环境安装依赖：

   ```
   安装一个库; 避免编译时重复引入
   npm install --save-dev babel-plugin-transform-runtime
   
   在修改配置文件 .babelrc
   {
     "plugins": [
       "transform-runtime" 
     ]
   }
   ```