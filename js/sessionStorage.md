#### sessionStorage

```js
生命周期到页面关闭时停止
在同一窗口(页面)下数据可以共享

sessionStorage.setItem(key,val)		//设置缓存
sessionStorage.getItem(key)			//获取缓存
sessionStorage.removeItem(key)		//删除缓存
sessionStorage.clear()				//清除所有的数据
```



#### localStorage

```js
数据缓存到本地
生命周期永久生效，除非手动删除
在多个页面中数据都可以共享

localStorage.setItem(key,val)		//设置缓存
localStorage.getItem(key)			//获取缓存
localStorage.removeItem(key)		//删除缓存
localStorage.clear()				//清除所有的数据
```

