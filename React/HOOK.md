#### HOOK简介

```react
	函数组件没有生命周期，也没有state以及上下文，总之函数组件很纯粹但是内容很少。
    类组件中存在this指向问题，以及繁琐的生命周期。
    
    **HOOK专门用于增强函数组件的功能，使之理论上可以成为类组件的替代品。 
	(HOOK在类组件中无法使用，只能在函数组件中使用)

	HOOK本质上是一个函数(命名上总是以use开头),该函数可以挂载任何功能
```



#### HooK种类

```react
useState
useEffect
Reducer HooK
Context Hook
Callback Hook
Memo Hook
Ref Hook
```



#### State Hook

```react
//State Hook用于在函数组件中使用状态
	import React,{ useState } from 'react'

	export default functon App() {
       const [n,setN] = useState(0)//不填则默认值为undefned
       const [Visible,setVisible] = useState(true);
      //函数的返回值是一个数组，该数组一定包含两项，当前状态的值和改变状态的函数
       
        return <div style={{ display:Visible ? "block":"none"}}>
            		<button onClck={()=> {setN(n-1)}}>-</button>
            		<span>{n}</span>
            		<button onClick={()=> {setN(n+1)}}>+</button>
        	   </div>
        
        			<button onClick={()=>{
                	setVisiible(!Visible)
            					}}>显示/隐藏</button>
    }


//一个函数组件中可以有多个状态，这种做法非常有利于横向切分关注点。


**** State Hook原理
	1.当运行一个函数组件时
    
    
    
**** 注意的细节
	1.useState最好写在函数的起始位置，便于阅读
    2.useState严禁出现在判断循环代码中
    3.useState返回的函数(数组的第二项),引用不变(节约内存空间)
	4.如果使用函数改变数据,若数据和之前的数据完全相等(使用Object.is比较),不会导致重新渲染。
	5.使用函数改变数据，传入的值不会和原来的数据进行合并，而是直接进行替换。
    6.如果要实现强制刷新组件
    	类组件:使用forceUpdate函数
        函数组件:使用一个空对象的useState
    7.如果某些状态之间没有必然的联系，应该分化为不同的状态，而不要合并成一个对象。
    8.和了组件的状态一样，函数组件中改变状态可能是异步的(在DOM事件中)，多个状态变化会合并以提高效率，此时，不能信任之前的状态，而应该使用回调函数的方式改变状态。
```



#### Effect Hook

```react
//Effect Hook 用于在函数组件中处理副作用
	副作用:
		1.ajax请求
        2.计时器
        3.其他异步操作
        4.更改真实DOM对象
        5.本地存储
        6.其他会对外部产生影响的操作
        
        useEffect接收一个函数作为参数，接收的函数就是需要进行副作用操作的函数
        
        
	import React,{ useState, useEffect } form 'react'
	export default function App(){
        const [n,setN] = useState(0);
        useEffect(()=>{
            document.title = `计数器:${n}`
        })
        return(
        		<div>
            		<span>{n}</span>
                	<button onClick={()=>{setN(n+1)}}>+</button>
            	</div>
        	)
    }


****注意的细节
		1.副作用函数的运行时间点，是在页面完成真实的UI渲染之后。因此它的执行是异步的，不会阻塞浏览器。
        2.与类组件中componentDidMount和componentUpdate的区别
      componentDidMount和componentUpdate更改的真实的DOM,但是用户还没有看到UI更新就运行了。		 useEffect的副作用函数，是更改了真实的DOM,并且用户已经看到UI更新时才运行。

		3.每个函数组件中，可以多次使用useEffect,但是不能在判断循环代码中使用。
		4.useEffect中的副作用函数，可以有返回值，返回值必须是一个函数，这个函数叫做清理函数。返回的这个函数在每次运行副作用函数之前运行，并且首次渲染组件不会运行。组件被销毁时，一定会被运行清理函数。
        5.useEffect可以传递第二个参数，第二个参数是一个数组，数组中记录该副作用依赖的数据，只有依赖数据发生改变时，才会执行副作用函数。
        6.使用空数组作为依赖项，则副作用函数仅在挂载的时候运行，清理函数只在足迹按卸载时运行。
        
        7.副作用函数中，如果使用了函数上下文中的变量，则由于闭包的影响，会导致副作用函数中的变量不会实时变化。
        8.副作用函数在每次注册时，会覆盖掉之前的副作用函数，因此，尽量保持副作用函数稳定。
```





#### 自定义Hook

```react
//将一些常用的、跨越多个组件的Hook功能，封装出去形成一个函数，该函数就是一个自定义Hook。
	自定义Hook需要遵循一些规则:
		1.函数名必须以Use开头
        2.调用自定义Hook函数时应该放在顶层
        
        
        
//很多组件挂载时都需要启动一个定时器，然后在其销毁的时候清除，这就可以使用自定义Hook。
        import {useState, useEffect} from 'react'
		export default function(func,duration){
            useEffect(()=>{
                const timer = setInterval(func,duration)
                return ()=>{
                    clearInterval(timer)
                }
            },[])
        }
        
        
//useAllStudents.js
        import react,{ useEffect, useState } from 'react'
		export default function useAllStudents(){
            const [students,setStudents] = useState([])
            useEffect(()=>{
                (async ()=>{
                    const stus = await getAllStudents();//ajax获取数据
                    setStudents(stus);
                })();
            },[])
            
            return students;	//返回数据
        }




//App.js
	import useAllStudents from './myhooks/useAllStudents'

	function Test(){
        const stus = useAllStudents()			//使用变量接收之前请求好的数据
        const list = stus.map(it=> <li key={it.id}>{it.name}</li>)
                              
        return <ul>
                 {list}
               </ul>
    }

//高阶组件也可以实现这样的功能，但是使用高阶组件会导致组件层次越来越深。
```

