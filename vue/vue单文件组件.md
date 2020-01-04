#### 组成结构

```js
template 	组件的模板区域
script		业务逻辑区域
style		样式区域
```



#### 示例结构

```vue
<template>
    这里用于定义vue组件的模板内容
</template>

<script>
	export default {//返回一个配置对象
        data(){
         return {}
    },
        methods:{
            
        }
    }
</script>

<style	scoped>
	这里用于定义样式  
    scoped:让样式只作用于当前模块
</style>
```

