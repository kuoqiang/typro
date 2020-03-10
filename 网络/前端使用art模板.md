#### 使用步骤

```html
//下载并引入art模板文件
	<script src="xxx/template-web.js"></script>

//准备模板
	<script id="tpl" type="text/html">
		<div class='box'></div>
	</script>

//告诉模板引擎将哪一个模板和哪个数据进行拼接
	var html = template('tpl',{username:'zhangsan',age:'20'})

//将拼接好的html字符串添加到页面
	document.getElementById('container').innerHTML = html;

//通过模板语法告诉模板引擎，数据和html字符串要如何拼接
	<script id="tpl" type="text/html">
		<div class="box">{{username}}</div>
	</script>
```

