#### container类

​	响应式布局容器  固定宽度

​     大屏(  >=  1200px)  宽度定为1170px

 	中屏( >= 992px)      宽度定为970px

 	小屏( >= 768px)	  宽度定为750px

​	 超小屏(100%)



#### container-fluid类

​	 流式布局容器     百分百宽度

​	 占据全部视口(viewport)的容器

​	  适合单独做移动开发





#### 栅栏选项参数

|                  | 手机  < 768px | 平板 >= 768px | 显示器 >=992px | 电脑 >=1200px |
| :--------------: | :-----------: | :-----------: | :------------: | :-----------: |
| .container最大宽 |  自动(100%)   |     750px     |     970px      |    1170px     |
|      类前缀      |   .col-xs-    |   .col-sm-    |    .col-md-    |   .col-lg-    |

​		**如果栅栏加起来的份数超过12，最后超过的元素会另起一行。**

​		**如果加起来少于12，不够的地方就会留下空白**

​        **每一列默认有左右15像素的padding**

​        **如果想实现元素之间有间距，应该嵌套一个div，然后让它width=100%;**

​		列嵌套加上一个行row,可以取消父级的padding值，而且高度自动和父级一样高

​        (栅栏系统内部是用浮动加上宽度百分比实现的，因此直接加margin会导致换行)



#### 列偏移

​        添加前缀 .col-xs-offset-   .col-sm-offset-  .col-md-offset-   .col-lg-offset-

​        (实际上是给添加的元素加上百分比的margin-left)



#### 列排序

​		左向右-推     .col-md-push-

​		右向左-拉     .col-md-pull-



#### 媒体查询隐藏

​     

|    类名    | 超小屏幕 | 小屏幕 | 中屏幕 | 大屏幕 |
| :--------: | :------: | :----: | :----: | :----: |
| .hidden-xs |   隐藏   |  显示  |  显示  |  显示  |
| .hidden-sm |   显示   |  隐藏  |  显示  |  显示  |
| .hidden-md |   显示   |  显示  |  隐藏  |   显   |
| .hidden-lg |   显示   |  显示  |  显示  |  隐藏  |



|    类名     | 超小屏幕 | 小屏幕 | 中屏幕 | 大屏幕 |
| :---------: | :------: | :----: | :----: | :----: |
| .visible-xs |   显示   |  隐藏  |  隐藏  |  隐藏  |
| .visible-sm |   隐藏   |  显示  |  隐藏  |  隐藏  |
| .visible-md |   隐藏   |  隐藏  |  显示  |  隐藏  |
| .visible-lg |   隐藏   |  隐藏  |  隐藏  |  显示  |





#### 改变container最大宽度

```css
@media screen and (min-width:1280px){
	.container{
		width:1280px;
	}
}
```


#### bootstrap字体图标

​		通过加入bootstrap定义的类名，自动产生一个before加入字体图标





#### 清除浮动

​		在需要清除浮动的元素上加上类名clearfix

​		



#### 辅助类

​     bootstrap中可以通过辅助类里的类名直接对元素设置字体样式或颜色

```html
 <span class="caret">lalalal</span>     //三角符号
 <div  class="pull-left">div1</div>		//左浮动
 <div  class="pull-right">div2</div>    //右浮动
```

