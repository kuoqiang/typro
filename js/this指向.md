#### ！！！！！哪个对象执行，this就指向哪个对象



```js
function a(){
    var user = "蠢";
    console.log(this.user); //undefined
    console.log(this); //Window
}
a();  //之前是不是和你说过，全局的函数是绑定到window上的，a()相当于window.a(),所以这里的this指向window,而window中不存在user属性，因此显示undefined
```

this最终指向的是调用它的对象，这里的函数a实际是被Window对象所点出来的。



```js
var o = {
    user:"憨憨",
    fn:function(){
        console.log(this.user);  //憨憨
    }
}
o.fn();
```

　　这里的this指向的是对象o，因为你调用这个fn是通过o.fn()执行的，那自然指向就是对象o，**你给我记清楚点**，this的指向在函数创建的时候是决定不了的，在调用的时候才能决定，谁调用的就指向谁，一定要搞清楚这个。

 



```js
var o = {
    user:"小win",
    fn:function(){
        console.log(this.user); //小win
    }
}
window.o.fn();
```

　　这段代码和上面的那段代码几乎是一样的，但是这里的this为什么不是指向window，如果按照上面的理论，最终this指向的是调用它的对象，window是js中的全局对象，我们创建的变量实际上是给window添加属性，所以这里可以用window点o对象。

　　先不解释为什么上面的那段代码this为什么没有指向window，看下面。

```js
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12
        }
    }
}
o.b.fn();
```

　　这里同样也是对象o点出来的，但是同样this并没有执行它

　　情况1：如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window(就是直接调用函数的情况)

　　情况2：如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。(相当于o.fn())

　　情况3：如果一个函数中有this，**这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象，**(比如说o.b.fn(),o和b都是对象，所以this指向的是对象fn的直接上一级对象b)

```js
var o = {
    a:10,
    b:{
        fn:function(){
            console.log(this.a); //undefined
        }
    }
}
o.b.fn();   //因为这里this指向b，而b对象里没有a属性，所以输出undefined(弟弟这里一定要注意)
```

**总而言之，虽然对象b中没有属性a，这个this指向的也是对象b，因为this只会指向它的上一级对象，不管这个对象中有没有this要的东西。**





```js
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
            console.log(this); //window
        }
    }
}
var j = o.b.fn;
j();  //***这里是把这个函数赋值给j，然后执行j，相当于window.j()
```

这里this指向的是window，是不是有些傻了？别急，看下面

　　this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的，虽然函数fn是被对象b所引用，但是最后再将fn赋值给变量j的时候并没有执行所以最终指向的是window，这和之前是不一样的。

```js
//总而言之把，你就记住
 1.找this指向，直接看函数调用的时候，是通过哪一个对象调用的(谁调用this,this就指向谁)
 2.如果是通过a.b.xxx这种经过多个对象的，this指向最近的一个对象 
```

