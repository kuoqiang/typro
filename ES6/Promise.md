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
}).then(console.log);

console.log(3);
// 3
// 2
// 1
```