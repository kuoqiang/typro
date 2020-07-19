#### Middleware

```react
	中间件:类似于插件，可以在不影响原本功能、并且不改动原本代码的基础上，对其功能进行增强。
	在Redux中，中间件主要用来增强dispatch函数。

```



#### Redux中间件书写

```react
	中间件本身是一个函数，该函数接收一个store参数，表示创建的仓库，该仓库并非一个完整的仓库对象，仅包含getState,dispatch。该函数运行的时间，是在仓库创建完成之后。
	由于仓库创建后需要自动运行设置的中间件，因此需要在创建仓库时，告诉仓库有那行中间件
    所以需要调用applyMiddleware函数，将函数的返回结果作为createStore的第二或第三个参数。
    中间件函数必须返回一个dispatch创建函数，返回的函数需要有一个参数dispatch
    
    import { applyMiddleware } from 'redux'
	
	const store = createStore(reducer,applyMiddleware(loggerMIddleWare))
     
    
    //方式一
    const store = createStore(reducer,applyMiddleware(logger1,logger2));

	//方式二(可以不会)
	applyMiddleware(logger1,logger2)(createStore)(reducer)
	applyMiddleware用于记录有哪些中间件，它会返回一个函数，该函数用于记录创建仓库的方法,然后又返回一个函数
```



 #### 手写applyMiddleware

```react
	export default function (...middlewares){
        	return function(createStore) { //给一个创建仓库的函数
                return function(reducer,defaultState) {
                    //创建仓库
                    const store = createStore(reducer,defaultState);
                    let dispatch = () => {
                        throw new TypeError("目前还不能使用dispatch")
                        
                        //给dispatch赋值
                        const dispatchProducers = 
                        return {
                            ...store,
                            dispatch
                        }
                    }
                }
            }
    }
```





#### redux-logger

```react
	//调试打印日志记录
	import logger  from 'redux-logger'
	const store = createStore(reducer,applyMiddleware(logger))
	**** logger中间件一定要放在最后一个
```





#### redux-thunk

```react
	//处理副作用
	import thunk from 'redux-thunk'
	const store = createStore(reducer,applyMiddleware(thunk))
    
    
```

