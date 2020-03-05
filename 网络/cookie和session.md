### cookie

Cookie是存在浏览器里的，不是存在某个页面

Cookie是可以长期存储的

Cookie虽然存储在浏览器里，但是分别在每个域名下

缺点：cookie容易被恶意获取，在其他计算机登录

```
cookie是浏览器在硬盘中开辟的一块空间，主要用处是存储数据
cookie中的数据是以域名的形式进行区分的
cookie中的数据是有过期时间的，超过时间数据会被浏览器自动删除
cookie中的数据会随着请求被自动发送到服务器端
```



### session

 信息存储在服务器上，不会被恶意获取

 如果用户量非常大，那么非常消耗服务器资源 

 因为后端一般可能不止一台服务器，用户的信息一般只存在一台服务器上 ，需要通过反向代理（轮询，IP哈希）

```js
session:实际上就是一个对象，存储在服务器端中，在session对象中也可以存储多条数据，每一条数据都有一个sessionid做为唯一标识。
//引入express-session模块
 const session = require('express-session')
 app.use(session({ secret:'secret key'}))
```



