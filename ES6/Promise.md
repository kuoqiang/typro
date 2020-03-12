### Promise

```javascript
var promise = new Promise(function (resolve, reject) {
  // ...

  if (/* 异步操作成功 */){
    resolve(value);
  } else { /* 异步操作失败 */
    reject(new Error());
  }
});

promise.then(function(){
    console.log("成功")
},function(){
    console.log("失败")
})
当resolve函数执行时，执行then方法的成功回调
当reject函数执行时，执行then方法的失败回调
```



#### 图片加载实例

```javascript
var preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};

preloadImage('https://example.com/my.jpg')
  .then(function (e) { document.body.append(e.target) })
  .then(function () { console.log('加载成功') })
```



 上面代码中，图片加载成功以后，`onload`属性会返回一个事件对象，因此第一个`then()`方法的回调函数，会接收到这个事件对象。该对象的`target`属性就是图片加载后生成的 DOM 节点。 



### promise是微任务

 Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮事件循环。这意味着，微任务的执行时间一定早于正常任务。 

```javascript
setTimeout(function() {
  console.log(1);
}, 0);

new Promise(function (resolve, reject) {
  resolve(2);
}).then((resolve)=>{console.log(resolve)});

console.log(3);
// 3
// 2
// 1
```



#### promise化

```javascript
function promisify(func){
	return function(...arg){
		return new Promise((resolve,reject)=>{
            func(...arg,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
        })
    }

}

let  readfile = promisify(fs.readFile)
```



#### promise三种状态

```js
未决状态 pending
从未决状态推向已决的resolved状态的过程，叫做resolve(拿到正确数据)
从未决推向已决的rejected状态的过程，叫做reject(网络不好或其他原因导致出错)

针对resolved的后续处理，我们称之为thenable
针对rejected的后续处理，称之为catchable

var task = new Promise(function(resolve,reject){
    //任务在未决阶段的代码，这个代码是立即执行的
    if(正常结果){
        resolve(成功参数)	//推向成功状态resolved
    }else{
        reject(失败参数)	//推向失败状态rejected
    }
})

//任务进入已决状态后(resolved或rejected)，状态将不会再改变
```



#### Promise.all()

```js
var newPro = Promise.all(promise对象数组)
//返回一个新的Promise对象，只有newPro中的所有promise任务成功后才能成功，有一个失败就直接失败
newPro.then((data)=>{
    //所有Promise任务成功
}).catch((err)=>{
    //存在Promise任务失败
})
```

