#### 创建一个React组件

```jsx
1.函数组件
	**//组件名的首字母必须大写，用于区分普通react元素和组件元素
      //组件本质也是一个React元素
    import React form 'react'
	export default function MyFuncComp(props) {
    return <h1>组件内容{props.number}</h1>
}
	ReactDOM.render(<MyFuncComp number='2 '></MyFuncComp>,root)




2.类组件
	import React form 'react'
	export default class MyclassComp extends React.Component {
        constructor(props){
            super(props)	//this.props = props
        }
        render() {//该方法必须返回React元素
            return <h1>类组件内容</h1>
        }
    }
    
```





#### 组件的属性

```js
1.对于函数组件，属性会作为一个对象的属性，传递给函数的参数
2.对于类组件，属性会作为一个对象的属性，传递给构造函数的参数

**两种方式组件的属性是只读的，无法修改

function创建的组件props只能读，不能写
calss创建的组件state可读也可写
因此function组件也被称为无状态组件，class组件被称为状态组件

因为function组件中剔除了生命周期，因此运行速度相对较快
```



#### 组件状态

```jsx
组件可以进行自行维护的数据
export default class Tick extends React.Component{
    constructor(props){
        super(props)
        //初始化状态
        this.state = {
            left:this.props.number
        }
        
        this.timer = setInterval(function(){
            
            //重新设置状态，触发自动的重新渲染
            this.setState({
                left:this.state.left - 1
            })
            
        },1000)
    }
    
    render(){
        //通过this.props可以拿到组件传递的数据
        return (
        	<h1>
            	倒计时剩余时间:{this.state.left}
            </h1>
        )
    }
}
```



#### this.setState

```js
this.setState(function(prevState,props){
    //prevState  之前state中的数据
    //props 	 外部传递给组件的数据
	return {
        msg:xxx
    }
},
             function(){//回调函数
	console.log(this.state.msg)
})



//this.setState是异步执行的，因此直接在后面拿到this.state的值是旧的
```





#### 组件中触发事件

```jsx
export default class Tick extends React.Component{
    constructor(props){
        super(props)
    }
    
    handle(){
        console.log('触发点击')
        console.log(this)	//undefined
    }
    
    handel = ()=>{
		console.log('触发点击')
        console.log(this)
    }
    
    render(){
       
        return (
        	<button onClick={this.handle}></button>
        )
    }
}


//React组件的函数内this默认指向undefined,因此想指向调用者需要用箭头函数
```

