#### 屏幕刷新

```js
一般屏幕动画变化的刷新频率为每秒60次
如果变化，一秒超过60次，必然会有一些动画帧会被丢弃
//requestAnimationFrame每秒60帧，确保准时执行每一帧
//使用setInterval如果一帧运行的时间少于1/60秒，那么这个动画在1秒钟内时执行不完的。
function move(){
    var square = document.getElementById("mmain");
    if(square.offsetLeft > 700){
        return;
    }
  square.style.left = square.offsetLeft + 20 + "px"
  requestAnimationFrame(move)
}
```

