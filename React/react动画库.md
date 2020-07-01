#### react动画库

```react
//安装依赖
yarn add react-transition-group

```



#### Transition组件

```react
//主要用于挂载组件和卸载组件的动画
import { useState } from 'react'
import { Transition } from 'react-transition-group'

const duration = 300;

const defaultStyle = {
	transition:`opacity ${duration}ms ease-in-out`,
    opacity:0
}

const transitionStyle = {
    entering:{opacity:1},
    entered:{opacity:1},
    exiting:{opacity:0},
    exited:{opacity:0}
}


export default function App() {
    const [inProp,setInProp] = useState(false)
    return (
    	<div>
        <Transition in={inProp} timeout={500}>
           //in属性控制state状态，true的时候为entered，
            false的时候为exited
        {
        state = >(
        	<div style{{...transitionStyle[state]}}>
            	这是一个样式组件
            </div>
        )
        }    
        </Transition>
                  
         <button onClick={()=> setInProp(true)}>
           Click to Enter
         </button>	
        </div>
    )
}
```

