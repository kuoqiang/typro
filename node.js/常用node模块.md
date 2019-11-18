### fs

#### readFile 异步读取文件

```javascript
var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
//utf-8可以不写，返回的是二进制文件
异步读取时，传入的回调函数接收两个参数，当正常读取时，err参数为null，data参数为读取到的String。当读取发生错误时，err参数代表一个错误对象，data为undefined。这也是Node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表结果。后面我们还会经常编写这种回调函数。
```



#### readFileSync 同步读取文件

同步读取的函数和异步函数相比，多了一个`Sync`后缀，并且**不接收回调函数**，函数直接返回结果。

```javascript
var fs = require('fs');
fs.readFileSync('sample.txt', 'utf-8');
```



#### writeFile 异步写文件

```javascript
var fs = require('fs');
var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

writeFile()的参数依次为文件名、数据和回调函数。如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。回调函数由于只关心成功与否，因此只需要一个err参数。
```



#### writeFileSync 同步写文件

```javascript
var fs = require('fs');
var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);
//同样同步方式不需要回调函数
```



### 流操作

​     读文件

```javascript
var fs = require('fs');
// 打开一个流:
var rs = fs.createReadStream('sample.txt', 'utf-8');
rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});
rs.on('end', function () {
    console.log('END');
});
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});
data事件表示流的数据已经可以读取了，end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。
```



​    写文件

```javascript
var fs = require('fs');
var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();
//手动写入，手动end
所有可以读取数据的流都继承自stream.Readable，所有可以写入的流都继承自stream.Writable。
```



### http

```javascript
var http = require('http');
// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
   response.writeHead(200, {'Content-Type': 'text/html'});//必填
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world!</h1>');
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
```







### WS

```javascript
const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;// 引用Server类:
const wss = new WebSocketServer({// 实例化:
    port: 3000
});
```