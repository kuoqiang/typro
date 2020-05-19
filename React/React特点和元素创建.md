### React特点

```
轻量级:React开发版源码包括注释仅有3000来行
原生:React代码基本是用js实现的，依赖非常少的库
容易扩展:React对代码的封装程度很低，容易实现扩展
不依赖宿主环境:React只依赖原生js,不依赖其他东西，包括运行环境，因此它可以轻松的被移植到浏览器、移动端、桌面应用
渐进式:React并非框架，对整个工程没有强制的约束力，因此对于非React的项目，可以慢慢将它改造成React,而不需要全盘重写
```







```html
//React的核心库，和宿主环境无关(React.createElemtn出处)
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

//依赖于React的核心库，让核心功能和页面结合(ReactDOM.render出处)
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

//引入babel语法
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```



#### 创建一个React元素

```js
var span = React.creteElement('span',{},'一个p元素')
	//创建一个React对象，也叫做虚拟DOM,非DOM元素，所以还不能在页面展示

var h1 = React.createElement(
    			'h1',					//标签名(也可以是React对象)
                {title:'title属性'},	   //属性
                'Hello World',			//子元素
                span					//子元素
                            )		 		
						                      

ReactDOM.render(	h1,									// React元素  
                	document.getElementById('root'))	//容器
			//将h1对象(React元素)放入id为root的div中(将虚拟dom变成真实dom)           
       

```



#### 用脚手架创建React项目

```react
npx create-react-app 项目名
cd 项目名
yarn start
```

