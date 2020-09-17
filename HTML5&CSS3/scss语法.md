#### scss中使用for循环

```scss
@for $i from 0 through 24 {
    .el-col-#{$i} {
        width: $i/24 * 100%;
    }
}

//for循环一个类,$i为变量名,从0开始,直到24

```

