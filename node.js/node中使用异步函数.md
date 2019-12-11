```js
引入util模块
var fs = require('fs')
var promisify = require('util').promisify    //将异步API返回值变成一个promise对象
var readfile = promisify(fs.readFile)

async fuction run(){
   let r1 = await readfile('xx1.txt','utf-8')
   let r2 = await readfile('xx2.txt','utf-8')
   let r3 = await readfile('xx3.txt','utf-8')
   
    console.log(r1)
    console.log(r2)
    console.log(r3)
}
```



##### 在浏览器中全局对象是window，在node中全局对象是global

```js
global可以省略
console.log()、setTimeout()、clearTimeout()等等		
```

