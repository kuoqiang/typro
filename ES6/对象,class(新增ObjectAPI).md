##### 新增字面量语法

```js
function createUser(loginId,loginPwd,nickName){
	return {
		loginId:loginId,
        loginPwd:loginPwd,
        nickName:nickName,
        id:Math.random()
	}
}         //可以简写，直接写loginId,loginPwd等


对象内函数字面量方法
cosnt user = {
    name:'臭弟弟',
    age:100,
    sayhello(){
        console.log(this.name,this.age)
    }
}

计算属性名

有些时候，初始化对象时，某些属性可能来自于某个表达式的值，在ES6，可以使用中括号来表示该属性名是通过计算来得到的
 const prop1 = "name"
 const prop2 = "age"
 const prop3 = "sayhello"
 
 const user = {
     [prop1]:"臭弟弟",
     [prop2]:100,
     [prop3](){
         console.log(this[prop1],this[prop2])
     }
 }

user[prop3];
```



#### Object新增的API

```js
Object 是一个函数，新增的API实际上是附着在这个函数对象上的静态方法

Object.is   判断两个数据是否相等,基本上和严格相等(===)一致
                                
console.log(NaN === NaN)  //false
console.log(+0 === -0)    //true  实际上在在二进制中符号位不同
console.log(Object.is(NaN,NaN))     //true
console.log(Object.is(+0,-0)) 		//false


Object.assign     混合对象

const obj1 = {
    a:123,
    b:456,
    c:'abc'
}
const obj2 = {
    a:789,
    d:"kkk"
}
const obj = Object.assgin(obj1,obj2);
//将obj2的数据覆盖到obj1的数据中，并且会改动obj1,然后返回obj1
Object.assign基本不用，最好使用ES7的...对象
const obj = {
    ...obj1,
    ...obj2
}


Object.getOwnPropertyNames  枚举顺序
将对象内的属性放到数组中并返回，先排数字，按照升序排列。再排列其他。




Object.defineProperty(obj,prop,desc)  
直接在一个对象上定义一个新属性，或者修改一个已经存在的属性

Object.defineProperty(obj,"a",{
    value:37,
    writable:true,
    enumerable:true,
    configurable:true
});


Object.setPrototypeOf    设置某个对象的隐式原型
Object.setProtitypeOf(obj1,obj2)
//相当于把obj1.__proto__ = obj2;
做圣杯模式可以使用它
```





#### 面向对象的简介

```
一种编程思想，跟具体的语言无关。

对比面向过程:
	面向过程:思考的切入点是功能的步骤，适合做小的模块
	面向对象:思考的切入点是对象的划分，适合做大型联系多的项目
```



#### 传统构造函数的问题

```js
1.属性和原型方法定义分离，降低了可读性
2.原型成员可以被枚举
3.默认情况下，构造函数仍然可以被当作普通函数使用
```



#### 类的特点

```js
1.类声明不会被提升，与let和const一样,存在暂时性死区
2.类中的所有代码均在严格模式下执行*
3.类的所有方法都是不可枚举的(将原型上的方法屏蔽)
4.类的所有方法内部都无法被当作构造函数来使用
5.类的构造器必须使用new来调用，无法直接调用类
class Animal {
     constructor(type,name,age,sex){
         this.type = type;
         this.name = name;
         this.setAge(age);
         this.sex = sex;
     }
    static width = 50;
	static height = 50;
    
    print(){
        console.log(`种类:${this.type}`)
        console.log(`名字:${this.name}`)
        console.log(`年龄:${this.age}`)
        console.log(`性别:${this.sex}`)
    }
    
    setAge(age){
        if(typeof age !== "number"){
            throw new TypeError("age必须为数字类型")
        }
        if(age < 0){
            age = 0
        }
        if(age > 1000){
            age = 1000
        }
        this._age = age;
    }
    
    getAge(){
        return this._age + "岁"
    }
}

const dog = new Animal("狗","旺财",3,"男")


使用get和set设置的属性,不在原型上。

  构造函数本身的成员，是静态成员,使用static添加 存在构造函数本身里
  没有使用static的字段初始化器，添加的成员位于实例对象上
  箭头函数在字段初始化器位置上，指向当前对象，可以绑定this，但是消耗内存空间。
  类的本质在js中就是函数
```



#### 继承

```js
class Dog extends Animal{
    constructor("犬类",name,age,sex){
        super(name,age,sex)
        this.loves = "eat骨头"
    }
    
    print(){
        super.print()//调用父类原型的方法
        console.log(`爱好:${this.loves}`)
    }
    
}

extends:表示继承
super:直接当作函数调用，表示父类构造函数
	  如果当作对象使用，表示父类的原型


**注意:ES6要求，如果定义了constructor,并且该类是字类，则必须在constructor的第一行手动调用父类的构造函数
如果子类不写constructor,则会有默认的构造器，该构造器需要的参数和父类一致，并且自动调用super()

[冷知识]
	用js制作抽象类
    抽象类:一般是父类,不能直接创建父类对象
    this始终指向具体的类的对象
    class Animal{
        constructor{
            is(new.target === Animal){
                throw new TypeError("不能直接通过Animal创建对象")
            }
        }
    }
```



#### 装饰器

```js
Decorator     ES7标准
class Test{
    @Obsolete
    print(){
        
    }
}

function Obsolete(target,methodName,descriptor){
    console.log(target,methodName,descriptor);
}

```

