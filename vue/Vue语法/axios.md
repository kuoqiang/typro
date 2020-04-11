#### 组件内使用axios

```js
import axios from 'axios'
Vue.prototype.$http = axios;

这样每个组件都可以通过this直接访问到$http发送ajax请求
```



#### 设置axios根路径

```
axios.defaults.baseURL = 'xxx'
```



#### axios拦截器

```js
//请求拦截器
axios.interceptors.request.use(config=>{
	//为请求头对象，添加token验证的Authorization字段
    config.headers.Authorization = window.sessionStorage.getItem('token')
    
    Nprogress.start() //展示进度条
    
    return config
})

//响应拦截器
axios.interceptors.response.use(config=>{
	//config为响应数据
    
    Nprogress.done() //隐藏进度条
    
    return config
})
```

