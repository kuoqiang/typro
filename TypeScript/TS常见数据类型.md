#### 数字类型  numver

```typescript
let binary:number = ob1010 //二进制
let octal:number = 0o777   //八进制
let decimal:number = 999   //十进制
let hex:number = 0xff00	   //十六进制
```



#### 字符串 String

```js
可以使用模板字符串形式
let str1 = 'hello'
let str2 = 'world'
let str = `xxxxx${str1}--${str2}`
```



#### 布尔类型 boolean

```typescript
let isDone:boolean = true;
let isDone2:boolean = new Boolean(1) //会报错，因为new之后返回结果为boolean对象
let isDone:Boolean = new Boolean(1)	//这样就不会报错
```



#### null 和 undefined

```typescript
在typescript中，null和undefined是任何类型的子类型,因此可以赋值给任何类型
let num:number = null   //正确语法
```



#### void类型

```
表示没有任何类型，一般用于没有返回值的函数上
```



#### enum 枚举类型

```typescript
enum Color {
    Red,
    Green,
    Blue
}
//默认从零开始，也可以手动赋值
let c1:Color = Color.Green;
console.log(c1)		//1
```



#### 数组和元组

```typescript
数组表示一组相同类型的值的集合(特例，使用any类型可以放任意类型的组合)
元组是为了合并不同类型的对象

let list:number[] = [1,2,3];

//数组泛型
let list2:Array<string> = ['a','b','c']

//利用接口表示数组
interface SelfArray {
    [index: number]:nuber
}
let list3:SelArray = [4,5,6]


关于元组
//定义元组类型
let list4:[number,string] = [1,'a']

```



#### Any类型和Object类型

```typescript
any类型允许我们在编译时移除类型检查
Object类型也是允许我们赋值任何类型;但是不能在上面调用任何方法，即使存在

let notSure:any;
 notSure = 1;
 notSure = 'abc';
//any类型可以调用原型上的方法

let notSure:Object = 6.66
notSure.toString()
//Object不能调用原型的方法，但是可以调用Object对象的方法
```

