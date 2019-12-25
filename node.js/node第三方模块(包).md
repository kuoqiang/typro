#### 第三方模块的存在形式

​	   	1.以js文件的形式存在，提供实现项目具体功能的API接口。

​			2.以命令行工具形式存在，辅助项目开发



#### 第三方模块库

​			npmjs.com  第三方模块的存储和分发仓库



#### nodemon

​      监控文件保存操作，当文件保存后自动执行

​	  使用nodemon命令替代node命令



#### nrm(npm下载地址切换工具)

​		 npm默认的下载地址在国外，国内的下载速度慢

​		 nrm  ls       								   //查看可用的下载地址列表

​	     nrm  use   下载地址名称            //切换npm





```js
npm init -y              //初始化项目，生成package.json文件，并且默认信息选项 

{
    "name":"description", //项目名
    "version":"1.0.0",	  //版本信息
    "description":""	  //项目描述
     "main":"index.js",	  //项目入口文件
     "scripts":{
         	"test":"echo \"Error: no test specified\" && exit 1"  
         				 //存储命令别名
     },
     "keywords":[],		 //关键字
     "author": "",    	 //作者
     "license":"ISC",	 //协议(ISC为开放源代码协议)
         "dependencies":{
             "formidable":"^1.2.1",  //项目依赖的模块信息
                 "mine":"^2.3.1"
         }
}
```



#### 项目依赖和开发依赖

 ```js
项目依赖是在开发和发布时都会用到的模块      
模块被添加到dependencies中

开发依赖是只有在开发的时候需要，发布的时候剔除   //安装模块时添加--save-dev
模块信息会被添加到devDependencies中，只在生产环境时会被下载
npm install --production  下载生产环境的依赖

在scripts里自定义别名后:使用npm run xxx 执行自定义的命令
 ```



![image-20191206140741904](C:\Users\小win\AppData\Roaming\Typora\typora-user-images\image-20191206140741904.png)



![image-20191206141614687](C:\Users\小win\AppData\Roaming\Typora\typora-user-images\image-20191206141614687.png)





####  art-template模板引擎

```js
npm install art-template
const template = require('art-template')
const html = template('模板路径',数据)


输出
//标准语法         {{ name }}
//原始语法         <%= name %>
标签解析
//标准语法         {{@ name}}
//原始语法         <%- name %>
条件判断
//标准语法         {{if age > 18}}
//					年龄大于18
//				  {{else if age < 18}}
//					年龄小于18
// 				  {{else}}
//					年龄不符合要求
//				 {{/if}}

循环
//标准语法   {{each target}}
//				{{$index}} {{$value}}
//			{{/each}}

子模板
//标准语法  {{include '模板路径'}}

模板继承
//{{block '标记名'}}继承内容{{/block}}
//{{extend '继承的模板文件'}}

模板配置
npm install dateFormat
//向模板中导入变量 template.defaults.imports.变量名 = 变量值
//设置模板根目录  template.defaults.root = path.join(__dirname,'art文件路径')
//设置默认模板后缀 template.defaults.extname = '.art'
```



#### router

```js
实现路由
npm install  router
const getRouter = require('router')
const router = getRouter()
router.get('请求地址'，(req,res)=>{
    res.end('这是一个路由')
})//get方式请求
app.on('request',function(req,res){
    router(req,res,()=>{
        
    })
})
```



#### 静态资源访问服务处理

```js
npm install serve-static
const serverStatic = require('serve-static')
const serve = serveStatic('public')
server.on('request',()=>{
    serve(req,res)
})
server.listen(3000)
```







