```js
var http = require('http');
var app = http.createServer();
app.on('request',function (req,res) {    
		console.log('dada')    
		response.write('<h1>这是一个输出流</h1>')    
		response.end()
})
```



#### req属性和方法

| 属性                   | 返回值                      |
| ---------------------- | --------------------------- |
| req.method             | 获取请求方式,返回值为字符串 |
| req.url                | 获取请求地址,为/后面的参数  |
| req.headers            | 获取请求报文                |
| req.hreaders['属性名'] | 获取请求头对应属性的信息    |



#### res属性和方法

| 属性                       | 返回值         |
| -------------------------- | -------------- |
| res.writeHead(状态码,对象) | 书写响应头信息 |
|                            |                |
|                            |                |
|                            |                |



res.writeHead(200,{'content-type':'text/html;charset=utf-8'})



#### 响应类型

```
text/html
text/css
application/javascript
image/jpeg
application/json
```



#### post请求方法

 ```js
post请求参数在请求体当中
获取post需要使用data和end事件
使用querystring模块将字符串参数转化成对象
const querystring = require('querystring')
http.on('request',function(req,res){
    const params = '';
    req.on('data',function(data){
        params += data;
    })
    
    req.on('end',function(){
        console.log(querystring.parse(params))
    })
    
    res.end()
})
 ```

