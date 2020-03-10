java + angularjs + angular2 + vuejs + react + ionic3移动端/react native移动端 + electron桌面端 + js原生语法

## flex容器

### 6种属性可以设置在容器上
水平主轴，垂直交叉轴
display: flex;  //inline-flex行内
flex-direction: row;  //主轴的方向， 还有column column-reverse 反转
flex-wrap: wrap;  //容器内是否允许换行 nowrap/wrap/wrap-reverse
justify-content: flex-start; //项目在主轴的对齐方式 flex-start/flex-end/center/space-between/space-around.
align-items: stretch;   //项目在交叉轴上的对齐方式 flex-start/flex-end/center/baseline/stretch
align-content: flex-start;  //多根轴线的对齐方式 flex-end/center/space-between/space-around/stretch

### 6种属性可以设置在item项目上
order: 0  //定义项目在容器中的顺序， 默认是0
flex: flex-grow, flex-shrink, flex-basis  //默认是 0 1 auto
align-self: auto //运行单个项目有不一样的对齐方式  flex-start/flex-end/center/baseline/stretch

(flex-grow 定义项目的放大比例， 容器在主轴上必须要有剩余空间才能扩大，各项目的最终大小=各项目的flex-basis + 扩大得到的大小
flex-shrink定义项目的缩小比例， 容器在主轴上空间不足以放下所有项目，各项目的大小 = 各项目的flex-basis - 瓜分得到的缩小份额
flex-basis 在flex项目放大缩小之前，各项目占据主轴空间的基值，默认auto，即项目本来大小
flex: 1; 快捷值 1 === 1 1 0%
flex：0; 快捷值 0 === 0 1 0%
flex：24px/1%; 快捷值 1 1 24px/1%为flex-basis的值
flex: 2 3; 快捷值 2 3 === 2 3 0%
flex: 11 30px; 快捷值 11 30px === 11 1 32px)



1. flex布局网站 `https://www.runoob.com/w3cnote/flex-grammar.html`， 2009年日出的一种布局，先以及被所有浏览器支持

2. flex：  主轴和交叉轴， 容器和项目

3. 容器相关css

   ```css
   flex-direction: row/column
   row 表示里面的项目  从左往右排列
   column 表示里面的项目 从上到下排列
   ```

4. 项目相关css

   ```css
   flex: 0 1 auto; // 默认  不扩大，会缩小，空间自动填充
   
   第一个是 flex-grow 属性， 默认为0； 表示如果存在剩余空间，也不放大
   第二个是 flex-shrink属性， 默认为1；表示如果空间不足，该项目会缩小
   第三个是 flex-basis属性，  默认为auto； 表示浏览器会根据这个属性自动推演项目的宽度和高度； 这个值可以写 auto, 10%, 50px
   
   一般这个flex 属性写快捷值， 让浏览器去自动推算项目的相关值
   
   flex: none;  // 等价于  flex:0 0 auto  表示不扩大，不缩小，自动宽高
   flex: auto;  //等价于   flex: 1 1 auto  表示可扩大，可缩小，自动计算宽高
   flex: 1;     //等价于   flex: 1 1 0% 表示可扩大， 可缩小，尺寸自动计算
   
   还有其他的写法目前不推荐
   flex: 1 1;
   flex: 8;  // === flex: 8 1 0%;
   ```

5. 课后扩展 flex-basis 和 宽度width

   ```css
   flex-basis 的含义在不断的改进，简单可理解为项目的宽度或高度
   flex-basis 和width 如果同时设置， 以flex-basis为准.
   
   item {
       width: 30px;
       flex-basis: 200px;
   }
    使用了 item类的元素  最后的宽度为200px
   
   flex-basis 和 max-width/min-width 如果同时设置, 这会被限制
   item1 {
       flex-basis: 250px;
       max-width: 100px;
   }
   使用了item1的元素，最后宽度为100px (即max-width最大宽度或最小宽度)
   
   
   box-sizing: border-box;
   就是说设定一个盒子的宽度之后，盒子的边框，内边界，都会在这个宽度里面，不会再增加盒子的宽度了
   width = border + padding + 内容的  width_1
   flex-basis计算宽度时，是按照父盒子的 内容的width_1来计算的， 不是外面盒子的总宽度
   ```

   