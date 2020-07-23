#### 使用dva

```react
	umi-plugin-react
	yarn add umi-plugin-react

在.umirc.js中
	export default {
        routes:xxx,
        plugins:[
            	['umi-plugin-react',{
                    title:true	//开启title插件
                    scripts:[{src:"./a.js"},{src:"./b.js"}],
            		dva:true,	//开启dva插件
            		immer:true  //开启immer插件
                }]
                ]
    }
    

```



#### dva模型

```react
    //dva插件和umi整合后，将模型分为两种
    	1.全局模型:所以页面通用,工程一开始启动后，模型就会挂载到仓库
        2.局部模型:只能被某些页面使用,访问具体的页面时才会挂载到仓库

	定义全局模型
        在src/models目录下定义的js文件都会被看做全局模型,默认情况下,模型的命名空间和文件名一致
		
	定义局部模型
    	局部模型定义在pages文件夹或其子文件夹中，在哪个文件夹定义的模型，会被该文件夹中的所有页面以及子页面所共享。
	   
```



#### 使用样式

```react
	解决的问题:
		1.保证类样式名称的唯一性
        2.解决样式代码的重复
        
```



#### 局部样式和全局样式

```react
	底层使用了webpack的加载器:css-loader (内部包含了css-module的功能)
		1.某个组件特有的样式,不与其他组件共享,通常，将改组件样式与组件放置在同一个目录
		2.如果某些样式可能被某些组件共享，这样的样式，通常放到assets/css文件夹中
		3.全局样式，名称一定唯一，不需要css-module处理
			umijs约定,src/global.css样式是全部样式，不会交给css-module处理
	import styles from 'xxx.css'
	function Counter(){
        return (<div className={styles.xxx}></div>)
    }
```

