#### 第三方库

```react
	react-router内部使用了第三方库Path-to-RegExp
  	path-to-regexp用于将字符串转换成正则
	<Route path="xxx/:id/:page">
        //path属性的内容会被转换成正则，然后再根据url地址开始正则匹配
```





#### history对象

```react
//该对象提供了一些方法，用于控制或监听地址的变化，该对象不是window.history，而是一个抽离的对象，它提供统一的API接口封装了具体的实现。

	createBrowserHistory:产生的控制浏览器真实地址history对象
    createHashHstory:产生的控制卢兰其hash的history对象
    createMemoryHistory:产生的控制内存中地址数组的history对象
    //Memory创建一个使用内存中的地址栈的history对象，一般用于没有地址栏的环境(比如说手机)

第三方库:history
	
```



#### browserHstory.js

```react
	import { createBrowserHistory } from 'history'
	const history = createBrowserHistory()
    
    
    
    histtory对象内的属性
    	listen:是一个函数，用于监听地址栈指针的变化,该函数接收一个函数做完参数，该参数表示地址变化后要做的事情。
		listen有两个参数
        	location:记录新的地址
            action:进入新地址的方式
            	POP:指针移动，调用go、goBack、goForward、用户点击浏览器后退按钮
                PUSH:调用history.push
				REPLACE:调用history.replace
		block:用于设置一个阻塞，当页面发生跳转时，会将指定的消息传递到getUserConfirmation，并且调用getUserConfirmation
    
   	createBrowserHistory可以传递一个对象参数
    	basename:"/news"		//设置根路径
		forceRefresh:true		//是否强行刷新页面
		keylength:location对象使用的key值长度
        getUserConfirmation:一个函数	当调用history对象block函数后，发生页面跳转时运行
```



#### 实现Router

```react
Router.js
	import React,{ Component } from 'react'
	import PropTypes from 'prop-types'
	import ctx from './RouterContext'
	export default class Router extends Component {
        static = propTypes = {
			history:PropTypes.object.isRequired,
            children:PropTypes.node
        }

		state = {
            location:this.props.history.location
        }

		componentDidMount(){
           this.unListen = this.props.history.listen((location,action)=>{
                this.props.history.action = action;
                this.setState({
                    locaton
                })
            })
        }

		componentWillUnMount(){
            this.unLiisten()	//取消监听
        }


		ctxValue = {}	//上下文中的对象

		render(){
            this.ctxValue.history = this.props.history;
            this.ctxValue.location = this.state.location;
            this.ctxValue.match = matchPath('/',"/")	//路径规则函数
			return (<ctx.Provider value={this.ctxValue}>
                		{this.props.children}
                	</ctx.Provider>)
        }
    }
    
    
RouterContext.js
	import { createContext } from 'react'
	const context = createContext();
	export default context;



BrowserRouter.js
	import React,{ Component } from 'react'
	import { createBrowserHistory } from './history'
	export default class BrowserRouter extends Component {
        history = createBrowserHistory(this.props)
		render() {
            reutrn (
            		<Router history={this.history}>
                		{this.props.children}
                	</Router>
            	)
        }
    }
```

![image-20200720103435991](React路由源码.assets/image-20200720103435991.png)





#### 实现Route

```react
//Route组件用于匹配路由，将路由匹配的结果放在上下文中
	import React,{ Component } from 'react'
	import PropTypes from 'prop-types'
	export default class Route extends Component {
       
    }
```





#### 实现Switch

```react
	匹配Route子元素，将渲染第一个匹配到的Route
    import React,{ Component } from 'react'
	export default class Switch extends Component {
        	
        getMatchChild(){
            let children = []
            if(Array.isArray(this.props.children)){
                children = this.props.children;
            }
            else if(typeof this.props.children === "object"){
                    children = [this.props.children]
            }
            for(const child of children){
                //判断该元素是否匹配
                ****
            }
        }
        
        render(){
            return ths.getMatchChild();
        }
    }
```





#### 实现withRouter

```react
	import React from 'react'
	import ctx from './RouterContext'

	export default function withRouter(Comp) {
        function routerWrapper(props) {
			reutrn (<ctx.Consumer>
                		{value=><Comp {...values} {...props}/>}
                 	</ctx.Consumer>)
        }
        
        routerWrapper.displayName= `withRouter(${Comp.displayName})`;
        return routerWrapper;
    }
```





#### 实现Link

```react
	import React from 'react'
	
	export default function Link(props){

        }
        
        return (<ctx.Consumer>
            	{
                	value => {
                       let href = props.to;
        			   if(typeof prop.to === "object"){
             	 	   href = value.history.createHref(props.to)
                    }    
                        
                    return <a href={href}>{props.children}</a>
                }
            	</ctx.Consumer>)
    }




	
```

