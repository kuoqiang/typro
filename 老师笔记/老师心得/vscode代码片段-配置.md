vscode 设置代码片段

1. vscode常用插件

   1. auto close tag  自动闭合标签
   2. Chinese (Simplified) Language  vvscode中文插件
   3. JavaScript (ES6) code snippets  es6代码片段自动补全
   4. open in browser
   5. Path Intellisense  路径补全
   6. Prettier - Code formatter
   7. TSLint
   8. Vetur， Vue 2 Snippets，  Vue VSCode Snippets
   9. eslint
   10. HTML Snippets   html代码提示自动填充
   11. Material Icon Theme  图标主题

2. 常见配置

   1. 窗口缩放级别  和 字体大小

   2. 字体配置 

      1. 英文是Consolas，中文字体是微软雅黑，monospace是 等宽字符
         - "editor.fontFamily": "Consolas, 'Microsoft YaHei', monospace",

   3. 配置文件关联

      ```
      对于不常用的文件我们采用什么对应的语言处理高亮提升等功能
      "files.associations": {
        "*.wxss": "css",
        "*.wxml": "html"
      },
      ```

   4. 通过 `prettier` 格式化代码，然后将结果传递给 `eslint --fix`。 这样，你可以获得 `prettier` 优于格式化功能的优势，但也可以从 `eslint`的配置功能获益。

   5. prettier

      ```
      先下载插件，然后设置配置文件，开启保存时格式化代码，然后将默认的格式化工具采用prettier-vscode
      https://prettier.io/docs/en/options.html
      
      "[javascript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      
      可配置规则较少
      ```

   6. vuter配置

      ```
      格式化vue里面的相关项目 js，html， css等
      https://vuejs.github.io/vetur/formatting.html#formatters
      vetur.format.defaultFormatter. xxx  就是vuter这个插件去格式化html,css,postcss,scss,less,stylus,js,ts使用的格式化工具
      一般有这几种 prettier, prettier-eslint, prettyhtml, vscode-typescript
      
      下面标签格式化vue文件里面的js 使用prettier 插件
      "vetur.format.defaultFormatter.js": "prettier",
      
      //下面表示格式化是自定义的一些配置项
      "vetur.format.defaultFormatterOptions": {
          "prettier": {
            "semi": false,
            "singleQuote": true
          }
        }
      ```

   7. eslint规则配置

      ```
      https://eslint.bootcss.com/docs/rules/no-console/
      https://cn.eslint.org/docs/rules/
      // 常见规则配置
      https://blog.csdn.net/chuangjikuang3698/article/details/101058423
      
      .eslintrc.js
      
      rules 规则  0 1 2
      "off"或者0    //关闭规则
      "warn"或者1    //在打开的规则作为警告（不影响退出代码）
      "error"或者2    //把规则作为一个错误（退出代码触发时为1）
      ```



3. CRLF 和 LF

   1. 操作系统不同导致默认换行符不一样

   2. “回车”（**CR**，Carriage Return）和“换行”（**LF**，Line Feed）

   3. 差异:

      Windows系统下文本文件的换行符是： 回车+换行CR/LF即 \r\n或^M\n

      linux/unix系统下文本文件的换行符是：换行LF即 \n

      Mac OS系统下文本文件的换行符：回车CR即 \r或^ 这是老版本的，最新的MAC系统也改为了\n， 和linux一样

   4. **Unix系统里，每行结尾只有“<换行>”，即"\n"；**
      **Mac系统里，每行结尾是“<回车>”，即"\r"；**
      **Windows系统里面，每行结尾是“<换行><回车 >”，即“\n\r”。**

   5. 一个直接后果是，Unix/Mac系统下的文件在 Windows里打开的话，所有文字会变成一行；而Windows里的文件在Unix/Mac下打开的话，在每行的结尾可能会多出一个^M符号。





### Vue配置文件的修改

```
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
  sourceType: 'module',
  "allowImportExportEverywhere": true  //ignore eslint error: 'import' and 'export' may only appear at the top level
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  'rules': {
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
  }
}
```



### eslint plugin和extend的区别

+ <https://gist.github.com/rswanderer/29dc65efc421b3b5b0442f1bd3dcd046>

+ ```
  plugin与extend的区别：extend提供的是eslint现有规则的一系列预设
  而plugin则提供了除预设之外的自定义规则，当你在eslint的规则里找不到合适的的时候就可以借用插件来实现了
  ```

+ 常见的规则