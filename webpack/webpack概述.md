```js
webpack是一个流行的前端项目构建工具(打包工具),可以解决当前web开发中所面临的困境。
webpack提供了友好的模块化支持，以及代码压缩混淆、处理js兼容问题、性能优化等强大的功能，从而让程序员把工作的重心放到具体的功能实现上，提高了开发效率和项目的可维护性。
```



#### webpack基本使用

```
1.新建项目空白目录，并运行npm init -y 命令，初始化包管理配置文件 package.json
2.新建src源代码目录
3.新建src -> index.html 首页
4.初始化首页基本的结构
5.运行npm install jquery -s 命令，安装jQery
6.通过模块化的 形式，实现列表隔行变色效果


import $ from 'jquery'
$(function(){
	$('li:odd').css('backgroundColor','pink')
	$('li:even').css('backgroundColor','lightblue')
})
```



#### webpack的基本使用

```js
1.npm install webpack webpack-cli -D 命令，安装webpack相关的包
2.在项目根目录中，创建名为webpack.config.js的webpack配置文件
3.在webpack的配置文件中，初始化如下的基本配置
	module.exports = {
		mode:'development'	//mode 用来指定构建模式
	}
4.在package.json配置文件中的scripts节点下，新增dev脚本如下:
	"scripts":{
		"dev":"webpack"	//script节点下的脚本，可以通过npm run 执行
	}
5.在终端运行 npm run dev 命令，启动webpack进行项目打包
```



#### 配置打包的入口和出口

```js
打包的入口文件默认为 src  -> index.js
打包的输出文件默认为 dist -> main.js

//如果要修改打包的入口和出口,可以在 webpack.config.js 中新增如下配置信息:
const path = require('path')	//导入node.js中专门操作路径的模块
module.exports = {
    entry:path.join(__dirname,'./src/xxx.js'),  //打包入口文件的路径
    output:{
        path.join(__dirname,'./dist'),		//输出文件的存放路径
    	filename:'main.js'		//输出文件的名称
    }
}
```





#### 配置自动打包功能

```js
1.运行 npm install webpack-dev-server -D 命令，安装支持项目自动打包的工具
2.修改 package.json -> scripts 中的 dev 命令如下:
	"scripts":{
        "dev":"webpack-dev-server"	//script节点下的脚本，可以通过npm run 执行
    }
3.将 src -> index.html 中，script 脚本的引用路径，修改为"/bundle.js"
4.运行 npm run dev 命令，重新进行打包
5.在浏览器中访问 http://localhost:8080 地址，查看自动打包效果

注意:webpack-dev-server 会激动一个实时打包的 http
	webpack-dev-server 打包生成的输出文件，默认放到了项目根目录中，而是虚拟的、看不见的
```



#### 配置html-webpack-plugin生成预览页面

```js
1.运行 npm install html-webpack-plugin -D命令，安装生成预览网页的插件
2.修改 webpack.config.js 文件头部区域，添加如下的配置信息:
	//导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({//创建插件的实例对象
    template:'./src/index.html',	//指定要用到的模板文件
    filename:'index.html'    //指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})
3.修改 webpack.config.js文件中向外暴露的配置对象，新增如下配置节点
	module.exports = {
        plugins:[htmlplugin]	//plugins数组是webpack打包期间会用到的一些插件列表
    }
```





#### 配置自动打包相关的参数

```
//package.json中的配置
//--open 打包完成后自动打开浏览器页面
//--host 配置IP地址
//--port 配置端口
"scripts":{
	"dev":"webpack-dev-server  --open --host 127.0.0.1 --port 8080"
}
```

