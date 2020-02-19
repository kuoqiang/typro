```html
React使用JSX语法,JavaScript代码可以写HTML代码
let myTitle = <h1>Hello,world!</h1>

JSX语法的最外层只能有一个结点
let myTitle = <p>Hello</p><p>World</p>  //错误的

JSX语法中可以插入JavaScript代码,要使用大括号
let myTitle = <p>{'Hello' + 'World'}</p>
```



#### Babel 转码器

```js
<script src="react.js"></script>
<script src="react-dom.js"></script>
<script src="babel.min.js"></script>
<script type="text/babel">
  // ** Our code goes here! **
</script>


```



#### React组件

```react
React 允许用户定义自己的组件，插入网页。

class MyTitle extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
};

ReactDOM.render(
  <MyTitle/>,
  document.getElementById('example')
);
```



#### 组件的参数

```react
组件可以从外部传入参数，内部使用this.props获取参数。

class MyTitle extends React.Component {
  render() {
    return <h1
      style={{color: this.props.color}}
    >Hello World</h1>;
  }
};

<MyTitle color="red" />,
```



#### React 的核心思想

```react
View 是 State 的输出。
view = f(state)
上式中，f表示函数关系。只要 State 发生变化，View 也要随之变化。


React 的本质是将图形界面（GUI）函数化。

const person = {
  name: "michel",
  age: 31
}

const App = ({ person }) => <h1>{ person.name }</h1>
ReactDOM.render(<App person={person} />, document.body)
```



#### 防止注入攻击

```jsx
dangerouslySetInnerHTML
react默认插入文本用的是innerText,如果再元素上加入关键字dangerouslySetInnerHTML 则允许使用innerHTML插入
const content = "<h1>蔡纤</h1><p>臭弟弟</p>"
const div = <div dangerouslySetInnerHTML={{
              __html:content
          }}>
      		
      		</div>
```



#### React对象

```jsx
React对象都是使用Object.freeze()冻结的
Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

因此React对象被创建后无法修改，只能通过重新渲染的方式更新
因为没有直接渲染dom，所以其实效率并不低(而且使用了diff运算，只改变两次对象中修改的部分，其他的部分不变)

reactDOM.render()渲染的是虚拟dom
```

