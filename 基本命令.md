# 基本命令

vue add vuex          		添加仓库store.js

npm run build      		  项目打包

npm install  axios		  安装axios  



在根目录下新建一个vue.config.js

module.exports = {

​	productionSouceMap:false，    //删除打包后的map文件

​	outputDir:'./mydist'           		 //设置输出目录

​	publicPath:'www.baidu.com'   //设置公共路径

​	assetsDir:'assets'  					//将资源合并至目录

​	configureWebpack:{				//设置webpack

},

​	devServer:{

​			proxy:{

​		'url':{

​			target:'代理地址'

}

}

}

} 



axios.get('url',{params:{}})



process.env.NODE_ENV   当前生产模式     production 和  develop

