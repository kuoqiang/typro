#### React全家桶

```react
前端最佳实践  (达成共识)  

React   			ui解决方案
React-Router		解决路由
Redux				数据的解决方案

```



#### action

```react
//action可以自己手动写，描述需要做的事

const action = {
    type:"increase"
}

store.dispatch(action)	//向仓库分发action



action是一个plain-object(平面对象)
 	它的__proto__指向Object.prototype
action中必须有一个type属性，该属性用于描述操作的类型
	在大型项目中，由于操作类型非常多，为了比秒硬编码(hard code),会将action的类型存放到一个或一些单独的文件中(样板代码)
	比如说
    	export const INCREASE = "increase"
    	export const DECREASE = "decrease"       
        
        import * as actionTypes from "xxxxxx"





**如果使用redux提供的创建action函数
	import { bindActionCreators } from "redux"

	var bindActions = bindActionCreators(numberActions,store.dispatch)
	//第一个参数是action创建函数合并的对象，第二个参数是仓库的dispatch函数，这样会得到一个新的对象，新对象中的属性名与第一个参数的属性名一致,使用里面的方法会自动进行分发
```





#### reducer

```react
reducer本质上就是一个函数,redux没有提供，需要自己写

function reducer(state,action){
    //state:之前仓库中的状态
    //action:描述要做什么的对象，约定的action格式:{type:"操作类型",payload:"附加数据"}
    if(action.type === "increase"){
        return state + 1;
    }
    else if(action.type === "decrease"){
        return state - 1;
    }
    return state;
}


//一个基本功能完善的单独reducer

	export default (state = initalState, { type,payload }) =>{
        switch(type){
            case userAction.ADDUSER://增加用户
                return [...state,payload]
            case userAction.DELETEUSER://删除用户
                return state.filter( (it)=> it.id !== payload)
            case userAction.UPDATEUSER://更新用户
                return state.map( (it) => it.id === payload.id ? payload:it)
        }
    }

```



#### store

```react
import { createStore } from "redux"
//reducer改变状态后会将结果返回给store

const store = CreateStore(reducer,"数据默认值")	//创建一个store仓库

store.getState()		//获取仓库中的数据




```

