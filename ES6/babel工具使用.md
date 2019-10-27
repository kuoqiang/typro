###  安装babel环境

npm   init   -y         //生成一个package.json文件

npm   install   @babel-core

npm   isntall    @babel/preset-env

npm   install    @babel/cli



#### 创建一个.babelrc文件

内部输入

{	

  "presets":[

​			"@babel/preset-env"

]

}





#### 例子：将test.js文件降级

npx babel   test.js  -o   new-test.js     --wait