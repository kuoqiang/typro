#### redux插件

```react
谷歌安装redux-devtools之后，还不能直接使用
需要npm安装第三方库:redux-devtools-extension

之后
	import { createStore , applyMddleware } from 'redux'
	import { composeWithDevTools } from 'redux-devtool-extension'

	const store = createStore(reducer,composeWithDevTools(applyMiddleware(中间件)))
```

