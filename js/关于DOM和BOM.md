### Node.prototype.nodeType

`nodeType`属性返回一个整数值，表示节点的类型。

```
document.nodeType // 9
var div =document.ElementgetById("div");
div.nodeType  //1
```

不同节点的`nodeType`属性值和对应的常量如下。

```javascript
文档节点（document）：9            对应常量`Node.DOCUMENT_NODE`
元素节点（element）：1             对应常量`Node.ELEMENT_NODE`
属性节点（attr）：2                对应常量`Node.ATTRIBUTE_NODE`
文本节点（text）：3                对应常量`Node.TEXT_NODE`
文档片断节点（DocumentFragment）：11 
                            对应常量`Node.DOCUMENT_FRAGMENT_NODE`
文档类型节点（DocumentType）：10   对应常量`Node.DOCUMENT_TYPE_NODE`
注释节点（Comment）：8            对应常量`Node.COMMENT_NODE`
```



### Node.prototype.nodeName

`nodeName`属性返回节点的名称。

```javascript
// <div id="d1">hello world</div>
var div = document.getElementById('d1');
div.nodeName // "DIV"
```

不同节点的`nodeName`属性值如下。

```javascript
- 文档节点（document）：`#document`
- 元素节点（element）：大写的标签名
- 属性节点（attr）：属性的名称
- 文本节点（text）：`#text`
- 文档片断节点（DocumentFragment）：`#document-fragment`
- 文档类型节点（DocumentType）：文档的类型
- 注释节点（Comment）：`#comment`
```



### Node.prototype.baseURI

`baseURI`属性返回一个字符串，表示当前网页的绝对路径。浏览器根据这个属性，计算网页上的相对路径的 URL。该属性为只读。

```
document.baseURI
// "http://www.example.com/index.html"
```

如果无法读到网页的 URL，`baseURI`属性返回`null`。

该属性的值一般由当前网址的 URL（即`window.location`属性）决定，但是可以使用 HTML 的`base`标签，改变该属性的值。

```
<base href="http://www.example.com/page.html">
```

设置了以后，`baseURI`属性就返回`base`标签设置的值。



### Node.prototype.nextSibling

`Node.nextSibling`属性返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回`null`。

```javascript
// <div id="d1">hello</div><div id="d2">world</div>
var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');

d1.nextSibling === d2 // true
```

注意，该属性还包括文本节点和注释节点（` <!-- comment --> `）。因此如果当前节点后面有空格，该属性会返回一个文本节点，内容为空格。



### 创建节点方法

```javascript

· crateAttribute(name)：　　　　　 　用指定名称name创建特性节点

· createComment(text)：　　　　　　　创建带文本text的注释节点

· createDocumentFragment()：　　　　创建文档碎片节点

· createElement(tagname)：　　　　　 创建标签名为tagname的节点

· createTextNode(text)：　　　　　　  创建包含文本text的文本节点
```



### parentNode和parentElement

`parentNode`属性返回当前节点的父节点。对于一个节点来说，它的父节点只可能是三种类型：元素节点（element）、文档节点（document）和文档片段节点（documentfragment）。

```javascript
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
//正所谓自己搞自己，也不过如此了
```

上面代码中，通过`node.parentNode`属性将`node`节点从文档里面移除。

文档节点（document）和文档片段节点（documentfragment）的父节点都是`null`。另外，对于那些生成后还没插入 DOM 树的节点，父节点也是`null`。

### 

`parentElement`属性返回当前节点的父元素节点。如果当前节点没有父节点，或者父节点类型不是元素节点，则返回`null`。

```
if (node.parentElement) {
  node.parentElement.style.color = 'red';
}
```

由于父节点只可能是三种类型：元素节点、文档节点（document）和文档片段节点（documentfragment）。`parentElement`属性相当于把后两种父节点都排除了。



#### firstChild  返回当前节点第一个子节点，无子节点返回null

#### lastChild  返回当前节点的最后一盒子节点，无子节点返回null



####  hasChildNodes  表示当前节点是否有子节点,返回布尔值。 

下面是如何移除当前节点的所有子节点。

```
var element = document.getElementById('top');
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```



#### 常用document属性

```javascript
document.documentElement属性指向<html>节点
document.body属性指向<body>节点
document.head属性指向<head>节点。
```

