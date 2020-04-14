#### Vue组件注册

```js
全局组件注册
Vue.component('new',{
data:function(){  //之所以data中放置一个函数，是为了形成闭包，让每一个组件				   //的data都相互独立
		return{
			count:0
		}
	},
    template:'<div @click="count++">这是一个小组件</div>'
})

1.data必须是一个函数
2.组件模板内容必须是单个根元素
3.组件模板内容可以是模板字符串

命名方式
Vue.component('my-component',{})
Vue.component('MyConponent',{})


局部组件注册
components:{
    'component-a':ComponentA,
    'component-b':ComponentB,
    'component-c':ComponentC
}
```



#### Vue调试工具

```
1.克隆仓库
2.安装依赖包			npm install	
3.构建			  npm run build
4.打开Chrome扩展页面
5.选中开发者模式
6.加载已解压的扩展，选择shells/chrome
```

