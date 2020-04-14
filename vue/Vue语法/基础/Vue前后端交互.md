![image-20191228110533200](C:\Users\小win\AppData\Roaming\Typora\typora-user-images\image-20191228110533200.png)

#### Restful形式的URL

```js
HTTP请求方式
   1.GET  	 查询
   2.POST 	 添加
   3.PUT  	 修改
   4.DELETE  删除
   
符合规则的URL地址
   1.hTTP://www.hello.com/books 	GET
   2.http://www.hello.com/books  	POST
   3.http://www.hello.com/books/123	PUT
   4.http://www.hello.com/bools/123	DELETE
```



#### Promise

```js
Promise是异步编程的一种解决方案，从语法上讲，Promise是一个函数对象，他可以获得异步操作的消息
	优点:1.可以避免多层异步调用嵌套问题(回调地狱)
		2.Promise对象提供了简洁的API，使得控制异步操作更加容易
        
let promise = new Promise((resolve,reject)=>{
    //成功时调用resolve()
    //失败时调用reject
})

	promise.then(function(res){
        	//resolve调用时执行此函数
    },function(rej){
        	//reject调用时执行此函数
    })
```



#### then参数中的函数返回值

```js
1.返回Promise实例对象
	返回的该实例对象会调用下一个then
2.返回普通值
	返回的普通值会直接传递给下一个then，通过then参数中函数的参数接收该值
	
	**总而言之，then里的参数是上一个then中的return的值
```





#### Promise常用的API

```js
p.then()  	//得到异步任务的正确结果
p.catch()	//获取异常信息
p.finally()	//成功与否都会执行(尚且不是正式标准)

对象方法
Promise.all() 	 //并发处理多个异步任务，所有任务都执行完成才能得到结果
Promise.race()	//并发处理多个异步任务，只要有一个任务完成就能得到结果，并					且只返回最快的结果
```



#### fetch 接口调用

```js
特点:
	1.更加简单的数据获取方式，功能更加强大、更灵活、可以看做是xhr的升级版
	2.基于Promise实现
	
语法结构:
	fetch(url).then(fn2)
			  .then(fn3)
			  .....
			  .catch(fn)
```



#### fetch请求参数

```js
method(String):HTTP请求方法,默认为GET(GET、POST、put、DELETE)
body(string):HTTP请求参数
headers(Object):HTTP的请求头,默认为{}

fetch('url?id=123&password=456',{
    method:'get'
}).then((data)=>data.text()) //将返回的数据处理成字符串类型
  .then((res)=>{console.log(res)})
	

fetch('url',{
    method:'post',
    body:'id=123&password=456',
    hearders:{
        'Content-type':'application/x-www-form-urlencoded'   //或application/json  得到json格式数据
    }
}).then(fn2)
```





#### axios

```js
一个基于Promise用于浏览器和node.js的HTTP客户端
	特征:
		1.支持浏览器和node.js
		2.支持Promise
		3.能拦截请求和响应
		4.自动转换JSON数据
        
axios.get('/xxx')   //需要先引用axios库文件
		.then(res=>{
    	console.log(res.data)//data属性是固定的用法，用于获取								后台实际数据
})
```



#### axios的常用API

```js
get:  	查询数据
post: 	添加数据
put:  	修改数据
delete:	删除数据

**get方式传参
axios.get('xxx?id=xxx')
		.then(res=>{
            console.log(res.data)
        })
//通过服务添加:id传参
axios.get('xxx/ddd')	
//通过params选项传递参数
axios.get('xxx/ddd'，{
          params:{
          	id:123,
          	password:456
          }
          })
          
**post方式传参
axios.post('/data',{  //默认传递的数据是json格式
    uname:'tom',
    pwd:123
}).then(res=>{
    console.log(res.data)
})

//通过URLSearchParams传递参数
cosnt params = new URLSearchParams();
params.append('param1','value1')
params.append('params2','value2')
axios.post('/api/test',params).then(res=>{
    console.log(res.data)//提交的数据格式为字符串
})
```



#### axios的响应结果

```js
data:实际响应回来的数据
headers:响应头信息
status:响应状态码
statusText:响应状态信息
```



#### axios的全局配置

```js
axios.defaults.timeout = 3000  //超时时间
axios.defaults.baseURL = 'http://localhost:3000/app'
//基准路径地址
axios.defaults.headers['mytoken'] = 'aqwer'//设置请求头
```



#### axios拦截器

```js
1.请求拦截器
 	在请求发出之前设置一些信息
 	//添加一个请求拦截器
 	axios.interceptors.request.use(function(config){
        console.log(config.url)//获取url地址
        config.headers.mytoken = 'nihao'//设置请求头
 		//在请求发出之前进行一些信息设置
 		return config;
 	},function(err){
 		//处理响应的错误信息
 	})

2.响应拦截器
	在获取数据之前对数据做一些加工处理
    //添加一个响应拦截器
    axios.interceptors.response.use(function(res){
        //在这里对数据进行处理
        var data = res.data
        return data;
    },function(err){
        //处理响应的错误信息
    })
```

