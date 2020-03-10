### TypeScript开发环境

   1. 使用命令 `npm install -g typescript`; 以上命令会在全局环境下安装 `tsc` 命令，安装完成之后，我们就可以在任何地方执行 `tsc` 命令了； 在命令行里面编译一个Typescript文件 `tsc hello.ts`

   2. 在我们没有一个完整的ts项目时，我们学习的时候也不推荐使用这种方式，效率比较低，下面就是使用vscode搭建ts的编译环境，然我们可以快速的学习一些简单的ts概念和语法

      ```
      1. npm install typescript -g
      2. tsc -V   //这里打印一个版本号就表示全局的ts安装成功
      3. 新建一个目录test， 然后在当前目录下面使用 tsc --init  // 这里就会生成一个tsconfig.json配置文件
      // https://www.cnblogs.com/zaihuilou/p/9556373.html  tsconfig.json的详细配置文件
      4. 将这个配置文件改为
      {
        "compilerOptions": {
          "target": "es5", 
          "module": "commonjs",       
          "outDir": "./js", 
          "rootDir": "./ts", 
          "esModuleInterop": true                   
        }
      }
      5. 然后在我们的test目录下面新建 js目录和 ts目录
      6. 在ts目录里面新建一些 后缀名为ts的文件，然后点击vscode上面的  终端--> 运行任务 --> tsc:watch 实时监听这个ts文件； 最后就会发现在js文件夹里面生成对应的js文件
      手动编译比较麻烦，我们希望的时代码保存以后，自动编译  ctrl+shift+B也就是打开运行任务
      ```

   3. 代码检查 eslint

      1. 使用eslint检查我们的代码，是根据eslint配合根目录下面.eslintrc.js文件里面的一些配置规则，在我们保存编辑器的时候就相当于我们手动执行eslint xxx, 提高了开发效率

      2. 然后集成到我们的vscode编辑器中，最新的配置插件是 @typescript-eslint/eslint-plugin， @typescript-eslint/parser； 之前的两个 lint 解决方案都将弃用

         ```
         这个要是没有使用脚手架的项目，我们自己还是需要创建一些结构
         npm init -y
         eslint --init  // 里面第一个选项要选择第三个 ，强制性代码风格
         Airbnb代码风格 (还有两个是standard， Google)
         
         // 报错BaseConfig的错误， 就需要安装一下本地的typescript， 使用npm install typescript --save-dev
         ```

      3. 对于一些代码检查规则的使用

         ```
         rules 规则  0 1 2
         "off"或者0    //关闭规则
         "warn"或者1    //在打开的规则作为警告（不影响退出代码）
         "error"或者2    //把规则作为一个错误（退出代码触发时为1）
         
         针对使用AirBnB的代码样式，让我们的代码风格一致
         这种改变规则的方式有四种
         1. 
         /*eslint max-len: ["error", { "code": 80 }]*/
         2.
         在eslintrc.js配置文件的rules规则里面也可以设置， 如下示例
         rules: {
           'linebreak-style': 0,
           'no-console': 0,
           'prefer-const': 1,
           'max-len': [1, 160]
         }
         3.对具体的某一行代码禁用该功能
         /*eslint-disable no-param-reassign*/
         function (el) {
           el.expando = {};
         }
         /*eslint-enable no-param-reassign*/
         4. 针对某一行使用该规则
         function (el) {
           el.expando = {}; // eslint-disable-line no-param-reassign
         }
         ```

      4. prettier使用

         ```
         Prettier 聚焦于代码的格式化，通过语法分析，重新整理代码的格式，让所有人的代码都保持同样的风格
         
         错误说发：eslint着重于检查，prettier着重于自动修改
         
         
         样式相关的规则（比如缩进、分号等），这些规则应该交给更专业的 Prettier 来处理
         在vscode中使用代码的样式格式化，只需要按照prettier插件； 然后在项目的根目录设置一个文件prettier.config.js (或者设置 为prettier.config.js)
         然后在文件里面写一些自定义的规则方案，例如
         module.exports = {
             // 一行最多 100 字符
             printWidth: 100,
             // 使用 4 个空格缩进
             tabWidth: 4,
             // 不使用缩进符，而使用空格
             useTabs: false,
             // 行尾需要有分号
             semi: true,
             // 使用单引号
             singleQuote: true,
             // 对象的 key 仅在必要时用引号
             quoteProps: 'as-needed',
         }
         ```

      5. 名称解释

         1. Airbnb
            - Airbnb 是其中一個最流行的 JavaScript 代碼規範，它差不多包含所有 JavaScript 的角度
            - 最近的库是  最基本的 `eslint-config-airbnb-base `包含了`ECMAScript 6 + 的 ESLint `代碼規範
            - 非常完善的是 `eslint-config-airbnb`
            - 相关风格文档 `https://github.com/airbnb/javascript`
         2. Standard
            - 除了 Airbnb 的代碼規範之外，有很多高科技公司在用 Standard 的代碼規範，包括但不限於 `NPM, Github, mongoDB`
            - 使用 `eslint-config-standard`
         3. Google
            - google工程师写代码的风格  ` eslint-config-google`
         4. 各种写代码的风格， 让我们写代码不仅仅是一种手艺，而是一种艺术。不管有多少个人维护一个项目，都应该看起来像是同一个人写的代码

      6. eslint自动格式化代码

         1. 在用户的`settings.json`配置文件里面的`"eslint.validate"`这个属性里面

            ```
            如果直接写typescript，就只会检查
            如果写上
            {
              "language": "typescript",
              "autoFix": true
            },
            那么eslint既会自动检查，又会自动格式化代码
            ```

      7. eslint的风格代码

         1. 腾讯的 [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

         2. 常见的解析器 `babel-eslint, vue-eslint-parser, @typescript-eslint/parser`

         3. `extends: [eslint:recommended]` 这个是内置的默认规则；包含了一系列核心规则

         4. <https://juejin.im/post/5cf5dfe2f265da1bd522baaa#heading-0>

         5. ESLint 原生的规则和 `eslint-plugin-typescript` 的规则太多了，而且原生的规则有一些在 TypeScript 中支持的不好，需要禁用掉。

            这里推荐使用 [AlloyTeam ESLint 规则中的 TypeScript 版本](https://github.com/AlloyTeam/eslint-config-alloy#typescript)，它已经为我们提供了一套完善的配置规则

      8. tsconfig.json的module属性

         1. `"None"`，`"CommonJS"`，`"AMD"`，`"System"`，`"UMD"`，`"ES6"`或`"ES2015"`。
            ? 只有 `"AMD"`和`"System"`能和`--outFile`一起使用。
            ?`"ES6"`和`"ES2015"`可使用在目标输出为`"ES5"`或更低的情况下







> 供参考文献

- <https://nice.lovejade.cn/zh/article/beautify-vue-by-eslint-and-prettier.html>
- <http://www.alloyteam.com/2017/08/13065/> 针对react，vue的风格配置

