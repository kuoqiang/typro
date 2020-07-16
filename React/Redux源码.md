#### 手写createStore

```react
//createStore.js
	export default function(reducer,defaultState){
        const currentReducer = reducer;	//当前使用的reducer
        const currentState = defaultState; //当前仓库中的状态
        const listener = [];			   //记录所有的监听器(订阅者)
        
        function dispatch(action){
            //验证action
            if(!isPlainObject(action)){
                throw new TypeError("传递的action必须是一个平面对象")
            }
            
            //验证action的type属性是否存在
            if(action.type === undefined) {
                throw new TypeError("action必须有type属性")
            }
            
           currentState = currentReducer(currentState,action)
            
            //运行所有的监听器
            for(const listen of listener) {
                listen();
            }
        }
        
        function getState(){
            return currentState;
        }
        
        function subscribe(listen){
            listener.push(listen);	//将监听器加入到数组中
        }
        
        return {
            dispatch,
            getState,
            subscribe
        }
    }



	//验证action的函数
	function isPlainObject(obj){
        if(typeof obj !== "object") {
			return false;
        }
        return Object.getPrototypeOf(obj) === Object.prototype;
    }
```

