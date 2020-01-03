#### 两种请求

```
浏览器将CORS请求分为两类:简单请求和非简单请求
```

##### 简单请求

```js
只要同时满足以下两大条件，就属于简单请求
(1) 请求方式是以下三种方式之一:
	HEAD
	GET
	POST
(2)HTTP的头部信息不超出以下几种字段:
	Accept
	Accept-Language
	Content-Language
	Last-Event-ID
	Content-Type:只限于三个值,application/x-www-form-urlencoded
						multipart/form-data、text/plain

凡是不同时满足上面两个条件，就属于非简单请求
```



##### 基本流程

```js
对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段
下面是一个例子，浏览器发现这次跨院AJAX请求是简单请求，就自动在头信息之中，添加一个Origin字段
	GET /cors HTTP/1.1
	Origin:http://api.bob.com
	Host:api.alice.com
	Accept-Language:en-US
	COnnection:keep-alive
	User-Agent:Mozilla/5.0...
	
	上面的头信息中，Origin字段用来说明，本次请求来自哪个源(协议+域名+端口)
	服务器根据这个值，决定是否同意这次请求
	
	如果指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应。浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段,就直到出错了，从而抛出一个错误，被XmLHttpRequest的onerror回调函数捕获。注意，这种错误无法通过状态码事鳖，因为HTTP回应的状态码仍可能是200。
	
	如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。
	Access-Control-Allow-Origin:http://api.bob.com
	Access-Control-Allow-Credentials:true
	Access-Control-Expse-Headers:FooBar
	Content-Type:text/html;charset=utf-8
上面的头信息之中，有三个与CORS请求相关的字段，都以Access-Control-开头

(1) Access-Control-Allow-Origin
该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接收任意域名的请求

(2) Access-Control-Allow-Credentials
该字段客园。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true,如果服务器不哟浏览器发送Cookie,删除该字段即可

```



##### withCredentials属性

```js
上面说到，CORS请求默认不发送Cookie和HTTP认证信息。如果要把Cookie发到服务器.一方面要服务器同意，指定Access-Control-Allow-Credentials字段。
Access-Control-Allow-Credentials:true
   另一方面，开发者必须在AJAX请求中打开withCredeHttpRequest();
	xhr.withCredentials = true;
	需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页代码中的document.cookie也无法读取服务器域名下的Cookie。
```



#### 非简单请求

```
非简单请求时那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE,或者Content-Type字段的类型是application/json。

非简单请求的CORS请求，会在正式通信之前，增加依次HTTP查询请求，成为"预检"请求

浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头部信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就会报错。
```





### 与JSONP的比较

```
CORS与JSONP的使用目的相同，但是比JSONP更强大

JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。
```

