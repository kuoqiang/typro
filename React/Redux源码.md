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
            let isRemove = false;	//是否已经移除了监听器
            
            //将监听器从数组中移除
            return function () {
                if(isRemove){
                    return;
                }
                
                const index = listener.indexOf(listen)
                listener.splice(index,1)
                isRemove = true;
            }
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





#### 手写bindActionCreators

```react
//bindActionCreator.js
	export default function (actionCreators,dispatch){
        if(typeof actionCreators === "function"){
            return getAutoDispatchActionCreator(actionCreators,dispatch)
        }
        else if(typeof actionCreators === "object"){
            const result = {};
            for(const key in actionCreators){
                if(actionCreators.hasOwnProperty(key)) {
                    const actionCreator = actionCreators[key];
                    if(typeof actionCreator === "function") {
                        result[key] = getAutoDispatchActionCreator(actionCreators,dispatch)
                    }
                }
            }
        }
        else {
            throw new TypeError("actionCreators必须是一个函数或者对象")
        }
    }




	//得到一个移动分发的action创建函数
	function getAutoDispatchActionCreator(actionCreator,dispatch) {
        return function(...args){
           const action =  actionCreator(...args);
            dispatch(action)
        }
    }
```





#### combineReducers

```react
//combineReducers.js
	**组装reducers,返回一个完整的reducer,数据使用一个对象表示，对象的属性名与传递的参数对象保持一致
	export default function(reducers) {
        //验证reducers是否为平面对象
		validateReducers(reducers)
        
        return function (state = {},action) {
            const newState = {}; //需要返回的状态
            for(const key in reducers) {
                if(reducers.hasOwnProperty(key)) {
                    const reducer = reducers[key];
                	newState[key] = reducer(state[key],action)
                }
            }
            return newState;//返回状态
        }
    }
	




	function validateReducers(reducers) {
        if(typeof reducers !== "object") {
            throw new TypeError("reducers必须要是一个对象")
        }
        if(!ifPlainObject(reducers)) {
            throw new TypeError("reducers必须是一个平面对象")
        }
        
        for(const key in reducers){
            const reducer = reducers[key]
           const state = reducer(undefined,{
                type:"@@/INIT"
            })
           
           if(state === undefined){
               throw new TypeError("reducers不能返回undefined")
           }
        }
    }
```

