```js
webpack是一个流行的前端项目构建工具(打包工具),可以解决当前web开发中所面临的困境。
webpack提供了友好的模块化支持，以及代码压缩混淆、处理js兼容问题、性能优化等强大的功能，从而让程序员把工作的重心放到具体的功能实现上，提高了开发效率和项目的可维护性。
```



#### devtool配置

```js
	source map  源码地图
    前端发展到现在阶段，很多时候都不会直接运行源代码，可能需要对源代码进行合并、压缩、转换等操作，真正运行的是转换后的代码。
    比如会将1.js、2.js、3.js合并压缩成bundle.js
	但是这样就给调试带来了困难，因为当运行发生错误的时候，我们更希望看到源代码中的错误，而不是转换后代码的错误。
    source map实际删是一个配置,配置中不仅记录了所有源码内容，还记录了和转换后的代码的对应关系。
	source map应该在开发环境中使用,作为一种调试手段，生产环境不建议使用。
```





#### webpack的基本使用

```js
1.npm install webpack webpack-cli -D 安装依赖包
2.在项目根目录中，创建名为webpack.config.js的webpack配置文件
3.在webpack的配置文件中，初始化如下的基本配置
	module.exports = {
		mode:'development'	//mode 用来指定构建模式
        devtool:'eval'
	}
4.在package.json配置文件中的scripts节点下，新增dev脚本如下:
	"scripts":{
		"dev":"webpack"	//script节点下的脚本，可以通过npm run 执行
	}
5.在终端运行 npm run dev 命令，启动webpack进行项目打包


也可以直接 npx webpack 命令打包
```



#### 配置打包的入口和出口

```js
打包的入口文件默认为 src  -> index.js
打包的输出文件默认为 dist -> main.js

//如果要修改打包的入口和出口,可以在 webpack.config.js 中新增如下配置信息:
const path = require('path')	//导入node.js中专门操作路径的模块
module.exports = {
    //mode:"development",  //设置运行环境
    entry:path.join(__dirname,'./src/main.js'),  //打包入口文件的路径
    output:{
        path:path.join(__dirname,'./dist'),		//输出文件的存放路径
    	filename:'bundle.js'		//输出文件的名称
    }
}



npx webpack  --mode=development		//设置当前环境
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





#### webpack使用jquery

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



#### webpack模块兼容性

```js
	webpack支持CommonJS、ES6模块化标准
```



#### webpack编译过程分析

```js
	webpack解决全局变量污染的问题
   	webpack模块合并后的代码放在eval中(因为eval的代码会在另一个环境执行,这样在开发中方便调试错误)

//初始化
	此阶段,webpack会将Cli参数、配置文件、默认配置进行融合，形成一个最终的配置。
	对配置的处理过程是一个第三方库yargs完成的
    此阶段相对比较简单，注意是为了接下来的编译阶段做必要的准备
    
//编译
    1.创建chunk
    	chunk是webpack内部构建过程中的一个概念,翻译为块，它表示通过某个入口找到所有依赖的统称。
		根据入口模块(./src/index.js)创建一个chunk(入口模块默认只有一个，但是也可以设置为多个)
        每个chunk至少有两个属性:
				name:默认为main
                id:唯一编号,开发环境和name相同,生产环境是一个数字，从0开始

	2.构建所有模块依赖
    
    3.产生chunk assets
    	在第二步完成后，chunk中会产生一个模块列表,列表中包含了模块id和模块转换后的代码
		接下来,webpack会根据配置为chunk生产一个资源列表,即chunk assets,资源列表可以理解为是生成到最终文件的文件名和文件内容。
		chunk hash是根据所有chunk assets的内容生成的一个hash字符串
       	hash:一种算法,具体有很多分类,特点是将一种任意长度的字符串转化为一个固定长度的字符串,而且可以保证原始内容不变，产生的hash字符串就不变。
```



#### 入口和出口

```js
	__dirname:表示当前js文件所在的目录(是一个绝对路径)

//出口
	这里的出口是针对资源列表的文件名或路径的配置
    出口通过output进行配置
    output:{
        path:path.resolve(__dirname,"文件夹名"),	//必须配置一个绝对路径，表示资源存放位置
        filename:"js资源整合的文件名"	//配置合并的js文件的规则
        //多个入口模块时 filename:"[name].js"
        
    }

//入口
	入口真正配置的是chunk
    entry:{
        main:"./src/index.js"  //main为chunk名称,路径为入口模块
        ...  //增加多个入口模块，但是多个入口就得对应多个出口
    }
```































####  手动合并两个模块

```js
//合并 ./src/a.js 和 ./src/index.js  两个模块

       (function(modules){
           //require函数相当于运行一个模块,得到模块导出结果
           	function require(moduleId){	//moduleId就是模块的路径
                var func = modules[moduleId]	//得到该模块对应的函数
                var module = {
                    exports:{}
                }
                func(module,module.export)	//运行函数
                var  result = module.exports	//得到模块导出的结果
                return result;
            }
           
           //执行入口函数
           require("./src/index.js")
       })({
           //该对象保存了所有的模块,以及模块对应的代码
        "./src/a.js": function(module,exports) {
            console.log("module a")
            module.exports = "a"
        },
        "./scr/index.js":function(module,exports,require) {
            console.log("index module")
            var a = require("./src/a.js")
            console.log(a)
        }
    })
```



