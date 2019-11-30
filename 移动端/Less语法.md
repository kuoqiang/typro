#### css语法缺点

   1.不方便维护和扩展，不利于复用

   2.css没有计算能力

   3.css需要书写大量的代码





#### 安装less

```
 npm install -g less           //安装less
 lessc -v                      //查看less版本
```





#### less变量

   ```css
@变量名：值
@color:pinlk;

/* 使用 */
body{
    div{
        background:@color;
    }
}
   ```



#### less编译

   1.使用vsode插件 Easy less





#### less嵌套

   ```css
   如果有伪类、伪元素、交集选择器，我们内层选择器前面加&
    a{
         &hover{ /* 伪类和伪元素选择器前面加&  */
            color:red;
         }
      }

   ```



#### less运算

```css
@border:5px + 5;
div{
	width:200px - 50;
	height:200px;
	border:@border solid red;
    background-color:#666 - #222;(结果为#444)
}

//运算符中间左右要用空格隔开，比如 5px + 5;
//两个数运算，如果只有一个数有单位，那最后就以那个单位为标准
//两个数运算，并且两个数都有单位，那最后就以第一个单位为标准
//只要有数字就有运算
```





#### less样式导入

```css
 @import "xxx"          /* 后缀可加可不加 */
 @import "xxx.css"
```

