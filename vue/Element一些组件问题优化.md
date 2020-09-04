#### 级联选择框选择任意一级清除前面的按钮

  其实要做的就是隐藏前面的按钮,点击数据时让它对应前面的按钮点击事件自运行

```js
mounted() {

　　　　setInterval(function() {
　　　　　　document.querySelectorAll(".el-cascader-node__label").forEach(el => {
　　　　　　　　el.onclick = function() {
　　　　　　　　　　if (this.previousElementSibling) this.previousElementSibling.click();
　　　　　　　　};
　　　　　　});
　　　　}, 1000);
　　},
```

  设置每次监听值变化的时候，把 `dropDownVisible` 属性设置为 false 即可（在这解释下handlerValue和$refs.refHandle，handlerValue是v-model绑定的值，ref类似于获取这个元素，不止table里有ref，其他标签你都可以用ref，然后通过this.$refs.xxx来获取，这里ref='refHandle'）

```js
　　watch: {
　　　　handlerValue() {
　　　　　　if (this.$refs.refHandle) {
　　　　　　　　this.$refs.refHandle.dropDownVisible = false; //监听值发生变化就关闭它
　　　　　　}
　　　　}
　　}
```



