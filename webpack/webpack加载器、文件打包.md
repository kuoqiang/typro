 #### 通过loader打包非js模块

```
在实际开发过程中，webpack默认只能打包处理以.js后缀名结尾的模块，其他非.js后缀名结尾的模块，webpck默认处理不了，需要调用loader加载器蔡可以正常打包，否则会报错!

less-loader  可以打包处理.less相关的文件
sass-loader  可以打包处理.scss相关的文件
url-loader   可以打包处理css中与url路径相关的文件
```



##### loader 的调用过程

![image-20200103203935851](C:\Users\小win\AppData\Roaming\Typora\typora-user-images\image-20200103203935851.png)



#### webpack中加载器的基本使用

```js
1.打包处理css文件
 npm install style-loader css-loader -D  //安装处理css文件的loader
 在webpack.config.js的module -> rules中，添加规则
 //所有第三方文件模块的匹配规则
 module:{
     rules:[
         {
             test:/\.css$/,
             use:['style-loader','css-loader']
         }//其中test表示匹配的文件类型，use表示对应要调用的加载器
     ]
 }
**注意: use数组中指定的loader顺序是固定的
	   多个loader 的调用顺序是:从后往前调用
       
2.打包处理less文件
	npm install less-loader less -D'
	rules:[
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
    ]

3.打包处理scss文件
	npm install sass-loader node-sass -D
	rules:[
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
    ]

4.打包处理样式表中的图片和字体文件
	npm install url-loader file-loader -D
	rules:[
        {   			        test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
 use:'url-loader?limit=16940'           
        }
    ]

注意:其中?之后的是loader的参数项
	limit用来指定图片的大小，单位是字节(byte),只有小于limit数	 值的图片,才会被转为base64图片
```



#### postCSS自动添加css的兼容前缀

```js 
	npm install postcss-loader autoprefixer -D 
	在项目根目录中创建postcss的配置文件postcss.config.js，并初始化如下配置:
	const autoprefixer = require('autoprefixer')	//导入自动添加前缀的插件
	module.exports = {
		plugin:[autoprefixer]	//挂载插件
	}
	在rules中加入规则
    rules:[
        {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']}
    ]
```



#### 打包处理js的高级语法

```js
1.安装babel转换器相关的包
npm install babel-loader @babel/core @babel/runtime -D
2.安装babel语法插件相关的包
npm install @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-calss-properties -D
3.在项目根目录中，创建 babel 配置文件 babel.config.js 并初始化基本配置如下
	module.exports = {
        presets:['@babel/preset-env'],
        plugins:['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
    }
4.添加rules规则
 rules:[
     {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
     //exclude为排除项，表示babel-loader不需要处理 node_modules 中的js文件
 ]
```



#### 配置vue的加载器

```js
1. 	npm install vue-loader vue-template-compiler -D 命令
2.	在 webpack.config.js配置文件中，添加vue-loader 的配置项如下
    const VueLoaderPlugin = require('vue-loader/lib/plugin')
    module.exports = {
        module:{
            rules:[
                // ...其他规则
                {test:/\\.vue$/,use:'vue-loader'}
            ]
        },
        plugins:[
            //...其他插件
            new VueLoaderPlugin()	//请确保引入这个插件!
        ]
    }
```



#### 在webpack项目中使用vue

```js
1.导入Vue构造函数
import Vue from 'vue'

2.导入APP根组件
import APP from './components/APP.vue'

const vm = new Vue({
   
    el:'#app',			//指定vm实例要控制的页面区域
    reder:h => h(App)	//通过render函数，把指定的组件渲染到el区域中
})

//在webpack中，只支持render来渲染组件
```



#### webpack项目打包发布

```js
上线之前需要wbpack将应用整体打包，可以通过package.json文件配置打包命令:
 "scripts":{
     "bulid":"webpack-p",
     "dev":"webpack-dev-server --open --host 127.0.0.1 --port 3000"
 }

```

