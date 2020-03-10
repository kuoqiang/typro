### 什么是RXJS

1. `RxJS`是`ReactiveX`编程理念的`JavaScript`版本
2. Anuglar内置了Rxjs， vue对应的有vue-rx, react中对应的有redux-observable





```
//自适应屏幕调整相应的font-size值   rem实现响应式
<script>
  (function(doc,win){
    var docEl = doc.documentElement,
      //orientationchange 屏幕旋转事件
      //首先判断窗口有没有orientationchange这个方法，有就赋值给变量，没有就返回resize方法.
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function (){
        var clientWidth = docEl.clientWidth;
        if(!clientWidth) return;
        if(clientWidth >= 750){
          docEl.style.fontSize = '100px';
        }else{
          docEl.style.fontSize = 40 * (clientWidth / 750) + 'px';
        }
      };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    //浏览器把DOM树构建完成后就触发了DOMContentLoaded事件,load事件则要等包括图片这些加载完毕才会触发；先是DOMContentLoaded发生，然后是load发生。
    doc.addEventListener('DOMContentLoaded',recalc,false)
  })(document,window)
</script>
```

