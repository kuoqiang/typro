#### 级联表格

```
vue-table-with-tree-grid

```





#### 富文本编辑器

```vue
vue-quill-editor

*全局注册
import VueQuill from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuill)

<template>
  <!-- Two-way Data-Binding -->
  <quill-editor
    ref="myQuillEditor"	
    v-model="content"   双向绑定的内容
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
  />

  <!-- Or manually control the data synchronization -->
  <quill-editor
    :content="content"
    :options="editorOption"
    @change="onEditorChange($event)"
  />
</template>
```



#### 数据深度克隆

```
lodash

import _ from 'lodash'
```



#### 请求进度条

```js
nprogress

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


Nprogress.start()	//展示进度条
Nprogress.done()	//隐藏进度条
```



#### 项目上线时自动移除console信息

```js
babel-plugin-transform-remove-console
//development 开发环境
//production  生产环境(上线)

安装依赖后在 .babel.config.js文件中配置
const prodPlugins = []
if(process.env.NODE_ENV === 'production'){//判断当前环境
	prodPlugins.push('transform-remove-console')
}

module.exports = {
    {
	plugin:[
        ...prodPlugins
    ]
}
}
```



