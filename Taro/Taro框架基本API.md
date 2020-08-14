#### 常见配置

```js
写在app.jsx的class中,它会编译到dist中的app.json里


//pages   类型是字符串数组,用于配置页面路径列表
	pages:[
        'pages/index/index',
        'pages/about/about'
    ]


//window	一个对象,配置全局的默认窗口表现
	window:{
        backgroundTextStyle:'light',	//全局文字颜色
        navigationBarBackgroundColor:'#000',	//导航栏背景颜色
        navigationBarTextStyle:'white',			//导航栏文字颜色
        enablePullDownRefresh:true
    }



//tabBar	一个对象,配置底部tab栏的表现
```





#### 小程序页面常用模板配置

```react
import Taro,{ Component } from '@tarojs/taro'
import {View,Text} from '@tarojs/components'

export default class About extends Component{
    render(){
        return (<div></div>)
    }
}
```



#### 页面配置

```react
	Taro的页面同样是继承自Component组件基类,每一个页面都拥有自己的配置config,这个配置是针对当前页面配置
	页面文件中的config配置,再编译后将生成全局配置文件app.json

页面的生命周期
	shouldComponentUpdate(nextProps,nextState)
	//页面是否需要更新,返回false不更新,否则继续向下更新

	componentWillUpdate(nextProps,nextState)
	//页面即将更新的时候执行

	componentDidUpdate(prevProps,prevState)
	//页面更新完毕时执行

	this.$router.params

	//普通页面的配置只能放置window里的内容
	config = {
        navigationBarBackgroundColor:"#fff"
    }
```





#### 页面事件处理函数

```react
 页面跳转
 //navigateTo不能用于在tabBar跳转
 	Taro.navigateTo({
        url:"/pages/about/about?id=2"
    })

//专用于tabBar的跳转,但是不能传递数据
	Taro.switchTab({
        url:'/pages/about/about'
    })

//用于页面重定向
	Taro.redirectTo({
        url:'/pages/about/about?id=2'
    })



监听用户下拉刷新事件
	onPullDownRefresh(){
        console.log('下拉后拖放鼠标时触发')
        Taro.stopPullDownRefresh()	//收回下拉刷新
    }//可以直接在Taro中调用微信对象wx


监听用户上拉触底事件
	onReachBottom(){
       //onReachBottomDistance,在触发距离内滑动期间,本事件只会被触发一次
    }
```

