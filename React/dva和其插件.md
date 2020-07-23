#### dva

```react
dva不仅仅是一个第三方库，更是一个框架，它主要整合了redux的相关内容，让我们处理数据更加容易。
dva依赖了很多库:react、react-router、redux、redux-saga、react-redux、connected-react-router
```



#### dva使用

```react
	dva默认导出一个函数，通过调用该函数，能够得到一个dva应用程序对象
    	dva.router:路由方法，传入一个函数，该函数返回一个React节点，将来应用程序启动后,会自动渲染该节点
		dva.start:该方法用于启动react程序,该函数传入一个选择器,用于选中页面中的dom元素，react会将内容渲染到该元素内部。
		dva.model:该方法用于定义一个模型，该模型是将redux的action、reducer、redux-saga整合成一个对象,将该对象传入model。**模型定义一定要在启动之前
        
index.js
	import React from 'react'
	import App from './App'
	import dva from 'dva'
	import counter form './counter.js'
	//得到一个dva对象
	const app = dva();
	
	//在启动之前定义模型
	app.model(counter);

		model中的属性
        	1.namespace:命令空间，作为仓库
            2.state:该模型的默认状态
            3.reducers:该属性配置一个对象，该对象的每个方法都是一个reducer,dva约定方法的名字就是匹配action的类型
            4.effects:处理副作用，底层是使用redux-saga实现的，该属性配置为一个对象,对象中的每个方法均处理一个副作用，方法的名字就是匹配的action类型。
			函数参数1:action
            函数参数2:封装好的saga/effects对象
            5.subscriptiosns:配置为一个对象，该对象中可以写任意数量的属性，每个属性是一个函数，这些函数会在模型加入到仓库中后立即执行。传递的一个参数为dispatch和history对象
            
	//设置根路由,应用程序启动后函数的返回结果会被渲染
	app.router(()=><App />)
    app.start("#root")


counter.js
	export default {
        namespace:"counter",
        state:0,
        reducers:{
            increase(state){
                return state + 1;
            },
            decrease(state){
                return state - 1;
            }
        },
        effects:{
            *asyncIncrease(action,{call,put}){
                yield call(delay,2000)
                yield put({type:"Increase"})
                
            },
            *asyncDecrease(action,{call,put}){
                yield call(delay,2000)
                yield put({type:"Decrease"})
            }
        },
        subscriptions:{
            resizeIncrease({dispatch}){
                //订阅窗口尺寸变化,每次变化让数字增加
                window.onresize = () =>{
                    dispatch({type:"Increase"})
                }
            }
        }
    }

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(()=>{
			resolve()
        },duration)
    })
}
               

Counter.js
	import React from 'react'
	import { connect } from 'dva'
	
	function Counter(props){
        return (
        	<div>
            	<h1>{props.number}</h1>
                <button onClick={props.onDecrease}>-</button>
                <button onClick={props.onIncrease}>+</button>
            </div>
        )
    }


	function mapStateToProps(state){
        return {
            number:state.counter
        }
    }

	function mapDispatchToProps(dispatch){
        return {
            onIncrease:()=>{
                dispatch({
                    type:"counter/increase"
                })
            },
            onDecrease:()=>{
                dispatch({
                    type:"counter/increase"
                })
            }
        }
    }

	export default	connect(mapStateToProps)(Counter)


App.js
	import Counter from './Counter'
	export default function App(){
        	return (
            	<div>
                    <Counter />
                </div>
            )
    }
```



#### dva插件(中间件)

```react
	通过dva对象dva.use(),来使用插件，插件本质就是一个对象，该对象于配置对象相同，dva在启动时,将传递的插件对象混合到配置中。
	
myDvaPlugn.js
	const logger = sotre => next => action => {
        console.log("老状态",store.getState())
        console.log(action)
        next(action)
        console.log("新状态",store.getState())
        
    }
    
    export default {
        onAction:logger
    }

index.js
	import dva from 'dva'
	import myDvaPlugn from './myDvaPlugin'
	import { createBrowserHistory } from 'history'
	import createLoading from 'dva-loading'

	const app = dva({
		history:createBrowserHistory()
    })
    app.use(myDvaPlugin)
	app.use(createLoading({
        namespace:"handleEffect"
    })) //使用dva-loading插件

	app.model(模型)
	app.router(根组件)
	app.start("#root")


//第三方dva插件   dva-loading
	该插件会在仓库中加入一个名为loading的状态，它是一个对象,里面有三个属性
	  global:全局是否在处理副作用(加载),只要有任何一个模型在处理副作用，则该属性为true
      models:一个对象,对象中的属性名以及属性的值,表示哪个对应的模型是否在处理副作用(加载中)
      effects:一个对象，对象中的属性名以及属性值,表示是哪个action触发了副作用
```

