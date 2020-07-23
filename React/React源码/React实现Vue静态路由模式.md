#### App.js

```react
import React from 'react'
import { Link,BrowserRouter as Router} from 'react-router-dom'
import RootRouter from './RootRouter'//自己创建

export default function App(){
    return (
    	<Router>
        	<div>
            	<RootRouter/>
                **自定义组件
            </div>
        </Router>
    )
}
```



#### routeConfig.js

```react
//模仿Vue的router规则

import Home from './Home'
//一次导入需要使用的组件

export default [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/news',
        exact:true,
        component:News,
        children:[
             {
        		path:'/',
       			exact:true,
        		component:NewsHome
    		},
            {
        		path:'/detail',
       			exact:true,
        		component:NewsDetail
    		},
            {
        		path:'/search',
       			exact:true,
        		component:NewsSearch
    		},
        ]
    }
]
```





#### RootRouter

```react
import React from 'react'
import routeConfig from './routeConfig' 
//导入自定义的路由规则
import { Route, Switch } from 'react-router-dom'

//一个函数,通过传递的规则数组生成路由组件
function getRoutes(routes,basePath){
    if(!Array.isArray(routes)){
        return null;
    }
    var Router = 
        routes.map((route,index) =>{
        const {children,path,component:Component,...rest} = route;
            let newPath = basePath+path;
            newPath = newPath.replace(/\/\//g,"/")
        return (
        	<Route key={index} path={newPath} {...rest} 
                render={(values) =>{
      			//使用这种方法才能拿到children的数据，values为路由上下文信息
                       return <Component {...values}>
                       {getRoutes(route.children,newPath)}
                       </Component>
                   } 
                }/>
        )
    })
    
    return (
    	<Switch>
        	{Router}
        </Switch>
    )
}

```



#### newLink

```react
//对React的Link组件进行增强，让其通过name属性也能进行匹配(模仿Vue)
import React from 'react'
import { Link } from 'react-router-dom'
import routeConfig from './routeConfig'

function getPathFromName(name,baseUrl,routesArr){
    //根据name属性拿到对应的path 
    for(const item of routesArr) {
        let newPath = baseUrl + item.path
        if(item.name == name){
            return newPath
        }
        else {
            if(Array.isArray(item.children)){
                const path = getPathFromName(name,newPath,item.children)
                if(path !== undefined){
                    return path;
                }
            }
        }
    }
     
}


export default function NewsLink({to,...rest}){
    if(to.name && typeof to !== "string") {
        if(to.pathname === undefined) {
            throw new Error("name属性值无效")
        }
     to.pathname = getPathFromName(to.name,"/",routeConfig)
    }
    return <Link {...rest} />
}
```

