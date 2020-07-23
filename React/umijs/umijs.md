#### umijs

```react
插件化、开箱既用(自带react、redux、dva依赖)、约定式路由

全局安装 umi
yarn global add umi

安装完成后会提供一个命令行工具:umi,通过该命令可以对umi工程进行操作
	umi dev  	//用开发模式启动工程
    umi build	//打包项目
    
umi约定,工程中的pages文件夹中存放的是页面。
```





#### 约定式路由

```react
	约定式:使用约定好的文件夹和文件，来代表页面，umi会根据开发者书写的页面，生成路由配置。
    配置式:直接书写路由配置文件(vue就是配置式)
	
	umi约定,工程中的pages文件夹中存放的是页面。如果工程中包含src目录,则src/pages是页面文件夹。
	umi约定,页面的文件名,以及页面的文件路径,是该页面匹配的路由。
	umi约定,如果页面的文件名是index,则可以省略文件名。(注意避免文件名和当前目录中文件夹名称相同)
	umi约定,如果src/layout目录存在,则该目录中的index.js表示的是全局的通用布局，布局中的children则会添加具体的页面。
	umi约定,如果pages文件夹中包含_layout.js,则layout.js所在的目录以及其所有的子目录中的页面，共用该布局。
	404约定:umi约定,pages/404.js,如果路由无匹配，则渲染该页面。(该约定在开发模式中失效)
	
	使用$名称,会产生动态路由。
	比如在sub文件夹中创建$id.js,就类似于 "sub/:id"
```



#### 配置式路由

```react
	***当使用了配置式路由后，约定式路由全部失效。
	两种方式书写umi配置
    方式一:使用根目录下的文件 .umirc.js
	方式二:使用根目录下的文件 config目录添加config.js

	路由配置中的信息，同样可以放到约定式路由中，方式是为约定式路由添加第一个文档注释(YAML)
	/**
	*title: 首页
	*
	*/
	该注释需要放在最开始的位置	


//进行路由配置时，每个配置就是一个配置规则，并且，每个配置是一个对象，对象中的某个属性，会直接
	export default {
        routes:[
            path:"/",
            component:"../layouts/index.js",
            exact:false,
            routes:[
            {
            path:"/login",component:"./login",exact:true,
            Routes:["./src/routes/组件名字.js"]
            },
        	{path:"/welcome",component:"./welcome",exact:true}
			//通过props.route.routes可以拿到配置信息
        ]
        ]
    }
    
    注意:
		component配置项，需要填写页面组件的路径,路径相对于pages文件夹
		如果配置项没有exact,则会自动添加exact为true
		每一个路由配置,可以添加任何属性
		Routes属性是一个数组,数组的每一项是一个组件路径,路径相对于项目的根目录。当匹配到路由后,会转而渲染该属性指定的组件,并会将component组件作为children属性放到匹配的组件中(props.children)
```





#### 路由跳转

```react
index.js
	import Link from 'umi/Link'
	import navLink from 'umi/navLink'
	import router from 'umi/router'

	export default function index(props){
        return (
        	<div>
            	<Link to="/">首页</Link>
            	<Link to="/a">页面a</Link>
            	<navLink to="/b">页面b</navLink>
                
                <button onClick={
                        ()=>{
							router.push('/')
                        }
                    }>点击跳转到首页</button>
            </div>
        )
    }



	导入模块时,@表示src根目录。
```





#### 路由信息的获取

```react
	所有的页面、布局组件，都会通过属性，收到下面的属性
    	match:等同于react-router的match
		history:等同于react-router的history(history.location.query被封装成了一个对象,使用的是query-string库进行封装)
		location:等同于react-router的location(location.query被query-string封装)

		如果需要在普通组件中获取路由信息,则需要使用withRouter封装。
	import withRouter from 'umi/withRouter'

	function A(props){
		return (
        	<div>
            	{props.location.pathname}
            </div>
        )
    }
	
	export default withRouter(A)


```

