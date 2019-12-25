### HTMl5新增(IE9 以下不可用)

#### querySelector

 ```javascript
querySelector('#id');
querySelector('.class')
querySelector('标签')

//只返回第一个元素对象
 ```



#### querySelectorAll

  ```javascript
querySelectorAll('#id');
...同上
//返回所有的
  ```



#### 元素获取

```js
var body = document.body      			 //获取body对象
var html = document.documentElement 	 //获取html对象
```



#### 常用事件

```js
onmouseover      鼠标经过触发

onmouseout		 鼠标离开触发

onmousemove		 鼠标移动触发

onkeydown		 键盘按下触发(对所有按键有效,不区分字母大小写)

onkeyup			 键盘松开触发(对所有按键有效,不区分字母大小写)

onkeypress  	 键盘按下触发(不知别功能键,区分字母大小写)

onfocus 		 鼠标得到焦点触发

onblur 			 鼠标失去焦点

执行顺序(onkeydown > onkeypress > onkeyup)
```



#### mouseover和mouseenter的区别

```js
mouseover经过元素本身和其子元素都会触发
mouseenter经过自己触发，经过子元素不触发(原因是mouseenter不会冒泡)
```





#### 禁止鼠标右键菜单

```js
document.addEventlistener('contextmenu',function(e){
		e.preventDefalut();
})
```



#### 禁止文字被选中

```js
document.addEventListener('selectstart',function(e){
	e.preventDefalut();
})
```





#### 绑定事件方式和不同

```js
1.xxx.onclick = function(){}
	//同一个元素的同一个事件只能绑定一次，后面的事件会覆盖前面的
    
2.xxx.addEventListener('click',function(){})
   //同一个元素的同一个事件可以绑定多次，并且依次触发

3.xxx.attachEvent('onclick',function(){})   //ie 6,7,8
```



#### 解绑事件

```js
1. xxx.onclick = null

2. xxx,removeEventListener('click',fn)   
	//用监听事件方式解绑事件时不能用匿名函数，需要在外部定义事件函数

3.xxx.detachEvent('onclick',fn)   			//ie 6,7,8
```



#### DOM事件流

```
1.事件捕获阶段
2.目标事件阶段
3.事件冒泡阶段
```

  ```js
//js代码只能执行事件捕获和事件冒泡其中的一个阶段

//onclick和attachEvent只能得到冒泡阶段

//onfocus,onblur,onmouseenter,onmouseleave 等事件是没有冒泡的

addEventListener第三个参数为false则冒泡，true为捕获
  ```

#### 事件源对象兼容性写法

```js
xxx.onclick = function(e){
	 e = e || window.event;
}
```

![1575165315872](C:\Users\小win\AppData\Roaming\Typora\typora-user-images\1575165315872.png)

![1575132686554](C:\Users\小win\AppData\Roaming\Typora\typora-user-images\1575132686554.png)



#### 阻止默认行为

```js
xxx.onclick = function(e){
	return false;
}

xxx.onclick = function(e){
	e.preventDefault();
}
//阻止默认事件的另一种方法
```



#### 阻止事件冒泡

```js
xxx.onclick = function(e){
    e.stopPropagation();//阻止事件冒泡
}
```

#### 不常用事件

```js
window.addEventListener('pageshow',function(){})
//页面重新加载触发事件

window.addEventListener('scroll',function(){})
//滚动条滚动事件

window.pageYOffset    //页面被卷曲的头部

element.addEventListener('transitionend',function(){})
//过渡完成后触发事件
```





#### innerText 和 innerHTML的区别

```js
1.innerText不识别html标签,innerHTMl不识别标签
2.获取值时innerText会去除空格和换行,innerHTML不会去除
```





#### dom修改表单

```js
var input = document.getElementByTagName('input')[0];
  input.value = 'xxx' 		//input表单的值
  input.disabled = true		//input表单是否被禁用(布尔值)
  input.type = 'text'		//input表单的类型
  input.checked = 'checked' //input表单是否被选中
```



#### 对于样式的dom修改，需要小驼峰式



#### 排他思想

​    想要实现对元素切换的效果，需要先遍历所有元素，并且清除效果，再对需要的元素添加效果





#### dom获取属性

```js
<div  id='demo'></div>

var demo = getElementById('demo');
console.log(demo.id)  					// demo    主要用于获取内置属性
console.log(demo.getAttribute('id'))	//demo	   主要用于自定义属性
```



#### H5新增获取自定义属性

```html
<div  data-index='1' id='demo'></div>     //自定义属性名必须加上data-前缀
var demo = getElementById('demo');

demo.dataset.index    //1
```





#### dom设置属性值

```js
1.直接对元素值修改
2.setAttribute('属性','值');
```



#### 移除属性

```js
removeAttribute('属性')
```

