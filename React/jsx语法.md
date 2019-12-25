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

