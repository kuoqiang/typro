### 什么是typescript

> ts就是js的超集，主要提供了对类型系统和ES6的支持





> `单独使用ts的使用 npm install typescript -g;  tsc a.ts`

> typescript+React/Angular +  MongoDB+express

[express+typescript](<https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter>)

### 类型注解

1. 类型注解是一种轻量级的为函数或变量添加约束的方式

   ```typescript
   function sum(num: number, num2:number){
     return num+num2;
   }
   
   console.log(sum('12','23'))
   ```



### 接口

1. 接口

   ```typescript
   interface Person {
     firstName: string;
     lastName: string;
     middleName?: string; //表示一个接口中，可以没有middleName属性
   }
   
   function greeter(person: Person) {
     return "Hello, " + person.firstName + " " + person.lastName;
   }
   ```



### 数据类型

1. 之前js的数据类型 Number,String,Boolean,Array,Null,Undefined；ts新增的数据类型： Any, Tuple, enum, Void

2. 具体的使用类型是小写的形式`number, string, boolean` 

3. 在项目里面的使用方式

   ```
   1. 普通类型 boolean, number, string
   let isDone: boolean = false;
   let count: number = 3;
   let str:string = "Lucy";   => 高级写法模板字符串 let str1: string = `this is template string${count}`
   
   2. 数组两种写法
   let list: number[] = [1,2,3];
   let list1: Array<number> = [4,5,6]    这个叫数组泛型
   
   3. 元祖tuple， 枚举enum
   
   4. Any
   let notSure: any = 4;
   notSure = "maybe a string word";
   notSure = false;
   
   对比object; Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
   let prettySure: Object = 4;
   prettySure.toFixed();
   
   5. void  表示没有任何类型
   function warnUser(): void{
     // 没有返回值
   }
   声明一个void类型的变量没有作用， 因为他的值只能是undefined或者null
   
   6. undefined和null
   
   7. object 非原始类型（就是除了number,string,boolean,symbol,null,undefined 以外的类型）
   ```

4. 类型断言

   1. 什么是类型断言？ 就是告诉编译器我们明确的知道某个变量是什么类型，我们已经进行了必须的检查；就好比其他语言的类型转换

   2. 两种形式

      ```
      1. 尖括号在变量前面的语法
      let someValue: any = "this is a string";
      let strLength: number = (<string>someValue).length;
      2. as语法
      let strLength2：number = (someValue as string).length;
      ```

      



### 泛型 generics

1. 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型； 使用`泛型`来创建可重用的组件，一个组件可以支持多种类型的数据

   ```
   // 给testFan函数添加了一个  类型变量T (这个也可以是U M 都可以)， T帮我们捕获用户传入的类型
   // testFan 就叫做泛型， 因为它可适用多个类型， 不同于any，不会丢失信息
   testFan<T>(argc:T): T {
     console.log(argc)
     return argc;
   }
   
   // 函数的使用方式
   this.testFan<number>(123);
   this.testFan<string>('字符串');
   this.testFan<Array<number>>([1,2,3]);
   this.testFan<number[]>([1,2,3]);
   // 注意点， 我们没必要使用尖括号（<>）来明确地传入类型， 编译器可以更根据参数的值动态的推断类型； 但为了避免有些复杂的情况下编译器推断不处理，一般加上这个类型
   ```

   

2. 使用泛型变量

   ```
   // 将泛型变量U 当做我们类型的一部分使用 Array<U> 或者 U[]
   testFanVar<U>(argc: Array<U>): U[] {
     console.log('U[]=>', ...argc, argc.length)
     return argc;
   }
   ```

   

3. 泛型接口， 泛型类







### 装饰器！



### 类



### 函数

1. 推断类型
2. 可选参数



### 高级类型



### 其他

1. 思维方式： TS 能强化了「面向接口编程」这一理念；不同模块间的配合更为清晰






## 上课课件拓展

### 基本数据类型

------

> typescript 里面常见的数据类型

Boolean, Number, String，Array, Tuple, Enum，Any, Object, Void，Null，Undefined，Never

轻量级的类型约束工具

> 实例代码

```typescript
let isDone: boolean = true;

// 在ts里面 所有的数据都是浮点数
let num1: number = 6;

// ts里面字符串可以使用单引号 也可以是用双引号, 还可以使用es6的模板字符串
let color: string = 'red';
color = 'blue';
let fullName: string = `first ${color}`

// ts定义数组的两种方式
let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

// 元祖就是可以看做元素有不同类型的
let x: [string, number];
x = ['hello', 12];

// Enum 枚举 可以为一组数字赋值为友好的名字
// 默认从索引号0开始， 也可以手动赋值
enum Color {Red, Green, Blue}
let c: Color = Color.Greent


// 类型断言， 通知编译器我知道它具体的类型，不用再检查了
// 两种方式
let someVal: any = 'test string'
let strLength: number = (<string>someVal).length;

let strLength2: number = (someVal as string).length;
```



### 装饰器 

------

> 装饰器的概念

+ 额外的一些特性来标注或修改类及其成员
+ 装饰器是一种特殊的类型声明， 能够被附加到类声明，方法，访问符，属性或参数上面(5种装饰器： 类，属性，访问器，方法，方法参数)
+ 装饰器使用@expression 这种形式
+ 装饰器对类行为的改变，是代码编译的时候发生的(不是ts的编译，而是js在执行过程中的编译阶段)，而不是运行时； 也就是说装饰器的本质就是编译时执行的函数



文档

https://www.bilibili.com/video/av38379328/