#### node 操作MySQL

```js
	var mysql = require("mysql")
    //创建一个数据库连接
	var connection = mysql.createConnection({
        host:"127.0.0.1",
        port:"3306",
        user:"root",
        password:"密码",
        database:"数据库名"
	})
    
    //查询语句
    var querySql = "select * from student"
    
    //进行数据库连接
   connection.connect() 

   //开始执行Sql语句
connection.query(querySql,function(error,result) {
        if(error != null){
            console.log(error)
		}else{
    		console.log(result)
			}
    })

	//关闭连接
	connection.end()
```



