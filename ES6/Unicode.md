以前的Unicode 为 16 位 ,因此字符一个码点是两个码元的大小

之后新增了字符集,Unicode为32位,新增的字符一个码点为两个码元,length长度读的是马元

```js
 const text = "卣"
 console.log(text.length);   	 //2      大小为两个码元
 console.log(/^.$/.test(text))   //undefined 找不到为一个马元的字符
 console.log(text.charCode(0)    //55362 得到第1个码元
 console.log(text.charCode(1)    //55271 得到第2个码元
```



#### ES6的codePointAt

```js
codePointAt 根据字符串码元的位置,得到码点
console.log(text.codePointAt(0))  //得到第一个码元的码点 134071

//判断字符串char,是16位还是32位
 	function is32bit(char){
        //如果码点大于16位二进制的最大值,则其是32位的
        return char.codePointAt(0) > 0xffff;
    }
	is32bit(text)

//得到一个字符串码点的真实长度
	function getLengthOfCodePoint(str){
        var len = 0;
        for(let i = 0; i <str.length; i++){
            //i在索引码元
            if(is32bit(str,i)){
                //当前字符串,在i这个位置,占用了两个码元
                i++
            }
            len ++;
        }
        return len;
    }


ES6为正则表达式添加了一个flag:u,如果添加了该配置,则匹配时使用码点匹配
 console.log(/^.$/u.test(text))   //true 
```



#### ES6新增的字符串API

```js
includes   //判断一个字符串中是否包含指定的字符串
const text = "小win"
text.includes('小')   		//true
text.includes('小',1)		//false  第二个参数指定开始查找的位置

startsWith  //判断是否以指定的字符串开始
text.startsWith('w')  		//false
text.startsWith('w',1)  	//true    第二个参数指定开始判断的位置

endsWith    //判断是否以指定的字符串结尾
text.endsWith('win')   		//true

repeat     	//将字符串重复指定的次数,并且返回一个新字符串
text.repeat(2)  			//'小win小win'
```



#### 正则中的粘连标记

```js
标记名:y
含义:匹配时,完全按照正则对象中的lastIndex位置开始匹配,并且匹配的位置必须在lastInde位置.
const text = 'Hello World'
const reg = /W\w+/y;
console.log(reg.test(text))  //false   lastIndex默认值为0
reg.lastIndex = 6;
console.log(reg.test(text))  //true
```

