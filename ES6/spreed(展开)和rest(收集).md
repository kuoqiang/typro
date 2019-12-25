 ### 写场景中（收集作用）



``` javascript
function sum(...arg){

		console.log(arg)
}

sum(1,2,3)      // [1,2,3]
```



##### ...arg只能作为最后一个参数



### 读场景中（展开作用）

```javascript
let arr =[1,2,3,4,5]
console.log(...arr)   //1,2,3,4,5
```



#### 剩余参数

```js
argument 缺陷   
1.如果和形参配合使用,容易产生混乱
2.从语义上，使用arguments获取参数，由于形参缺失，无法从函数定义上理解函数的真实意图

ES6的剩余参数专门用于收集末尾的所有参数，将其放置到一个数组当中
function sum(...args){
	let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}


注意**
    一个函数只能传递一个剩余参数(...运算符)
	并且位置只能是最后一个形参
```



#### 展开对象  ES7

```js
const obj1 = {
		name:'臭弟弟',
    	age:22,
        sex:"?"
}

const obj = {
    ...obj1       //这个是浅克隆
}


//解决方法
const obj1 = {    
		name:'臭弟弟',
    	age:22,
        sex:"?",
    	address:{
            name:'hehe',
            age:22,
            sexx:'男'
        }
}

const obj2 = {
      ...obj1,
      address:{
          ...obj1.address
      }
}
```



```js
Math.max(1,23,5)    //23  比较并返回最大的值
```

