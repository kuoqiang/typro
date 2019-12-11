| 术语       | 解释说明                                                |
| ---------- | ------------------------------------------------------- |
| database   | 数据库,mongodb数据库软件可以建立等多个数据库            |
| collection | 集合，一组数据的集合，可以理解为javaScript中的数组      |
| document   | 文档，一条具体的数据，可以理解为javaScript中的对象      |
| fileld     | 字段，文档中的属性名称，可以理解为javaSript中的对象属性 |



#### mongodb默认端口

```js
27017
```





#### Mongoose第三方包

```js
使用Node.js操作MongoDB数据库需要依赖Node.js第三方包mongoose

net  stop 	mongodb     //停止mongodb服务器
net  start  mongodb		//启动mongodb服务器
```

```js
//连接数据库
const mongoose = require('mongoose')
monsoose.connect('mongodb://localhost/数据库名'，{useUnifiedTopology:true,
                 useNewUrlParser: true})
			.then(()=>{console.log('数据库连接成功')})
				.catch((err)=>{console.log(err,'数据库连接失败')})
```



#### 创建集合

```js
//设定集合规则
const courseSchema = new mongoose.Schema({
		name:String,
		author:String,
		isPublished:Boolean
})
//创建集合并应用规则
const Course = mongoose.model('Course',courseSchema)//集合名首字母必须大写
//实际创建名为courses
```



#### 创建文档

```js
//创建集合实例,方法一
const course = new Course({
	name:'Node.js course',
	author:'蔡矶',
	tags:['node','backend'],
	isPublished:true
});

//将数据保存到数据库中
course.save();


//方法二
Course.create({name:'xxx',age:18,sex:'?'},function(err,doc){
    	//返回一个回调函数
})
```





#### 导入文档

```js
mongoimport -d 数据库名 -c 集合名 --file 文件名
```



#### 查询文档

```js
Course.find().then(result => console.log(result))
//find中可以传递一个对象来筛选数据


Course.findOne().then(result => console.log(result))
//默认返回当前文件的第一条文档，可以传对象来筛选数据


Course.find({
    _id:'gbc2664684548'
}).then(result => console.log(result))
//筛选出_id为gbc2664684548的数据


Course.find({
    age:{$gt:20,$lt:50}
}).then(result => console.log(result))
//筛选出年龄大于20小于50的数据


Course.find({
   hobbies:{$in:['敲代码']}
}).then(result => console.log(result))
//筛选出爱好包含敲代码的数据
```



#### 查询特定字段

```js
Course.find().select('name email').then(result => console.log(result))
//筛选出Course集合中所有数据的name和email字段，空格隔开

Course.find().sort('age').then(result => console.log(result))
//筛选出Course集合中所有数据并且根据年龄字段升序排列

Course.find().sort('-age').then(result => console.log(result))
//筛选出Course集合中所有数据并且根据年龄字段降序排列

Course.find().skip(2).limit(2).then(result => console.log(result))
//skip 跳过多少跳    limit限制查询数量
```





#### 删除文档

```js
Course.findOneAndDelete().then(result => console.log(result))
//删除筛选出来的第一个数据，result返回要被删除的数据

Course.deleteMany().then(result => console.log(result))
//删除筛选出的所有数据，不传对象则删除整个集合
```





#### 更新文档

```js
Course.updateOne({name:'李四'},{neme:'李狗蛋'}).then(result => console.log(result))
//更新单个的数据，将名字为李四的改为李狗蛋

Course.updateMany({},{age:56}).then(result => console.log(result))
//更新多个数据,将所有的数据年龄改为56
```



#### 验证规则

```js
const postSchema =new mongoose.Schema({
				title:{
					type:String,
					required:[true,'错误提示信息'],
                    minlength:2,
                    maxlength:5，
                    trim:true，
                    enum:['html','css','js']
						}
					}),
      			
      			 age:{
                     type:Number,
                      min:18,
                      max:100
                 },
                  
                 author:{
                     type:String,
                     validate:{
                         validator:(val)=>{
                             return val > 4;
                         },
                         message:'自定义错误信息'
                     }
                 }

const Post = mongoose.model('Post',postSchema)

//required为true的字段为必填，否则报错
//minlength为最小信息,maxlength为最大信息(针对字符串)
//trim为true则去除字段两端的空格
//min为最小数量(针对数字)
//max为最大数量(针对数量)
//enum为枚举，输入的值必须为enum的范围中的一个 		子属性 message,values


//validate  为自定义验证规则
//其中validator是一个函数，返回值为Boolean类型，false则返回错误信息

```



#### 集合关联

```js
const userschema = mongoose.Schema({
                name:String,
                age:String,
                sex:String
            })

            const postschema = mongoose.Schema({
                author:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'User'
                },
                win_name:String,
                boolean:Boolean
            })

            const User = mongoose.model('User',userschema);
            const Post = mongoose.model('Post',postschema);

            Post.find().populate('author').then((result)=> console.log(result))
			//populate  关联
```

