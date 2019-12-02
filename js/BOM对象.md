### 关于BOM

![1575169075219](C:\Users\小win\AppData\Roaming\Typora\typora-user-images\1575169075219.png)

​	DOM是BOM中的一部分，DOM的顶部是document 





#### window对象

```
1.window是BOM的顶级对象
2.在全局上设置的属性和函数都会变成window的属性和方法
```

```js
window.onload            //所有页面加载完执行，普通方式只能注册一次(包括flash,图片,css)

document.addEventListener('DOMcontentLoaded',function(){})  
						//DOM加载完成就会执行,不包括图片,css，flash，加载速度比load快
```

```
调整窗口大小加载事件
window.onresize = function(){}

window.addEventListener('resize',function(){})
```



#### location对象

window.location    //window可以省略

| 对象属性          | 返回值                               |
| :---------------- | ------------------------------------ |
| location.href     | 获取url地址                          |
| location.host     | 返回主机域名                         |
| location.port     | 返回端口号(没有则返回空字符串)       |
| location.search   | 返回参数                             |
| location.pathname | 返回路径                             |
| location.hash     | 返回片段 #锚点后面的内容             |
| location.assign   | 可以重定向页面，会记录历史，可以后退 |
| location.replace  | 替换当前页面，不能记录历史           |
| location.reload() | 重新加载页面，相当于刷新 F5          |



#### navigator对象

| 对象属性            | 返回值                 |
| ------------------- | ---------------------- |
| navigator.userAgent | 返回user-agent头部信息 |
|                     |                        |
|                     |                        |
|                     |                        |
|                     |                        |
|                     |                        |



#### history对象

| 对象属性          | 返回值                           |
| ----------------- | -------------------------------- |
| history.back()    | 后退功能                         |
| history.forward() | 前进功能                         |
| history.go(参数)  | 正数为前进，负数为后退，值为步数 |





#### offset偏移

| 属性                 | 作用                                                        |
| -------------------- | ----------------------------------------------------------- |
| element.offsetParent | 返回带有定位的父级元素，没有定位的父级返回body              |
| element.offsetLeft   | 返回相对定位父级元素左边框偏移量                            |
| element.offsetWidth  | 返回自身包括padding、边框、内容区的宽度，返回的数值不带参数 |



![1575194612563](C:\Users\小win\AppData\Roaming\Typora\typora-user-images\1575194612563.png)



#### client

| 属性                 | 返回值                     |
| -------------------- | -------------------------- |
| element.clientLeft   | 返回元素的左边框           |
| element.clientWidth  | 返回元素的宽度，不包含边框 |
| element.clientHeight | 返回元素的高度，不包含边框 |



#### 补充了解

```js
window.devicePixelRatio     //获取物理像素比
```





#### scroll对象

| 对象                | 返回值                                       |
| ------------------- | -------------------------------------------- |
| element.scrollTop   | 竖直滚动条距离顶部距离，没有单位             |
| element.scrollWidth | 本身的实际高度，不含边框，但是包含超出的文本 |
|                     |                                              |

