#### 路由使用

```react
1.安装依赖
	yarn add react-router-dom

2.导入组件
	improt { BrowserRouter as Router, Route, Link}  from 'react-router-dom'


3.使用Router组件包裹整个应用
	const First = () => <p>页面一的内容</p>

	const App = () =(
    	<Router>
        	<div>
                //指定路由入口
            	<Link to"/first">页面一</Link>
                
                //指定路由出口
                <Route path="/first" component=					{First}/>
                
                //精准匹配
                <Route excat path="/first" 						component={First}/>
            </div>
        </Router>
    )
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

