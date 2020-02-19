#### 接口的概念

````
1.接口是对行为的抽象，而具体如何行动需要由类(classes)去实现(implement)
2.在TypeScript中，我们使用接口来定义对象的类型。除了可用于对类的一部分行为进行抽象以外，也常用于对 对象的形状进行描述
````



#### interface

```typescript
interface Animal {
 color:string;
 height:number;
}

let v2:Animal;
v2 = {
    color:'yellow';
    height:50;
}
```



#### 可选属性和只读属性

```typescript
interface Animal {
    name:string;
    height:number;
    foot?:boolean;
}

let v1:Animal = {
    name:'狗';
    height:200;
    foot:true;
}

let v2:Animal = {
    name:'蛇';
    height:100;
	foot:false;
}

 ?    		可选属性
readonly 	只读属性   //初始化之后，无法再修改

readonly 和 const 区别
readonly针对属性，const针对变量。因此变量声明使用const,属性声明使用readonly
```



### 任意属性

```typescript
1.一个接口可能除了我们需要的属性以外，还可以包括任意的其他属性
2.只要使用了任意属性，那就要保证确定属性和可能属性都是它类型的子集

interface Animal {
    color:string;
    height:number;
    foot?:boolean;
    [propNmae:string]:string|number|boolean;
}
```



#### 函数类型

```typescript
1.接口能够描述ts中对象拥有的各种各样的外形。除了描述带有属性的普通对象外，接口也可以描述函数类型
2.函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的

interface MyFn {
    (x:number,y:number):sting
}

let add2:MyFn;
add2 = function(x:number,y:number):sting{
    return x.toString() + y;
}

函数的参数会逐个检查，要求对应位置上的参数类型是兼容的
```



#### 可索引属性

```typescript
interface MyIndex {
    [index:number]:number
}

let v1:MyIndex = [1,2,3];
let v2:MyIndex = {
    0:1,
    1:2,
    2:3
}
//数字类型索引的返回值必须是字符串索引返回值类型的子类型或者相同
//因为在使用number来索引时，js会将它转换成string然后再去索引对象 

class Animal {
    color:string;
}

class Dog extends Animal {
    foot:boolean;
}

let c1:Dog = new Dog();
let c2:Animal = new Animal();

interface MyIndex {
    [index:number]:Dog;
    [index:string]:Animal;
}

let v1:MyIndex = {
    0:c1,
    age:c2
}
```



#### 继承接口

````typescript
和类一样，接口也可以继承。这让我们能从一个接口里复制成员到另一个接口里，可以更加灵活的将接口分割到可重用模块里，实现低耦合高内聚的理念。

interface Animal {
    color:string
}

interface Dog extends Animal {
    bodyLength:number
}

let v1:Dog = {
    color:'grey';
    bodyLength:50;
}

//一个接口继承多个接口
interface 接口一 extends 接口二，接口三 {
    
}
    
````



#### 接口继承类

```typescript
1.当接口继承了一个类型时，它会继承类的成员但补包括其实现，就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样
2.类定义会创建两个东西:类的实例类型 和 一个构造函数。 因为类可以创建 出类型，所以你允许在使用接口的地方使用类

class Animal {
    color:string;
    move(){
        console.log("这时类里面方法的实现")
    }
}

interface Dog extends Animal {
    bodyLength:number;
}

let v1:Dog = {
    bodyLength:500,
    color:'grey',
    move(){
        console.log('这是具体方法的实现')
    }
}
```





### 类实现接口

```typescript
TS能够使用它来明确的强制一个类去符合某种契约
实现(implements)是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口(interfaces),用implements关键字来实现。这个特性大大提高了面向对象的灵活性

interface Alarm {
    warning():void;
}

class Door implements Alarm {
    menvashou:string = "铜制"
    warning(){
        console.log('这是门报警器')
    }
}

class Car implements Alarm {
    wheel:string = '轮子';
    wranning(){
        console.log('这是小车报警器')
    }
}
```

