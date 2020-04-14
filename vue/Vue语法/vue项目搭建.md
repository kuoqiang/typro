#### 	前端项目初始化

```js
1.安装 Vue 脚手架
2.通过 Vue 脚手架创建项目
3.配置 Vue 路由
4.配置 Element-UI 组件库
5.配置 axios 库
6.初始化 git 远程仓库
7.将本地项目托管到Github或码云中

process.env.NODE_ENV   当前模式     production 和  develop
```



#### 基本命令

```
vue add vuex          		添加仓库store.js

npm run build      		  项目打包

npm install  axios		  安装axios  
```





#### 自定义配置

```js
在根目录下新建一个vue.config.js

module.exports = {

	productionSouceMap:false，    //删除打包后的map文件

	outputDir:'./mydist'           		 //设置输出目录

	publicPath:'www.baidu.com'   //设置公共路径

	assetsDir:'assets'  					//将资源合并至目录

	configureWebpack:{				//设置webpack

},

	devServer:{

			proxy:{

		'url':{

			target:'代理地址'
			}

		}

	}

} 
```



