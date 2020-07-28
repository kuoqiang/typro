#### CSR和SSR

```
CSR:Client Side Rendering 客户端渲染(浏览器生成页面)
	1.浏览器发送请求到服务器
	2.服务器返回一个html页面,没有任何内容
	3.浏览器处于白屏状态
	4.浏览器再次发送多个请求到服务器，分别请求css、图片、js
	5.服务器响应对应资源
	6.浏览器开始执行JS
	
	
	缺点:
		1.浏览器可能长期处于白屏状态
		2.不利于SEO
	
	
SSR:Server Side Rendering 服务端渲染
	1.浏览器发送请求到服务器
	2.服务器返回一个html页面,包含完整的HTML内容
	3.浏览器显示初页面
	4.浏览器再次发送到多个请求到服务器，分别请求css、图片、js
	5.服务器响应对应资源
	6.浏览器接管后续渲染
	
	缺点:开发相对麻烦。(如果纯服务端渲染会增加服务器的压力)
```





#### 实现react的SSR

```react
server.js
	import React from 'react'
	import Home from 'xxx'
	import ReactDom from 'react-dom/server'
	import express from 'express'

    const app = express();

	app.get("",(req,res)=>{
		const componentHTML =  ReactDom.renderToString(<Home/></Home/>)
    })


webpack.config.js
	module.exports = {
        mode:"development",		//模式
        devtool:"source-map",	
        entry:"./src/server",	//入口文件
        target:"node",
        module:{
            rules:[
                {
                 test:/\.jsx?/,
                 exclude:"/node_modules/",
                 use:[{
                     loader:"babel-loader",
                     options:{
                         presets:["@babel/preset-react"]
                     }
                 }]
                }
            ]
        }
    }



同构:保持服务器端和客户端渲染一致
```

