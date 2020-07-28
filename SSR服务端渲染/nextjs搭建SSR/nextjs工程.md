#### nextjs

```react
npm install next reat react-dom
	//工程中新建pages目录
	index.jsx
	export default ()=>{
        return <h1>index 首页</h1>
	}
    
    npm run dev  	开启服务器
    npm run build   项目打包
```



#### 模板

```react
根目录下_app.jsx
	export default ({ Component },...props) => {
        return <div>
        	<h1>模板</h1>
            <Componet {...props} />
        </div>
    }
```





#### 动态路由

```react
	/movies/[id].jsx
			会匹配"/movies/:id"路由
            
    movies文件夹下的[id].jsx
		export default (props)=>{
			return <h1>详情页，id:{props.router.query.id}</h1>
        }
        
        
多段动态路由
	在movies下的[...params].jsx中
		export default (props) => {
            return	<h1>多段路由</h1>
        }
        
      如果访问/movies/a/b/c/d,则props.router.query.params为["a","b","c","d"]
```



#### 路由跳转

```react
链接式跳转
	export default ({Component}, ...props) => {
        return (
        	<div>
            	<ul>
                	<li>
                    	<Link href="/"><a>首页</a></Link>
                    </li>
                    <li>
                    	<Link href="/movies"><a>电影页</a></Link>
                    </li>
                    <li>
                    	<Link href="/movies/[id]" as="/movies/3"><a>电影详情页</a></Link>
                    </li>
                </ul>
代码式跳转
                <button onClick={()=>{
                        props.router.push("/movies/[...params]","/movies/a/b/c")
                    }}>点击跳转到[...params].jsx</button>
            </div>
        )
    }


```





#### 标题、样式、图片

```react
	样式
    	import styles from 'xxxx.module.css'

	静态资源
    	根目录下public文件夹里的都是静态资源，会自动托管。
```

