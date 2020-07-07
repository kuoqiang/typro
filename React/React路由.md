#### 路由使用

```react
1.安装依赖
	yarn add react-router-dom

2.导入组件
	improt { BrowserRouter as Router, Route, Link,Switch}  from 'react-router-dom'


3.使用Router组件包裹整个应用
	const First = () => <p>页面一的内容</p>
    const isLogin = false;
	const App = () =>(
    	<Router>
        	<div>
                //指定路由入口
            	<Link to"/first">页面一</Link>
                
                //指定路由出口
                <Route path="/first" component=					{First}/>
                
                //精准匹配
                <Route excat path="/first" 						component={First}/>
                
                <Route path="/user" render= {
                   ()=> isLogin ? <User/> : <Login/>
                        }/>
            </div>
        </Router>
    )

4.//使用Switch包裹后，里面的路由匹配从上到下，只要匹配到就立刻返回，不会继续向下匹配。由于Switch组件会循环所有的子元素，因此里面不能写除了Route外的其他组件。

5.//路由中添加exact关键字后变为精准匹配

6.//匹配路径默认不区分大小写,可以通过设置sensitive属性为true	   区分大小写

7.//不写path的话会匹配任意路径
```



#### 路由信息

```react
在React中,Router组件会创建一个上下文，并且向上下文中注入一些信息
该上下文对开发者是隐藏的，React组件如果匹配到了路由，就会将这些上下文信息作为属性传递给对应的组件

某些组件，并没有直接放在Router中,而是嵌套在其他组件里，因此，它的props中没有路由细腻些，如果这些组件获取到路由细腻些，可以使用下面两种方式。

1.将路由信息从父组件一层层传递到子组件中(子组件通过{..props接收})
2.使用react-router提供的高阶组件withRouter包装要使用的组件，该高阶组件会返回一个新组件，新组件将向提供的组件注入路由信息。

const wrapperA = withRouter(A)
<wrapperA/>
```



#### location

```react
与history.location完全一致，是同一个对象，但是与window.location不同

Location对象中记录了当前地址的相关信息
我们通常使用第三方库 query-string 用于解析地址栏中的数据
```







#### 编程式导航

```js
class Login extends Component {
	handleLofin = () => {
		this.props.history.push('/home')
        //跳转到home组件
        
        this.props.history.go()
    }
}
```



#### H5 history新增API

```react
history.length 获取历史记录栈的数量
history.pushState(参数1,参数2,参数3) 
//像当前历史记录栈中加入一条新的记录
参数1:附加的数据，自定义的数据，可以是任何类型
参数2:页面标题，目前大部分浏览器不支持
参数3:新的地址

history.replaceState(参数1,参数2,参数3) 
//将当前指针指向的历史记录，替换为某个记录
参数1:附加的数据，自定义的数据，可以是任何类型
参数2:页面标题，目前大部分浏览器不支持
参数3:新的地址
```



#### 经常用到的react-router-dom中的组件

```react
Router: BrowserRouter、HashRouter
Route
Switch
withRouter
Link				//生成一个无刷新跳转的a元素
NavLink		//给匹配的url添加样式(和Link的唯一区别)
Redirect
```

