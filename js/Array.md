#### isArray()

`Array.isArray`方法返回一个布尔值，表示参数是否为数组。它可以弥补`typeof`运算符的不足。

```javascript
var arr = [1, 2, 3];
typeof arr // "object"
Array.isArray(arr) // true
```



#### pop()

`pop`方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会**改变原数组。**

```javascript
var arr = ['a', 'b', 'c'];
arr.pop() 
arr // ['a', 'b']
```



#### shift(),unshift()

`shift()`方法用于删除数组的第一个元素，并返回该元素。注意，该方法会**改变原数组。**

```javascript
var a = ['a', 'b', 'c'];
a.shift() 
a // ['b', 'c']
```

`unshift()`方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会**改变原数组。**

```javascript
var a = ['a', 'b', 'c'];
a.unshift('x'); 
a // ['x', 'a', 'b', 'c']
```



#### join()

`join()`方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。**不改变原数组**

```javascript
var a = [1, 2, 3, 4];
a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"
```



#### concat()

`concat`方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，**原数组不变**。

```javascript
['hello'].concat(['world'])
// ["hello", "world"]

[].concat({a: 1}, {b: 2})
// [{ a: 1 }, { b: 2 }]

[1, 2, 3].concat(4, 5, 6)
// [1, 2, 3, 4, 5, 6]
```



#### reverse()

`reverse`方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将**改变原数组**。

```javascript
var a = ['a', 'b', 'c'];
a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```



#### slice()

`slice`方法用于提取目标数组的一部分，返回一个新数组，**原数组不变。**

```
arr.slice(start, end);
```

它的第一个参数为起始位置（从0开始），第二个参数为终止位置（**但该位置的元素本身不包括在内**）。如果省略第二个参数，则一直返回到原数组的最后一个成员。

```javascript
var a = ['a', 'b', 'c'];
a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice() // ["a", "b", "c"]
```

上面代码中，最后一个例子`slice`没有参数，实际上等于返回一个原数组的拷贝。

如果`slice`方法的参数是负数，则表示倒数计算的位置。

```javascript
var a = ['a', 'b', 'c'];
a.slice(-2) // ["b", "c"]
a.slice(-2, -1) // ["b"]
```

上面代码中，`-2`表示倒数计算的第二个位置，`-1`表示倒数计算的第一个位置。

**如果第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组。**

```javascript
var a = ['a', 'b', 'c'];
a.slice(4) // []
a.slice(2, 1) // []
```

`slice`方法的一个重要应用，是将类似数组的对象转为真正的数组。

```javascript
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']
Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);
```

上面代码的参数都不是数组，但是通过`call`方法，在它们上面调用`slice`方法，就可以把它们转为真正的数组。



#### splice()

`splice`方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会**改变原数组。**

```javascript
arr.splice(start, count, addElement1, addElement2, ...);
```

`splice`的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2) // ["e", "f"]
a // ["a", "b", "c", "d"]
```

上面代码从原数组4号位置，删除了两个数组成员。

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 1, 2) // ["e", "f"]
a // ["a", "b", "c", "d", 1, 2]
```

上面代码除了删除成员，还插入了两个新成员。

起始位置如果是负数，就表示从倒数位置开始删除。

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(-4, 2) // ["c", "d"]
```

上面代码表示，从倒数第四个位置`c`开始删除两个成员。

如果只是单纯地插入元素，`splice`方法的第二个参数可以设为`0`。

```javascript
var a = [1, 1, 1];
a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
```

如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。

```javascript
var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]
```



#### sort()

如果想让`sort`方法按照自定义方式排序，可以传入一个函数作为参数。

```javascript
[10111, 1101, 111].sort(function (a, b) {
  return a - b;
})
// [111, 1101, 10111]
```



#### map()

`map`方法接受一个函数作为参数。该函数调用时，`map`方法向它传入三个参数：当前成员、当前位置和数组本身。**不改变原数组**

```javascript
[1, 2, 3].map(function(elem, index, arr) {
  return elem+1;
});
// [2, 3, 4]
```



#### forEach()

`forEach`方法也可以接受第二个参数，绑定参数函数的`this`变量。

```javascript
var out = [];

[1, 2, 3].forEach(function(elem) {
  this.push(elem * elem);
}, out);

out // [1, 4, 9]
```

上面代码中，空数组`out`是`forEach`方法的第二个参数，结果，回调函数内部的`this`关键字就指向`out`。

注意，`forEach`方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用`for`循环。

```javascript
var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 2) break;
  console.log(arr[i]);
}
// 1
```

上面代码中，执行到数组的第二个成员时，就会中断执行。`forEach`方法做不到这一点。

`forEach`方法也会跳过数组的空位。

```javascript
var log = function (n) {
  console.log(n + 1);
};

[1, undefined, 2].forEach(log)
// 2
// NaN
// 3

[1, null, 2].forEach(log)
// 2
// 1
// 3
[1, , 2].forEach(log)
// 2
// 3
```

上面代码中，`forEach`方法不会跳过`undefined`和`null`，但会跳过空位。



#### filter()

`filter`方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

它的参数是一个函数，所有数组成员依次执行该函数，返回结果为`true`的成员组成一个新数组返回。该方法**不会改变原数组。**

```javascript
[1, 2, 3, 4, 5].filter(function (elem, index, arr) {
  return (elem > 3);
})
// [4, 5]
```

上面代码将大于`3`的数组成员，作为一个新数组返回。

`filter`方法还可以接受第二个参数，用来绑定参数函数内部的`this`变量。

```javascript
var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item > this.MAX) return true;
};
var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, obj) // [8, 4, 9]
```

#### some(),every()

它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后**返回一个布尔值。**

`some`方法是只要一个成员的返回值是`true`，则整个`some`方法的返回值就是`true`，否则返回`false`。**(不会改变原数组)**

```javascript
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true
```



`every`方法是所有成员的返回值都是`true`，整个`every`方法才返回`true`，否则返回`false`。

```javascript
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false
```

上面代码中，数组`arr`并非所有成员大于等于`3`，所以返回`false`。

注意，对于空数组，`some`方法返回`false`，`every`方法返回`true`，回调函数都不会执行。

```javascript
function isEven(x) { return x % 2 === 0 }

[].some(isEven) // false
[].every(isEven) // true
```

`some`和`every`方法还可以接受第二个参数，用来绑定参数函数内部的`this`变量。



#### reduce(),reduceRight()

`reduce`方法和`reduceRight`方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，`reduce`是从左到右处理（从第一个成员到最后一个成员），`reduceRight`则是从右到左（从最后一个成员到第一个成员），其他完全一样。

```javascript
[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15
```



#### indexOf(),lastIndexOf()

`indexOf`方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回`-1`。

```javascript
var a = ['a', 'b', 'c'];
a.indexOf('b') // 1
a.indexOf('y') // -1
```

`indexOf`方法还可以接受第二个参数，表示搜索的开始位置。

```javascript
['a', 'b', 'c'].indexOf('a', 1) // -1
```

上面代码从1号位置开始搜索字符`a`，结果为`-1`，表示没有搜索到。



`lastIndexOf`方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回`-1`。

```javascript
var a = [2, 5, 9, 2];
a.lastIndexOf(2) // 3
a.lastIndexOf(7) // -1
```

注意，这两个方法不能用来搜索`NaN`的位置，即它们无法确定数组成员是否包含`NaN`。

```javascript
[NaN].indexOf(NaN) // -1
[NaN].lastIndexOf(NaN) // -1
```

 这是因为这两个方法内部，使用严格相等运算符（`===`）进行比较，而`NaN`是唯一一个不等于自身的值。 



#### 关于数组链式调用

上面这些数组方法之中，有不少返回的还是数组，所以可以链式使用。

```javascript
var users = [
  {name: 'tom', email: 'tom@example.com'},
  {name: 'peter', email: 'peter@example.com'}
];

users
.map(function (user) {
  return user.email;
})
.filter(function (email) {
  return /^t/.test(email);
})
.forEach(function (email) {
  console.log(email);
});
// "tom@example.com"
```

上面代码中，先产生一个所有 Email 地址组成的数组，然后再过滤出以`t`开头的 Email 地址，最后将它打印出来。

