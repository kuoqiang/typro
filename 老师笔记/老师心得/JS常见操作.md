# JS常见操作

## JS基本常识

- typeof 返回的7个值 'number'/'string'/'boolean'/'object'/'function'/'undefined'/'symbol'
- instanceof 用法， constructor
- js里面的函数名是函数实例的引用地址,可以作为参数和返回值, call/apply改变this，扩充作用域 

```
ES6 新增的数据类型 Symbol
原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名

let sy = Symbol("key1");
 
// 写法1
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);    // {Symbol(key1): "kk"}
 
// 写法2
let syObject = {
  [sy]: "kk"
};
console.log(syObject);    // {Symbol(key1): "kk"}
 
// 写法3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject);   // {Symbol(key1): "kk"}
```

> 常见的用法
```
在 ES5 使用字符串表示常量,但是用字符串不能保证常量是独特的，使用 Symbol 定义常量，这样就可以保证这一组常量的值都不相等

const COLOR_RED = Symbol("red");
const COLOR_YELLOW = Symbol("yellow");
const COLOR_BLUE = Symbol("blue");
 
function getConstantName(color) {
    switch (color) {
        case COLOR_RED :
            return "COLOR_RED";
        case COLOR_YELLOW :
            return "COLOR_YELLOW ";
        case COLOR_BLUE:
            return "COLOR_BLUE";
        default:
            throw new Exception('Can't find this color');
    }
}
```

### 1.树组件中递归操作
```javascript
function recursion(argc){
    if(argc instanceof Array){
      argc.forEach(item => {
        item.label = item.strutsName;
        if(item.childs instanceof Array){
          item.children=item.childs;
          delete item.childs;
          this.recursion(item.children)
        }
      })
    }
    return argc;
  }
```

### 2.找出2个数组中相同的项，并组成一个新数组; 数组去重
```javascript
var arr1 = [1,2,3,4,5];
var arr2 = [3,12,34,55,6,1];
console.log(arr1.filter((item => {
  return arr2.indexOf(item)>=0;
})));


// 数组去重
var arr1 = [12, 66, 4, 88, 3, 7, 12, 66, 23, 23, 2, 12, , 3, 3, 2, 9];
var newArr = [];
arr1.filter(function (item, index) {
    console.log(newArr)
    if (newArr.indexOf(item) == -1) {
        newArr.push(item)
    }
});
```

### 3.数组深拷贝
> 一般的基本数据用'='号就可以复制，但函数，数组，对象这些引用类型的数据不行  
> 使用 JSON.parse(JSON.stringify(arr1)) 如果数组的值中有函数类型则不能使用   

`不断的判断当前value是不是object对象，递归调用`  

```javascript
var timeGet = function(){
  this.age = 28;
  return 123;
}
var arr = [1,2,3,4,5,'jack',true, timeGet];

function deepClone(source){
  if(!source || typeof source !== 'object'){
    throw new Error('error arguments, only need shllow copy');
  }
  var target = (source.constructor === Array) ? []:{};
  for(var keys in source){
    if(source.hasOwnProperty(keys)){
      if(source[keys] && typeof source[keys] === 'object'){
        target[keys] = source[keys].constructor ===Array ?[]:{}
        target[keys] = deepClone(source[keys])
      }else {
        target[keys]=source[keys];
      }
    }
  }
  return target;
}
var deepArr = deepClone(arr);
deepArr[2]= {'age': 25, 'sex': true}
console.log(arr, deepArr);
```

### 4.JS数组迭代

#### map/filter/forEach/every/some
`map返回 每次函数调用返回的结果 组成的数组`  
`filter返回 该函数 会返回true的项 组成的数组`  
`forEach 无返回值`
`every 数组所有项都返回true 则返回true，类似&& 一旦有一个不符合条件，则停止迭代`  
`some 函数对数组里面有一项返回true 则返回true，类似|| 不停的迭代找符合条件的值，一旦找到，则停止迭代`  
```javascript
var arr = [1,2,3,4,5];
console.log(arr.map((item,index,arr)=>{
  console.log('map: ', item, index ,arr);
  return item>2
}));
//返回[false,false,true,true,true]

console.log(arr.filter(function(item,index,arr){
  console.log('filter: ', item,index,arr);
  return item>2;
}));
// 返回 [3,4,5]

console.log(arr.forEach(function(item,index,arr){
  console.log('foreach: ', item,index,arr);
  return item>2;
}));
// foreach无返回值

console.log(arr.every((item,index,arr) => {
  console.log('every: ', item, index, arr);
  return item>2;
}));
// 返回false, 打印一遍every:

console.log(arr.some((item, index, arr) => {
  console.log('some: ', item, index, arr);
  return item>2;
}));
// 返回true，打印3遍some:
```

#### [MDN 循环和迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration)

> break/continue/return  labeled语句  只能在for循环和whild循环中 以及 for..of循环  

`for in 是ES5方法，能遍历数组和对象，遍历的对象是key，回遍历原型链上的key，尽量不要用来遍历数组，有缺陷`  
`for of 是ES6方法，遍历的value，`  

```javascript
var arr = [1,2,3,4,5];
arr.newPro = 'Jack';
Array.prototype.sayHello = function(){
  console.log('sayHello');
}
for(let key in arr){
  // 过滤掉原型链上的属性
  if(arr.hasOwnProperty(key)){
    console.log('key: ', key);
  }
}

for(let value of arr){
  console.log('value: ', value);
}

var obj = {
  name: 'Lucy',
  age: 12
}
obj.address = 'hubei';
Object.prototype.getName = function(){
  console.log('in propertype');
}
for(let objkey in obj){
  console.log('objkey: ', objkey);
}
// for(let objvalue of obj){
//   console.log('objvalue: ', objvalue);
// } 报错，obj不是iterable
```

### 5.继承与原型链
> [MDN原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)  
> [constructor介绍](https://www.haorooms.com/post/js_constructoror_pro)

+ js只有一种结构:对象(Function，Function.prototype都是对象，都有__proto__属性，指向构造这个对象的构造函数的原型) 每个对象实例object都有一个私有属性(\__proto__\) 指向它的原型对象(prototype)，这个原型对象也有自己私有属性__proto__,指向它的原型对象，层层，prototype对象有一个constructor属性，向上直到一个对象的原型对象为null，null没有原型，为原型链上的最后一个环节; 
+ 函数是个特殊的对象，除了有__proto__属性以外，函数还有自己特有的属性--原型属性prototype(这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法)，创建函数时js会自动给它添加prototype属性，值是一个有constructor属性的对象(这个属性包含一个指针，指回原构造函数)
+ constructor始终指向创建自己(实例)的构造函数默认执向prototype对象所在的构造函数。 Foo.prototype.construcotr = Foo; 因为constructor属性定义在prototype对象上面，意味着可以被所有的实例对象继承，即所有的实例对象都有constructor属性，obj.consturctor = Foo; obj本身上没有constructor属性，会在原型链上向上查找，读取原型链上面的Foo.prototype.constructor属性
+ js只有一种结构:对象(Function，Function.prototype(这是个特殊的函数对象，没有prototype属性，用来实现继承的)都是对象，都有__proto__属性，指向构造这个对象的构造函数的原型) 每个对象实例object都有一个私有属性(\__proto__\) 指向它的原型对象(prototype)，这个原型对象也有自己私有属性__proto__,指向它的原型对象，层层向上直到一个对象的原型对象为null，null没有原型，为原型链上的最后一个环节; 
+ 函数是个特殊的对象，除了有__proto__属性以外，函数还有自己特有的属性--原型属性prototype(这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法)，创建函数时js会自动给它添加prototype属性，值是一个有constructor属性的对象(这个属性包含一个指针，指回原构造函数)
+ constructor始终指向创建自己(实例)的构造函数，prototype对象有一个constructor属性，默认执向prototype对象所在的构造函数。 Foo.prototype.construcotr = Foo; 因为constructor属性定义在prototype对象上面，意味着可以被所有的实例对象继承，即所有的实例对象都有constructor属性，obj.consturctor = Foo; obj本身上没有constructor属性，会在原型链上向上查找，读取原型链上面的Foo.prototype.constructor属性
+ 普通对象和函数对象， Object,Function都是JS自带的函数对象， 就是凡是通过new Function()创建的都是函数对象，其他的都是普通对象

+ Function.\__proto__ === Function.prototype; Function.prototype.\__proto__ === Object.prototype
+ obj1 -> Object.prototype (里面有hasOwnProperty,toString等方法) -> null 
+ arr1 -> Array.prototype(里面有indexOf,forEach,splice等方法) -> Object.prototype -> null
+ f1 -> Function.prototype(里面有call，bind等方法) -> Object.prototype -> null  

>new 操作符的过程
```javascript
var obj = new Foo();

拆分为
var obj = new Object();
obj.__proto__ = Foo.prototype;
Foo.call(obj);
```
>各种创建对象的方法
```javascript
// 原型链上查找属性比较损耗性能，遍历对象一般使用hasOwnProperty先判断
var obj1 = {a:1};   //语法构建创建的对象
var obj2 = new Foo();  //构造函数创建的对象
var obj3 = Object.create(obj2);  //Object.create创建的对象
obj3 -> obj2 -> Object.prototype -> null
// 还有class关键字创建的对象
```
>constructor用法
```javascript
var arr = [1,2,3,4,5];  //等价于new Array()
arr.constructor === Array
var Fn = function(){};  //等价于new Function()
fn.constructor === Function
var obj = new Fn();
obj.construct === obj.prototype.constructor  会查找原型链上面的属性
obj.constructor === Fn    //此时原型链obj -> Fn.prototype -> Object.prototype -> null
//综合
obj.constructor.constructor = Function

```
>[js原型链_1](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)，[js面向对象](https://javascript.ruanyifeng.com/oop/prototype.html)，[实例，原型指向](https://github.com/mqyqingfeng/Blog/issues/2)
>js和java/c++不一样，没有类，js在new一个对象的时候，使用的是构造函数，构造函数中的this就代表了新创建的实例对象, 但是构造函数生产的实例对象有一个缺点，就是无法共享属性和方法，(换句话也就是同一个构造函数的多个实例之间，无法共享属性，造成对系统资源的浪费)
>这样就引入了prototype属性，js里面所有的函数都有一个prototype属性(本质是一个指针，指向一个对象)(对普通函数无用，但是对于构造函数，生产实例的时候，该属性会自动成为实例对象的原型)，所有实例对象需要共享的属性和方法都放在这个对象里面，实例一旦创建，将自动引用prototype对象的属性和方法，也就是说实例的属性和方法分成两种，一种本地，一种是引用的， 如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法
>原型链，所有对象都有自己的原型对象，原型对象也是对象，所以它也有自己的原型，这样就形成了链，所有对象的原型最终都可以上溯到Object.prototype,这个对象也有原型，是null
>工厂模式，构造函数模式，(设计模式)

```javascript
//可以在实例方法中，调用自身的构造函数
Foo.prototype.newMethod = function(){
  return new this.constructor();  //this表示当前构造函数的实例，这个相当于new Foo();
}
//constructor表示原型对象和构造函数之间的关系，如果修改了原型对象，一般会同时修改constructor属性，防止引用时候出错
function Foo(){
  this.name = 'jack';
}
Foo.prototype.constructor === Foo; //true
Foo.prototype = {
  mtthod: function(){}
}
Foo.prototype.constructor === Foo //false
Foo.prototype.constructor === Object //true，这是因为构造函数Foo的原型改变了，但没有修改constructor属性。由于新原型是一个普通函数，普通函数的constructor属性指向Object，(因为constructor默认指向prototype对象所在的构造函数)
```

>instanceof表示对象是否为某个构造函数的实例，返回一个布尔值

```javascript
var d = new Date();
d instanceof Date //true
d instanceof Object //true, instanceof会检查整个原型链，同一个实例对象可以对多个构造函数都返回true

// 在函数体内部判断this关键字是否为构造函数Fubar的实例，如果不是，就表示忘记加new命令
function Fubar (foo, bar) {
  console.log(this, this instanceof Fubar);
  if (this instanceof Fubar) {
    this._foo = foo;
    this._bar = bar;
  } else {
    return new Fubar(foo, bar);
  }
}
```

```javascript
//jquery源码中， jQuery对象就是init对象
jQuery = function( selector, context ) {
  return new jQuery.fn.init( selector, context, rootjQuery );
}

jQuery.fn = jQuery.prototype;  //jQuery对象的原型赋值给了fn属性
jQuery.fn.init.prototype = jQuery.fn; //这句吧jQuery对象的原型又赋值给了init对象的原型， 就是说init对象和jQuery具有相同的原型

jQuery.prototype.init.prototype = jQuery.prototype;
```

>[原型链继承经典实例](https://www.zhihu.com/question/19841848/answer/131682574)
>[详细的原型链](https://www.jianshu.com/p/dee9f8b14771)
```javascript
B.prototype=new A("mbj");  //被B的实例共享
var foo=new B(18);
foo.age;    //18,age是本身携带的属性
foo.name;   //mbj，等价于foo.__proto__.name
foo.sayName(); //mbj,等价于foo.__proto__.proto__.sayName()
foo.toString();  //"[object Object]",等价于foo.__proto__.__proto__.__proto__.toString();

这样B通过原型继承了A，在new B的时候，foo中有个隐藏的属性__proto__指向构造函数的prototype对象，在这里是A对象实例，A对象里面也有一个隐藏的属性__proto__,指向A构造函数的prototype对象，这个对象里面又有一个__proto__指向Object的prototype
```

>实际应用
```javascript
//如果要让实例对象可以调用数组的方法，就手动的将构造函数的原型prototype属性指向一个数组
var Fn = function(){}
Fn.prototype = new Array();
Fn.prototype.constructor = Fn;

var instance = new Fn();
instance.push(), instance.join(), instance.length,  等等数组的方法
instance instanceof Array

//之所以可以使用数组的方法，可以这样理解，instance实例上面没有这些方法，就去它的原型上面去找，她的原型是new Array(), 可以看做[]， [].prototype 实例[]的原型就是创建[]这个实例的构造函数Array,它上面又这些方法，所以就可以使用

//可以看做 原型对象Person.prototype就是一个普通对象(含有一个constructor属性，以及其他实例的公用属性和方法)
Person.prototype = {
   constructor: Person,
   name:  'Zaxlct',
   age: 28,
   job: 'Software Engineer',
   sayName: function() {
     alert(this.name);
   }
}
```

>this, this就是属性或方法“当前”所在的对象, this 永远指向函数运行时所在的对象，而不是函数创建时所在的对

```javascript
//this可以动态切换，有时需要将this固定下来，js提供了call，apply，bind三个方法
var obj = {};
var f = function(){
  return this;
}
f() === window //true
f.call(obj) === f.apply(obj) === obj
var bar= f.bind(obj) 返回的是一个新的函数bar，这个bar函数内部的this指向obj对象



var d = new Date();
d.getTime()
var print = d.getTime;
print(); //报错
var print2 = d.getTime.bind(d)
print2()正常
```

### 6.闭包> 闭包就是一个函数，函数体和外部作用域的一种关联
> setTimeout和绑定事件再循环中会有不一样的结果，要保住循环过程中的变量，必须通过函数的实参传递进入函数体

```javascript
for(var i=0; i<5; i++){
  var a = function(v){
    return  function(){
      console.log('v: ',v);
    }
  }
  setTimeout(a(i), 0);
}
// 事件是需要触发的，但是一般等用户触发的时候循环已经结束了，所有循环的相关变量永远是取的最后一次的值
for (var i = 0; i < 5; i++) { 
var a = function(v){
    return function(){
        console.log(v)
    }
}
document.body.addEventListener('click',a(i))
}
```


### 7.排序算法

> 冒泡排序，快速排序

### 8.JS设计模式

### Angularjs，Angular，Vue双向绑定

#### Angularjs双向绑定

>angularjs的双向绑定 脏检查  [脏检查](https://github.com/xufei/blog/issues/10)
`angular不存在定时的脏检查，只有在指定的事件触发后才会进入$digest循环，DOM事件(如ng-click)，XHR异步事件$http，浏览器Location变更事件$location，Timer事件($timeout,$interval),执行$digest()或$apply()`

```javascript
var app = angular.module("test", []);

app.directive("myclick", function() {
    return function (scope, element, attr) {
        element.on("click", function() {
            scope.counter++;
            scope.$apply(function() { //$apply()可以带参数，参数为一个函数，
                scope.counter++;
            });
            // 或者使用scope.$digest()
        });
    };
});

app.controller("CounterCtrl", function($scope) {
    $scope.counter = 0;
});

<body ng-app="test">
    <div ng-controller="CounterCtrl">
        <button myclick>increase</button>
        <span ng-bind="counter"></span>
    </div>
</body>

$apply() 和 $digets() 除了有参数的区别外，在有层次结构的作用域中
$digets()只出发当前作用域和它的子作用域上的监控，而$apply()会出发作用域树上所有的监控，一般用$digest，如果无法知道数据变更造成的影响范围，才去用$apply
```

#### Angular双向绑定  

>模板绑定是通过property和事件来工作，不是元素属性attribute。angular的双向绑定还是通过  数据绑定[] + 事件绑定()，由于js没事属性变化通知的机制，所有Angular的变化机制是：组件树中一旦发生了可能引起数据变化的事件就会自根向下进行检查，树的深度遍历，脏检查， ZoneJS(通知angular可能有数据发生变化，需要检测更新)  

>脏检查：就是存储所有变量的值，每当可能有变量发生变化需要检查时，就将所有变量的旧值跟新值进行比较，不相等就说明检测到变化，需要更新对应的视图

>Angularjs和Angular的变化检测机制都是脏检查，但Angular2的变化检测性能比Angularjs提升了许多。Angular的核心是组件化，最终形成一颗组件树，数据流是自顶而下的单向流动，生产环境脏检查只进行一次；Angularjs采用的是双向数据流，，必须多次检查，angularjs的策略是脏检查超过10次就认定程序有问题

> angular可自定义的变化检测策略：Default和onPush
>rxjs订阅模式，实现angularjs的broadcast和emit
```javascript
{{...}} 插值表达式
<h4>{{recommended}}</h4>
<img [src]="itemImageUrl2">
<img src="{{itemImageUrl}}">
let customer 是模板输入变量
<li *ngFor="let customer of customers">{{customer.name}}</li>
customerInput是模板引入变量
<input #customerInput>{{customerInput.value}}</label>
$event是模板的事件对象
<button (click)="onSave($event)">Save</button>
<button on-click="onSave($event)">Save</button>
这里的$event是DOM事件对象，有target等属性
<input [value]="currentItem.name"
       (input)="currentItem.name=$event.target.value" >

从数据源到视图--单向
{{expression}}
[target]="expression"
bind-target="expression"
从视图到数据源 --单向
(target)="statement"
on-target="statement"
双向
[(target)]="expression"
bindon-target="expression"


自己实现双向绑定

子组件
<button class="btn btn-primary" (click)="selfDefined($event)">自定义事件</button>

@Input() count: number = 0;
@Output() selfClick = new EventEmitter();
selfDefined(e){
  e.stopPropagation();  //如果事件名类似click，change和DOM重名，需要阻止事件冒泡
  // e.preventDefault() 这个是阻止浏览器的默认行为
  this.count++;
  this.selfClick.emit(this.count);   //发送至出去
}

父组件中
<p>父组件当前值: {{initial_count}}</p>
  //这个$event此时是一个值，不是DOM事件
<app-self-calendar [count]="initial_count" (selfClick)="myClick($event)"></app-self-calendar>
initial_count: number = 5;
myClick(e){  //这个E就是子组件发射出来的this.count, 手动赋值，实现视图和模型的双向绑定
  this.initial_count = e;
}
```

#### Vue双向绑定

> Object.defineProperty, Object.getOwnPropertyDescriptor(obj, 'name')
> 实现mvvm主要包含两个方面，数据变化更新视图，视图变化更新数据。通过视图view更新data，可以通过事件监听，关键是数据data改变，怎么更新视图
``` javascript
var obj = {};
obj.name = 'jack'; // obj['name']='jack'
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// {value: 'jack', writable: true, enumerable: true, configurable: true}  对象直接添加属性这种方式全部是true
Object.defineProperty(object1, 'age', {
  value: 42,
});
// {value: 'age', writable: false, enumerable: false, configurable: true} 除了configurable默认是true，其他默认都是false，也可以手动设定

var Book = {}
var name = '';
Object.defineProperty(Book, 'name', {
  set: function (value) {
    name = value;
    console.log('你取了一个书名叫做' + value);
  },
  get: function () {
    return '《' + name + '》'
  }
})
 
Book.name = 'vue权威指南';
```

> Vue使用存取器

>JS的设计模式

```javascript
/*工厂模式*/
function create(name, age) {
    var obj={}
    obj.name=name;
    obj.age=age;
    obj.createJs=function () {
        console.log(this.name+'和'+this.age)
    }
    return obj;
}
var p1=create('js',18);
var p2=create('jss',19);
console.log(p1==p2)//false(完全不同的内存地址)
/*构造函数模式*/
function Create(name, age) {
    this.name=name;
    this.age=age;
    this.createJs=function () {
        console.log(this.name+'和'+this.age)
    }
}
var p11=new Create('js',18);
var p22=new Create('jss',19);
```


### 前端优化

+ CSS Sprites是一种网页图片应用处理方式，就是把网页中一些背景图片整合到一张图片文件中，再利用css图片的一些属性进行背景定位
+ CDN
+ 使用缓存，http缓存
+ Angular的打包优化， 如引用moment库时(默认包含locale日期时间的国际化库)，只需要在typings.d.ts文件最后加上declare var moment:any;   将项目中的import * as moment from 'moment';全部删除， 如果要引入中文库，只需要 import 'moment/locale/zh-cn'; moment.locale('zh-cn')。 还有在引入@ng-bootstrap/ng-bootstrap这个库时, 官方推荐的是直接引入NgbModule,这种方式会引入所有的模块，改进方式只引入需要的, 例如NgbDatepickerModule, 根组件NgbDatepickerModule.forRoot()， 其他组件直接使用NgbDatepickerModule。 还有引入echarts 支持按需加载， 配置webpack
+ angular 懒加载，让首页尽快的加载。 优化前我们工程就一个主模块文件（app.module.ts），路由跳转各页面其实都属于该模块一部分， 多个chunk.js。  多模块懒加载-> --prod –aot 优化方式编译 –> 服务端开启gizp压缩，   source-map-explorer插件，查看vendor.js里面我们添加进去的第三方插件库
+ angular生命周期钩子(特殊事件)， 每个(接口/钩子)都有唯一的(钩子方法)(ng前缀 + 接口名)  ngOnChanges(绑定的值发送改变) --> ngOnInit --> ngDoCheck(检测并在Angular上下文发生变化时执行， 检测那些被 Angular 忽略的更改)  --> ngOnDestroy(取消订阅) 。 再就是组件特定的接口 afterContent(外来内容被投影到组件中之后调用它们,类似 transclusion，一般不要在组件标签内部放任何内容，要放内容就要投影进去), afterView(在每次创建了组件的子视图后调用它们) (init/checked)，  对应组件的访问(@ContentChild, @ViewChild)
+ angular事件发射器， somethingChange.emit(value)发出事件,  obj.somethingChanged.subscribe(val) 使用这个订阅方法来实现事件发射的订阅


### Promise

```javascript
const promise = new Promise(function(resolve,reject){
  console.log('立即执行');
  if(1==1){
    resolve(123)
  }else {
    reject(456)
  }
})

promise.then(function(value){
  console.log('value: ', value);
}, function(error){
  console.log('error: ', error);
})

console.log('栈里面，立即执行，队列里面放到事件队列');
```
