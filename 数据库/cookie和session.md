#### Cookie

   cookie是浏览器再硬盘中开辟的一块空间，主要共服务器端存储数据

   ```js
cookie中的数据是以域名的形式进行区分的
cookie中的数据是有过期时间的，超过时间数据会被浏览器自动删除
cookie中的数据会随着请求被自动发送到服务器端
   ```



#### Session

```js
session:实际上就是一个对象，存储在服务器端中，在session对象中也可以存储多条数据，每一条数据都有一个sessionid做为唯一标识。
```



```js
//引入express-session模块
 const session = require('express-session')
 app.use(session({ secret:'secret key'}))
```

