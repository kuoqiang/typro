####  TypeScript解决的问题

```typescript
使用了不存在的变量、函数或成员
把一个不确定的类型当作一个确定的类型处理
在使用null或undefined的成员
```



#### js的原罪

```
弱类型语言，变量类型可以随时改变
无法适应大型的项目
解释执行语言，错误发生的时间，是在运行时.因此开发中大部分时间在排错
```



#### TS特点

```typescript
//超集
TypeScript是一个JS的超集,是一个可选的、静态的类型系统(TS包含JS的所有功能)
//类型系统
对代码中所有的标识符(变量、函数、参数、返回值)进行类型检查
//可选的
TS的规范可用可不用
//静态的
类型检查发生的时间，在编译的时候
```



```typescript
js中也有类和对象，js支持面向对象开发。而有了类型检查，会增强面向对象的开发
TS代码不能直接在node和浏览器环境里运行
```



#### TS开发环境

```typescript
npm install typescript -g
npm init -y  生成一个package.json文件夹
tsc --init    初始化TS,创建tsconfig.json文件

//查看typescript版本只能使用 tsc -v命令
//将ts文件编译为js文件使用   tsc xxx.ts
初始化的配置项
{
    "compilerOptions":{
        "target":"es5",
        "module":"commonjs",
        "outDir":"./js",
        "rootDir":"./ts"
    }
}

然后再vscode中点击终端>运行任务>tsc:watch实时监听这个ts文件

但是即使编译错误也会生成js文件，因此应该在配置文件中设置
"noEmitOnError":true
```


