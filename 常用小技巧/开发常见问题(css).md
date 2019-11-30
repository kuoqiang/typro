#### input框鼠标聚焦时有边框（不是border）

  这是因为input标签:focus内置添加了属性**outline： -webkit-focus-ring-color auto 1px**;

  将它变成**outline:none;**





#### 文字类元素里不能嵌套块级元素

  h1-h6是块级元素

  例如p标签里面套div，div标签会自动跳到p标签外面

  块级元素宽度默认是父级100%