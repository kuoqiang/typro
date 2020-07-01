#### worker

```js
//js都是单线程的
// worker是真正的多线程
//worker不能操作dom,并且没有window对象，不能读取文件。可以通过worker发送ajax,可以进行计算。
//通过importScripts('路径')能够引入js文件，使用里面的函数
```



#### worker的使用

```js
1.在index.js文件中
	//开启一个新的线程
	var worker = new Worker('./worker.js')
    //发送消息
	worker.postMessage({
        num:a;
    })

	//接收消息
	worker.onmessage = function(e) {
        console.log(e.data)	//计算的值
    }

	//外部停止线程
	worker.terminate();
1.新建一个worker.js的文件
	//接收消息
	this.onmessage = function (e) {
        //e为一个workerEvent对象
        var sum = 0;
        for(var i=0; i < 10000; i++){
            sum +=i
        }
        this.postMessage(sum)
        
        //停止线程工作
        this.close()
    }

```

