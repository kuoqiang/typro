#### 类的创建

```typescript
class Greeter{
    message:string
    constructor(message){
        this.message = message;
    }
    sayhello(){
        console.log(this.message + 'hello');
    }
}

let greeter = new Greeter("普通方式")
let greeter:Greeter = new Greeter('普通方式') 	//两者一样
class是ES6新增的语法糖，类class的类型，本质是一个函数 ，类本身就指向自己的构造函数
```



#### 继承

```typescript
class Animal {
    color:string = 'grey';
    move(distance:nuber){
        console.log(distance)
    }
}

class Dog extends Animal {
    
}

ES5的构造函数和原型对象，实质是先创造子类的实例对象this,然后再将父类的方法添加到this上面
ES6的继承机制完全不同，是指是先将父类实例对象的属性和方法，加到this上面(也就是先通过父类的构造函数完成塑造super),然后再用子类的构造函数进行加工
```



 #### 静态属性和方法

```typescript
我们可以认为类具有实例部分和静态部分
实例部分就是类的实例化对象
静态部分就是类特有的属性和方法，只能被定义的该类访问，不能被其他子类甚至这个类的实例对象访问
只读属性关键字readonly，值允许出现再属性声明或索引签名中
可以使用readonly关键字将属性设置为只读的。只读属性必须在声明时或构造函数里被初始化
class Animal {
    color:string = 'grey';
    readonly myname:string = '啊黄';
    
}
let v2 = new Animal()
```



#### 访问修饰符

```typescript
public 公有属性，在typescript中成员都默认为public
private 私有属性,不能再声明它的类的外部访问
protected 受保护属性，只允许在派生类(子类)和自己类中访问，而在private中是不允许的
```



#### 抽象类

```typescript
1.抽象类做为其它派生类的基类使用，不能被实例化
2.abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法和抽象成员
3.抽象类里面的抽象方法只能定义方法的签名，具体的实现必须在派生类里面
4.所有的类都可以继承抽象类

abstract class Animal {
    color:string = 'grey'
    abstract move():void;
}

class Dog extends Animal {
    move(){
        console.log('这是在派生类里面的抽象方法实现')
    }
}

let v2 = new Dog()
console.log(v2.color)	//grey
```

