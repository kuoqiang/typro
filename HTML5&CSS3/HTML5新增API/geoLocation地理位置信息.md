#### 获取地理位置信息

```js
//台式机几乎都没GPS,笔记本绝大多数没有GPS,移动端几乎都有
//虽然台式和笔记本没有GPS,但是可以通过网络基站粗略定位
//只有HTTPS和File协议才能获取地理信息位置
window.navigator.geolocation.getCurrentPosition(成功回调，失败回调)

window.navigator.geolocation.getCurrentPosition(function(pisition){
    console.log(pisition)
})
```

