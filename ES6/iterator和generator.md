### iterator









### generator   生产器函数

 ```javascript
function *test(){
	yield 'a';    //yield 产出
	console.log(1)
	yield 'a';
	console.log(2)
	yield 'a';
	console.log(3)
	return 'd'
}
var  Go = test()
Go.next()  //  a
Go.next()  //  1  b
Go.next()  //  2  c 
Go.next()  //  3  d

 ```

生产器函数特点：

​              1.在function和函数名之间加*

​			  2.遇到yield则停止



#### generator 改写Symbol.iterator

```javascript
var obj = {
	0:'a',
	1:'b',
	2:'c',
	length:3,
	[Symbol.iterator]:function *(){
			let currindex = 0;
			while(this.length != currindex){
			     yield this[currindex++];
			}
		}
}
```

