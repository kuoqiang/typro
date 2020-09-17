#### 设置自定义的文件默认路径

```js
#方法一
const path = require('path')

module.exports = {
    chainWebpack:(config)=> {
        config.resolve.alias.set('@element',
        path.resolve(__dirname,'src/components/element'))
    }
}


#方法二
const path = require('path')

module.exports = {
    configureWebpack:{
       resolve:{
			alias:{
				'@element':'@/components/element'
            }
       }
    }
}

//配置之后，使用@element就能代表 src/component/element路径

```

