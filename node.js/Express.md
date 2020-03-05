#### Express

```js
提供了简洁的路由定义的方式
对获取HTTP请求参数进行了简化处理
对模板引擎支持程度高,方便渲染动态HTML页面
提供了中间件有效控制HTTP请求
拥有大量第三方中间件对功能进行扩展
```



#### 创建网站服务器

```js
const express = require('express') 		//引入express模块
const app = express();					//创建网站服务
app.listen(3000)						//监听端口
```



#### 路由

```js
app.get('/',(req,res)=>{
	res.send('hello Express')
	//get方式对客户端响应
})

app.post('/add',(req,res)=>{
	res.send('post')
	//post方式对客户端响应
})

//send方法自动检测响应方法的类型，并且自动设置HTTP状态码
//send方法自动设置响应的内容类型和编码
```





#### 请求参数获取

```js
get参数
//直接使用req.query获取
post参数
需要借助第三方包 body-parser
const bodyParser = require('body-parser')  				//引入body-parser模块
app.use(bodyParser.urlencoded({ extended:false }));  	//配置body-parser模块
//直接使用req.body获取

```



#### 中间件方法

```js
两部分构成  //中间件方法以及请求处理函数

app.get('/request',(req,res,next)=>{
	req.name = '张三';
    next();
})

app.get('/request',(req,res)=>{
	res.send(req.name)
})                //在请求参数中添加一个name属性,然后在下一个中间件中返回


//返回状态码
res.status(状态码)
```



```js
//接收所有的请求，不区分请求方式
app.use((req,res,next) => {
  	  console.log('第一个中间件'); 
      next();
})	

//接受'/admin'请求，不区分请求方式
app.use('/admin',(req,res,next) => {
  	  res.send('/list')
      next();
})	

```



#### 设置响应状态码

```js
app.use((req,res,next) => {
  	  res.status(404)
      res.send('这个页面没有被找到')
      //可以链式调用   res.status(404).send('这个页面没有被找到')
})	
```



#### 错误处理中间件

```js
针对文件读取失败，数据库连接失败等错误，错误处理中间件是一个集中处理错误的地方
app.get('/file',(req,res,next)=>{
    fs.readFile('xxx.txt','utf-t',(err,data)=>{
        if(err){
            next(err)	//中间件返回错误信息，下一个中间件就可以拿到这个错误信息
        }else{
            
        }res.send(data)
    })
})

app.use((err,req,res,next) => { /4个参数
    res.status(500).send(err.message)
    //err.message可以拿到throw new Error抛出的错误信息
})
```



#### 异步错误信息处理

```js
const promisify = require('until').promisify
const readFile = promisify(fs.readFile)
app.get('/file',async (req,res,next)=>{
    try{
        await readFile('xxx.txt')
    }catch(err){
        next(err)
    }
})
//try catch 只能获取同步代码和异步函数的错误,其他的异步操作错误无法获取
app.use((err,req,res,next) => { 
    res.status(500).send(err.message)
})
```



#### 构建模块化路由(二级路由)

```js
const express = require('express')
const home = express.Router()		//创建路由对象

**** app.use('/home',home)        //将路由和请求路径进行匹配
home.get('/index',()=>{		 //在home路由下创建二级路由
    res.send('二级路由页面')   //访问/home/index时显示
})
```



#### 关于app.use

```
1.拦截所有的请求

```



#### Express路由参数

```js
app.get('/find/:id',(req,res) =>{
	console.log(req.params)  //{id:123}  获取到路由的参数
})
//localhost:3000/find/123

//传递多个参数
app.get('/find/:id/:name/:age',(req,res) =>{
	console.log(req.params)    
})
```



#### Express静态资源处理

```js
通过Express内置的express.static可以方便的托管静态文件,例如img、CSS、JavaScript文件
app.use(express.static('public'))   
//app.use拦截所有的请求，然后将所有的请求交给express.static方法处理，该方法判断这个请求的是否是静态资源，如果是就返回静态资源并且终止。
//这样，public文件夹下的文件就可以访问了
```



#### Express上的模板引擎

![image-20191214161440847](C:\Users\小win\AppData\Roaming\Typora\typora-user-images\image-20191214161440847.png)

```js
安装的时候两个都需要安装
app.engine('art',require('express-art-template'))
//当渲染后缀为art的模板时，使用express-art-template
//(告诉epress框架使用什么模板引擎渲染什么后缀的模板文件)
app.set('views',path.join(__dirname,'views'))
//设置模板的存放目录，配置项的名字是固定的
//(告诉express框架模板存放的位置是什么)
app.set('view engine','art')
//渲染模板时不写后缀，默认拼接art后缀(告诉express框架模板的默认后缀是什么)

app.get('/index',(req,res)=>{
    //render方法帮我们拼接了模板路径和模板后缀，并每个模板对应的数据进行配对
    //将结果直接响应给客户端
    res.render('index',{
        msg:'message'
    })
})


***模板文件中的外链资源，要用绝对路径才行(添加/)
```



#### 模板公共数据

```js
app.locals对象   //在路由中可以通过req.app.locals获取
//将变量设置到app.locals对象下面，这个数据在所有的模板中都可以获取到
app.locals.users = [{
    name:'张三',
    age:20
},{
    name:'李四',
    age:20
}]
```



#### 重定向

```js
res.redirect('/admin/user')
```



#### Joi

```js
JavaScript对象的规则描述语言和验证器
const schema ={
    username:Joi.string().alphanum().min(3).max(30).required().error(new 		Error('错误信息')),
    password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token:[Joi.string(),Joi.number()],
    birthyear:Joi.number().integer().min(1900).max(2013),
    email:Joi.string().email()
}


Joi.validate({ username:'abc',birthyear:1994},schema)
				//验证对象                      验证规则 
		//返回promise对象，成功则返回验证对象，失败返回错误信息

//alphanum  验证只能是字母或数字字符串
//required  验证为必选属性，没有怎无法通过验证
//error     验证通过返回的自定义错误信息
//regex     验证正则表达
//[Joi.string(),Joi.number()]  两种验证规则
//integer   验证必须为整数
//email   验证必须为邮件格式
//valid   只匹配valid里面的值
```



#### cookie解析

```js
const cookie = require("cookie-parser")
app.use(cookie())//将cookie解析为对象,并且可以通过req.cookies找到

res.cookie(key,value) //设置cookie
```



#### session

```js
const session = require('express-session')
app.use(session({ secret:'secret key' }))  //解密session

req.session.xxx = xxx  
//通过这种方式会自动生成一个sessionId(加密形式)，并且随着请求传递给服务器端
```



#### formidable

```js
//引入模块
	const formidable = require('formidable')
//创建表单解析对象
	const form = new formidable.IncomingForm();
//设置文件上传位置路径
	form.uploadDir = '/my/dir'
//是否保留表单上传文件的扩展名
	form.keepEtensions = false
//解析表单
```



#### js文件读取

```js
	var file = document.querySelector('#file')
    var preview = document.querySelector('#preview')	//img标签
    
    file.onchange = function(){
        var reader = new FileReader();
		//读取二进制文件
		reader.readAsDataURL(this.files[0]);

		//获取文件读取结果
		reader.onload = function(){
        console.log(reader.result)
            preview.src = reader.result;
    }
    }
	
```





#### mongoose分页查询

```js
let pagination = require('mongoose-sex-page')
let result = await pagination(集合构造函数).page(当前页码).size(每一页显示的数据条数).display(当前显示的页码数据).exec()//向数据库发送查询请求

//返回结果
	{
        "page":1,//当前页
        "size":2,//每页显示数据条数
        "total":8,//总共的数据条数
        "reords":[
            //查询出来的具体数据
            {
                .......
            }
        ],
        "pages":4,//总共的页数
        "display":[1,2,3,4]//客户端显示的页码
    }
```

