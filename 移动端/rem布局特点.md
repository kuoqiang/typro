em     相对父元素font-size的大小

rem    相对根元素font-size的大小(html)



rem布局其实就是对所有元素宽高、字体大小用rem设置，然后通过媒体查询改变html元素字体大小来达到响应式布局

#### 媒体查询

```css
@media mediatype and |not|only (media feature){
   css Code
}
```



##### mediatype

  all             用于所有设备

  pritn         用于打印机或打印机预览

  scree        用于电脑屏幕，平板电脑，智能手机等



```css
例子
@meida screen and (min-width:200px) and(max-width:520px){
    body{
        background-color:red;
    }
    /* 屏幕大小在200到520之间的设置背景颜色为红色 */
}
```



##### 引入资源

```css
<link rel="stylesheet" href="xx1" media="screen and (width:320px)">

<link rel="stylesheet" href="xx1" media="screen and (width:640px)">

  根据不同的屏幕的大小，引入不同的样式(即响应式布局)
```

