#### koa

```react
	Koa是一个新的web框架,由Express原班团队打造，为搭建web服务器提供更轻量、更优雅的解决方案，Koa目前的版本式koa2。
	Koa没有内置的中间件
    Koa不提供路由匹配
	Koa最大的优势，就是它支持异步中间件,从而提供了基于合理的中间件模型
	express出现的比较早,当时还没有出现es6,因此express对异步的支持不太好。
```



#### 更合理的结构

```js
	 const app = new Koa();
	 app.use(async function(context,next){
         //用于获取当前登录的用户对象,context.request   context.response
         context.user = u;
         next();
     })
```



#### 为什么说express对异步操作支持不太好

```js
	const app = express();
//中间件1
	app.use(function(req,res,next){
        console.log(1)
        next()
        console.log(4)
    })

//中间件2
	app.use(async function(req,res,next){
        console.log(2)
        await delay(1000)
        console.log(3)
    })

	function delay(duration){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve();
            },duration)
        })
    }

//本来结果应该式1 2 3 4   但是实际的结果却是 1 2 4 3


app.use(async function(req,res,next){
    //过滤
    //1.请求过滤
    //2.移交给后续中间件
    	next();
    //3.过滤响应
})

//而Koa使用了洋葱模型让异步处理更精确
```



#### 创建Koa应用

```js
	const Koa = require("koa")
    const app = new Koa();
	
	app.listen(port,callback)
```



#### Koa注册中间件

```js
	app.use(function(context,next){
        请求对象
		context.request.header	//获取请求头对象
        context.request.method //获取请求方法
        context.request.url    //获取url(只包含path和search)
        context.request.originUrl	//不受改动的url
        context.request.href	//完整的url
        context.request.querystring	//不带?的url的参数
        context.request.host   //获取域名和端口
        context.request.hostname 	//获取域名
        context.request.URL		//获取解析的url对象
        
        响应对象
        context.response.header	//获取响应头对象
        context.response.status //获取响应状态
        context.response.message	//获取响应状态消息
        context.response.body	//获取响应体
    })

//Koa的中间件很容易就能获取到上一个中间件的信息，并且通过异步操作可以让前面的中间件部分代码在后续中间件执行后再执行
```



#### context

```js
	request:koa封装的请求对象,用于获取请求传递的信息
    response:koa封装的响应对象,用于设置响应对象

	Koa不建议使用原生的对象,绝大部分情况下,都应该使用它封装的对象。
```



#### cookie

```js
//koa原生支持cookie,不需要安装其他中间件
	context.cookies.set(name,value,[options])	//设置cookie
	context.cookies.get(name)					//获取cookie
	
//cookie加密(koa中的加密是利用keyGrip完成的，该库使用多个密钥，轮流使用它们加密目标字符串，这样叫做旋转加密，更加难以破解)
	app.keys = ['im a newer secret', 'i like turtle']	//加密多个密钥
	context.cookies.set(name,value,{ singed:true })		//设置加密的cookie
	context.cookies.get(name,{ signed:true })			//解密cookie
```



#### 自定义空间

```js
	context.state  //需要自定义的属性赋值空间

	app.use(function(context,next){
        const user = {
            loginId:"xxx",
            name:"小win"
        }
        
        context.state.user = user;
        next()
    })
```



#### 错误处理

```js
	app.on("error",err=>{
        console.log(err)
    })

	context.throw(错误码,错误信息,错误对象)
```



#### 其他处理

```js
	app.on("abc",(data)=>{
		console.log(data)
    })


外部
	app.emit("abc",123)
```



#### 常用中间件

```js
	@koa/router			用法类似express.Router
	koa-bodyparser		解析请求体的中间件,支持x-www-form-urlencoded,application/json
	koa-views			渲染模板引擎的中间件，一般用于传统的服务端渲染
    koa-static			用于搭建静态资源服务器的中间件
    koa-static-cache	实现了http缓存的静态资源中间件
    koa-session			session中间件
    koa-jwt				支持jwt的中间件
    koa-compress		支持gzip动态压缩的中间件
    koa-logger			日志记录中间件
    @koa/cors			官方中间件，支持CORS跨域的中间件
    @koa/multer			官方中间件,用户处理文件上传的中间件
	koa-connect			将exress或connect中间件转化为koa中间件
    http-proxy-middleware	代理中间件
```





#### @koa/router

```js
router.js
	const Router = require("@koa/router")
    const router = new Router()
    
    router.get("/api/user/:id",ctx=>{
		console.log(ctx.params.id)
    })

	module.exports = router.routes()

index.js
	app.use(require("./router.js"))
   
```

