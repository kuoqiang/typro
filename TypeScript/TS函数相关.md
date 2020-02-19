```
Typescript 的函数类型定义中， => 用来表示函数的定义，左边是输出类型，需要用括号括起来，右边是输出类型。
```

#### 三种创建函数方式

```typescript
function add(x:number,y:number):number{
	return x + y;
}


let add1 = function(x:number,y:number):number{
    return x + y;
}

let add:(x:number,y:number) => number
//=> 在es6中表示箭头函数，在ts里面表示函数定义

add = add1;
```



#### 函数可选参数和默认参数

```typescript
javascript里，每个参数都是可选的，可传可不传。没有传递参数是，默认值为undefined
在Typescript里参数多了或者少了都是不被允许的，但是我们可以在参数旁使用？实现可选参数的功能

function fn(first:string,last:string,name?:string):string{
    	return first + last;		//name为可选参数
}
console.log(fn("mchael","jack"))
console.log(fn("mchael","jack"," 臭弟弟"))
```



#### 剩余参数

```typescript
function getBall(x:string,...restMyBall:string[]){
    console.log(restMyBall)
    return x + '-' + restMyBall.join('-')
}
```



#### 函数重载

```typescript
function add(x:number,y:number):number;
function add(x:string,y:string):string;

function add(x:number|string,y:number|string):number|string{
    if(typeof x === 'number'){
        return x + y;
    }else if(type x === 'string'){
        return x + y;
    }
}

add(1,2)
add('a','b')

函数重载的意义在于能够让你直到传入不同的参数得到不同的结果，如果传入的参数不同，但是得到的结果类型却相同，那么就不需要用到函数重载


```

