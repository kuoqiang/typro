#### 特点

```html
1.项目上线，html,css,js文件压缩合并
2.语法转换
3.公共文件抽离
4.修改文件浏览器自动刷新
```



#### Gulp

```js
1.在项目根目录下简历gulpfile.js文件
2.重构项目的文件夹结构， src目录放置源代码， dist放置压缩重构后的代码
3.在gulpfile.js中编写任务
4.在命令行工具中执行gulpfile.js中的任务
```



#### Gulp提供的方法

```js
var gulp = require('gulp');  //引入gulp模块

gulp.task('任务名称',callback)	 //建立一个gulp任务
gulp.src()   //获取任务要处理的文件
gulp.dest()	 //输出文件
gulp.watch() //监听文件的变化

.pipe()      //装入需要处理的gulp操作
```



#### Gulp 命令

```js
//先要安装gulp-cli命令行工具
gulp 任务名        //执行gulp命令
```



#### Gulp插件

```js
gulp-htmlmin    //html文件压缩
gulp-csso       //压缩css
gulp-babel      //javaScript语法转换
gulp-less       //less语法转换
gulp-uglify     //压缩混淆js
gulp-file-include // 公共问文件包含
browsersync       //浏览器实时同步
```



#### 使用方式

```js
gulp.task('htmlmin',function(){
  gulp.src('./pinyougou/html/*.html') //找到html文件夹中所有的html文件
     .pipe(htmlmin({collapseWhitespace:true})) //压缩html文件
      		.pipe(gulp.dest('./dist/html'))	//输出到dist文件中的html文件中
    
    })
```



#### 并行任务

```js
gulp.task('over')
```

