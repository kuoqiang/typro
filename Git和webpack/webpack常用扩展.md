#### 清除输出目录

```js
	安装 clean-webpack-plugin			//清除原来的js文件
		const { CleanWebpackPlugin } = require("clean-webpack-plugin")
        
        module.exports = {
			plugins:[
                new CleanWebpackPlugin()
            ]
        }
```



#### 自定生成页面

```js
	html-webpack-plugin
	
	const HtmlWebpackPlugin = require("html-webpack-plugin")
    
    module.exports = {
        entry:"index.js",
        output:{
            path:__dirname + "/dist",
           	filename:"index_bundle.js"
        },
        plugins:[
            new HtmlWebpackPlugin({
                template:"./public/index.html",		//定义模板文件
                chunks:"all",						//使用哪些chunks，默认为all,可以写数组
                filename:"home.html"				//设置生成的文件名
            })
        ]
    }
```



#### 路径问题

```js
	模块中的路径来自于某个loader或，当产生路径时,loader或plugin只有相对于dist目录的路径,并不知道路径将在哪个资源中使用,从而无法确定最终正确的路径
	面对这种情况,需要依靠webpack的配置publicPath解决
	output:{
        filename:"scripts/[name].[chunkhash:5].js",
        publicPath:"/"
    }

	devServer:{
        open:true,
        openPage:"html/index.html"		//打开的html文件位置
    }
```





#### 开发服务器

```js
	我们开发时经常希望把最终生成的代码和页面部署到服务器上,来模拟真实环境，为了解决这些问题，webpack官方制作了一个单独的库:webpack-dev-server
	npx webpack-dev-server   //使用该命令搭建一个具有服务器的服务
```



#### 配置devServer

```js
	devServer:{
        port:8000,
        open:true,
        index:"index.html", //服务开启时默认运行的页面
        porxy:{//代理规则
            "/api":{
                target:"http://open.duyiedu.com",	//请求地址只要包含/api,就会替换成后面的
                changeOrigin:true,					//更改请求头中的host和origin
                stats:{
                   	modules:false, 					//配置控制台输出内容
                    colors:true
            }
            
        }
    }

前端页面和js开发完成后，往往会部署到同一个域中,这样就不会产生跨域。
有些服务器不允许请求头host不匹配的请求
```





#### 普通文件处理

```js
	file-loader		//把一个文件的导入结果变成一个url地址，并且生成到输出目录

	rules:[
        {
            test:/\.(png)|(gif)|(jpg)$/,
            use:[{
				loader:"file-loader",
                options:{
                    name:"imgs/[name].[hash].[ext]"
                }
            }]
        }
    ]


	url-loader	//把一个文件转换成base64的格式

	rules:[
        {
            test:/\.(png)|(gif)|(jpg)$/,
            use:[{
				loader:"url-loader",
                options:{
                    limit:false	//不限制任何大小,经过loader的文件进行base64编码返回,设置值为字节
                }
            }]
        }
    ]
```



#### webpac内置插件

```js
	所有的webpack内置插件都是作为webpack静态属性存在的,使用下面的方式可创建一个插件对象
	const webpack = require("webpack")
    new webpack.插件名(options)

DefinePlugin	全局常量定义插件，使用该插件通常定义一些常量

	pllugins:[
        new webpack.DefinePlugin({
			PI:`Math.PI`,
            BERSION:`"1.0.0"`,
            DOMAIN:JSON.stringify("duyi.com")
        })
    ]
```

