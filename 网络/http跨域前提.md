#### 浏览器同源策略

```js
http默认端口号为80   https默认端口号为443
所谓同源策略，就是浏览器针对数据请求的安全限制。
同源策略:协议、域名、端口号相同，缺一就是不同源
要点:ajax发送不同源的请求，实际上请求是可以发送出去的，服务器也能够针对请做出响应并正常返回数据，但是浏览器接收到后，发现当前页面和请求的地址是不同源的，就判定为跨域，不会让页面得到请求结果。(所以说实际的罪魁祸首是浏览器呗)
```



#### src和href

```html
从上面我们知道ajax请求无法访问不同源的服务器(就是跨域)
不过src和href属性不受同源策略的影响

location.href = 'www.baidu.com'

<script src='www.baidu.com'></script>

<a href='www.baidu.com'></a>

以上三种方式都可以访问到不同源的百度首页，jonp实际就是利用了src属性可以跨域的特性实现的
```



#### 跨域实现

```js
有的时候知道请求跨域了，但是我们必须要拿到这个数据，该怎么办？
分两种情况
1.后端配合我们进行跨域
   (1)JOSNP
   (2)CORS   //实际就是在服务器端设置跨域相关的信息(后端做的事情，了解以下就好了)

2.后端不配合我们进行跨域
	(1)iframe //可以在当前页面中访问请求的页面，但是只能显示，无法控制(比较傻的方法)
	(2)反向代理服务器
		//原理就是跨域发生在浏览器上，服务器和服务器之间是没有跨域的，因此可以发送请求的时候先发给中间服务器，由中间服务器代理发送到想要的请求
```



#### josnp

```js
josnp 就是利用script标签的src属性进行跨域
为什么返回的数据要是json格式呢?
因为script标签进行请求，它会把请求的结果当作js代码直接执行，比如说
<script src="jquery.min.js"></script>
以前我们外部引入js文件，其实就是将里面的代码引入并且执行

在服务器端我们需要将响应的数据通过回调函数的方式传递给页面，由不能让这个回调函数直接在服务器上运行，因此我们把数据转换为json格式

比如说:
app.get('/callback',(req,res)=>{
    res.send(`fn({name:'zhangsan',age18})`)
})

//我们想让返回的数据返回后对数据进行操作，那就只能在前端页面上提前定义一个fn函数。而发送请求后，返回的的字符串`fn({name:'zhangsan',age18})`会变成js代码直接运行，而之所以要把这个函数包装成字符串是因为不想让它在服务器端直接运行。
```



#### Ajax全局事件

```js
.ajaxStart()	//当请求开始发送时触发

$(document).on('ajaxStart',function(){
    NProgress.start(); 
})

.ajaxComplete()	//当请求完成时触发

$(document).on('ajaxComplete',function(){
    NProgress.done();
})
```



#### NProgress

```html
//引入文件
	<link rel='stylesheet' href='nprogress.css'>
	<script src='nprogress.js'></script>

NProgress.start(); 	//进度条开始运动
NProgress.done();	//进度条结束运动
```



#### RESTful 规范

```
GET: 获取数据
POST:添加数据
PUT: 更新数据
DELETE:删除数据
```

