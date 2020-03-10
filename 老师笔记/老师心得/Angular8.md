### Angular项目骨架的搭建 



###### cli脚手架的安装与使用

1. 使用`Ng 8`需要`nodejs`的版本在`10.9.0`以上

2. 相关命令

   ```
   npm install -g @angular/cli   //安装脚手架
   ng new my-app  // 拉取模板初始化应用
   // 如果要默认使用sass的话， 初始化项目带上一些参数
   ng new project --style=scss
   ng serve   		 //启动应用 默认4200窗口
   ```

3. 将我们本地的项目push到github上面的仓库里面

   ```
   git remote add origin git@github.com:ice201508/ng8_0819.git
   git push -u origin dev
   ```

4. ng new 相关命令

   ```
   ng new --style=css/less/scss/sass/styl --skipTest=true(不创建测试文件) --skipInstall(项目初始化不执行npm install) --directory '绝对路径'
   
   // 使用内联样式不生成css文件， 和内联模板不生成html文件， 不好用
   ng new --style=scss --skipTests=true --inlineStyle=true --inlineTemplate=true --routing=true --skipGit=true
   ```

   

5. ng serve 启动命令的配置项

   ```
   ng serve --open=true  --progress=true --proxy-config proxy.config.json --host="127.0.0.1" --port 8000 --prod=true --hmr(热替换)
   ```

6. Angular CLI命令速查 `<https://www.jianshu.com/p/384cc631f0fa>`




###### 项目里一些具体的名称的含义

 	1. module
      	1. ``@NgModule()` 装饰器`接受一个元数据对象，该对象的属性用来描述这个模块,常见的属性有下面几种
          - declarations --- 属于当前模块的  组件、指令、管道
          - exports --- 能够在其他模块的组件模板中使用的一些对象
          - imports --- 导出了本模块中组件模板所需的类和其他模块
          - providers --- 模块向全局提供的服务创建器，不过一般是在组件级别指定服务提供商
          - bootstrap --- 应用的主视图，根组件，只有根模块才能设置这个属性
      	2. Angular 和 JavaScript 的两种模块系统
 	2. component
      	1. `@Component` 装饰器组件控制屏幕上被称为视图的一小片区域
      	2. 模板和视图
          - 模板就是一种 HTML，它会告诉 Angular 如何渲染该组件
          - 视图通常会分层次进行组织，里面有一些其他组件组成
          	3. 模板语法
         - 模板是标准的 HTML，但是扩充了一些Angular特有的模板语法
         - 典型的 HTML 元素，比如 `<h2>` 和 `<p>`
         - Angular 的模板语法元素，如 `*ngFor`，`{{hero.name}}`，`click`、`[hero]` 和 `<app-hero-detail>`； 这些模板语法元素告诉 Angular 该如何渲染 HTML； 特别注意的是观察像这样的自定义组件是如何与原生 HTML 元素无缝的混合在一起的
         - 数据绑定标记的四种形式
           - 每种形式都有一个方向 —— 从组件到 DOM、从 DOM 到组件或双向
           - `{{value}}` 数据从组件到DOM
           - `[property]="value"` 数据从DOM到组件
           - `(event)="handle"` 数据从DOM 到组件
           - `[(ngModel)]="property"` 双向绑定
 	3. directive
     - `@Directive()` 装饰器
 	4. pipe
     - `@Pipe` 装饰器
 	5. service/DI
     - 组件应该把诸如从服务器获取数据、验证用户输入或直接往控制台中写日志等工作委托给各种服务；通过依赖注入来帮你更容易地将应用逻辑分解为服务，并让这些服务可用于各个组件中；提高模块性和复用性
     - 服务也可以依赖其它服务；组件是服务的消费者，也就是说，你可以把一个服务注入到组件中，让组件类得以访问该服务类
     -  `@Injectable()` 装饰器， 将一个类定义为 Angular的服务
     - 提供商
       - 对于要用到的任何服务，你必须至少注册一个提供商
       - 在@NgModule里面，就放在元数据的providers属性里面
       - 在@Compoennt里面，就放在元数据的providers属性里面
 	6. class/enum/interface





###### angular/cli 跨域

1. cli的跨域利用的都是webpack的代理
2. `https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md`



###### constructor 和ngOnInit

1. constructor是ES6里面类引入的东西，不属于angular 的范畴， 构造函数会在类生成实例时调用
2. angular无法控制constructor，所以就出现了ngOnInit钩子函数， 用于在Angular第一次显示数据绑定和设置指令/组件的输入属性之后； 调用时机在第一轮ngOnChanges完成之后，只会调用一次
3. constructor 主要使用常见是 注入依赖
4. ngOnInit使用场景， 做一些初始化的操作； 里面可以获取到组件/指令中被传入(就是@Input()  的数据；constructor函数里面获取不到；



###### `ng-template`和`ng-container`