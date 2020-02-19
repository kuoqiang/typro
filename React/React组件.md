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

```
1.对于函数组件，属性会作为一个对象的属性，传递给函数的参数
2.对于类组件，属性会作为一个对象的属性，传递给构造函数的参数

组件的属性也是只读的，无法修改
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
            this.setState({
                left:this.state.left - 1
            })//重新设置状态，触发自动的重新渲染
        },1000)
    }
    
    render(){
        return (
        	<h1>
            	倒计时剩余时间:{this.state.left}
            </h1>
        )
    }
}
```

