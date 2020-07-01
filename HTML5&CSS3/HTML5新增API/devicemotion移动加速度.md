#### 获取手机摇晃时各个方向的加速度

```js
window.addEventListener("devicemotion",
 function(event){
    console.log(event)
    //acceleration.x  x方向加速度
    //acceleration.y  y方向加速度
    //acceleration.z  z方向加速度
})
```

