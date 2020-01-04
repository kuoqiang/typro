# vue脚手架搭建

Vue脚手架用于快速生成Vue项目基础架构

  ###  	Vue3.x 版本创建脚手架

```js
方法一 
 vue create 文件名         //创建一个vue项目
 cd  文件名   				//进入文件内部
 npm run serve  		  //运行vue项目

方法二
  vue UI
  关于ESlint配置文件选择 ESlint + Standard config
```



###  	文件创建 

```javascript
vue create  文件名 


 mode:"history"     //历史模式
<router-link>
router-link 中tag属性表示它最终被渲染为什么标签，默认为<a>标签 
```



#### 关于ESlint

```
ESLint 是 Nicholas C. Zakas 主导开发的一个 JavaScript 代码静态分析工具，它既具有 JSHint 的高度可配置性，同时也通过插件机制完整支持了 ES6 语法以及 JSX，甚至通过插件机制可以支持任意阶段的 ECMAScript 特性，同时还可以自定义规则。近些年 ESLint 及其生态也是非常活跃。连 Microsoft 都通过 typescript-eslint 项目让 ESLint 可以支持 TypeScript 的分析。
```



#### Vue脚手架生成的项目结构分析

```js
node_modules		//依赖包目录
public 				//静态资源目录
src					//组件源码目录
babel.config.js		//Babel配置文件
```



#### Vue脚手架自定义配置

```js
1.通过pacjage.json配置项目
	//必须是符合规范的json语法
 "vue":{
     "devServer":{
         "port":8888,
         "open":true
     }
 }
*注意:不推荐使用这种配置方式。因为package.json主要用来管理包的配置信息;为了方便维护，推荐将vue脚手架相关的配置，单独定义到vue.config.js配置文件中

2.通过单独的配置文件配置项目
 	(1).在项目根目录创建文件vue.config.js
	(2).在该文件中进行相关配置，从而覆盖默认配置
	//vue.config.js
	module.exports = {
        devServer:{
            port:8888,
            open:true
        }
    }
```

