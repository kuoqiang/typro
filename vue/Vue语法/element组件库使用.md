# element组件库使用



### 方法一

  创建vue脚手架后

  vue add element

  选择fully element //默认导入，导入所有的

  选择zh-CN





### 方法二

   ```js
创建vue脚手架后
npm install element-ui   -S
//导入组件库   写在src目录下的main.js文件中
import ElementUI from 'element-ui'
//导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css'
//配置 Vue 插件
Vue.use(ElementUI)
   ```



### 方法三

```js
运行 vue ui 命令，打开图形化界面
通过Vue项目管理器，进入具体的项目配置面板
点击 插件 -> 添加插件，进入插件查询面板
搜索 vue-cli-plugin-element 并安装
配置插件，实现按需导入，从而减少打包后项目的体积
```



#### 组件样式修改

```
修改样式时需要加!important增加权重

如果给style加scoped会导致element-ui组件样式无法生效，因此可以把全局样式和组件样式分为两个style编写
但是这样还有个问题，组件样式会作用在所有同类组件上，因此还需要再特定组件上添加类名进行区分，让效果只显示到想要的组件上
```

