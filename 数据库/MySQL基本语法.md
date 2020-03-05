####  服务器的启动和关闭

```js
net start mysql    //打开mysql服务
net stop mysql  //停止mysql服务(需要管理员打开)

services.msc  //打开服务窗口
```



#### 连接本地mysql

```js
//登录mysql
	mysql -u用户名 -p密码  

//退出mysql
	exit 或 quit	  		 

//连接目标的Mysql
	mysql -h(IP地址)  -u用户名 -p密码  
	等价于 
	mysql --h=127.0.0.1 --user=root --password=123456
```



#### SQL

```
sql又被称为结构化查询语言
每一种关系型数据库都要遵循sql的规则
```



#### 数据库 database

```mysql
SQL语句可以单行过着多行书写，以分号结尾

单行注释   -- 或者 #
多行注释   /* */

DDL  #操作数据库和表
DML  #增删改表中的数据
DQL  #查询表中的数据
DCL	 #授权和安全访问

#操作数据库:CRUD
  create  创建
  update  修改
  select  查询
  delete  删除
  
#查询所有数据库的名称
	show databases;
	
#查看某个数据库的字符集
	show create databases 数据库名
	
#创建数据库
	create database 数据库名
	
#针对同名数据库做容错处理，如果数据库已经存在不会报错
	create database if not exists 数据库名
	
#创建数据库并且指定字符集
	create database 数据库名 character set 字符集名(比如UTF8,gbk)

#判断数据库是否存在并指定字符集
	create database if not exists 数据库名 character set 字符集名

#修改数据库字符集
	alter database 数据库名 character set 字符集名

#删除数据库
	drop database 数据库名

#查询当前使用的数据库名
	select database();

#使用数据库
	use 数据库名
```



#### 表 tabel

```mysql
#查询某个数据库中的所有表
	show tabels;

#查询表结构
	desc 表名;
	
#创建表
	create tabel 表名(数据名1 数据类型1,数据名2 数据类型2...);

#sql数据类型
	int  		整数类型
	double(总位数，保留位数) 	小数类型
	date		日期类型(yyyy-MM-dd)
	datetime 	日期类型 yyy-MM-dd HH:mm:ss
	timestamp 	时间戳类型 yyyy-MM-dd HH:mm:ss，不赋值默认为当前系统时间
	varchar(字符长度)	字符串类型

#复制表(创建表二，内容与表一相同)
	create table 表2 like 表1  

#删除表
	drop table 表名

#修改表名
	alter table 表名 rename 新表名

#查看表字符集
	show create table 表名 

#修改表字符集
	alter table 表名 character set 字符集名

#给表增加新列
	alter table 表名 add 新列名 类型

#改变表内列名
	alter table 表名 change 原列名 新列名 新类型

#删除列
	alter table 表名 drop 列名
```



#### 修改表中的数据

```mysql
#添加数据
	insert into 表名(列名1，列名2...) values(值1,值2...)

#删除数据
	delete from 表名 where 条件

#删除整个表，再创建一个一摸一样的空表
	truncate table 表名

#修改表中数据
	update 表名 set 列名1 = 值1,列名2 = 值2... where 条件
```



#### 查询语句

```mysql
#排序查询
	order by 排序字段1,排序方式1,排序字段2,排序方式2...
	排序方式默认为升序(ASC),降序(DESC)

#去除重复结果
	select distinct 列名 from 表名

#聚合查询
	count:计算个数
	max:计算最大值
	min:计算最小值
	sum:计算和
	avg:计算平均值
	*聚合函数的计算，会排除Null值

#计算name列的个数
	select count(name) from 表名

#计算分数列的平均值
	select avg(math) from 表名

#分组查询
	select 分组类型 聚合函数 from 表名 group by 分组类型

#分组并限定条件
	select 分组类型 聚合函数 from 表名 where 条件  group by 分组类型
	或
	select 分组类型 聚合函数 from 表名 having 条件  group by 分组类型

where 和 having 区别
	1.where再分组之前进行限定，如果不满足条件，则不参与返祖。having在分组之后进行限定，不满足则不会被查询出来
	2.where后不可以跟聚合函数，having可以进行聚合函数的判断
```



#### 分页查询

```mysql
limit 开始的索引,每页查询的条数

#每页显示三条数据
	select * from 表名 limit 0,3

#两条列之和
	select 列1 + 列2 from 表名

#null值容错
	select ifnull(列名,容错的值) from 表名;

#取别名
	select 列名 AS 别名 from 表名

#查询值为null的数据
 	select * from 表名 where 列名 is Null;
 	
#查询值不为null的数据
	select * from 表名 where 列名 is not Null
```



#### 模糊查询

```mysql
#like
	_   单个任意字符
	%	多个任意字符

#查询姓马的数据
	select * from 表名 where name like '马%'

#查询第二个字是马的数据
	select * from 表名 where name like '_马%'

#查询姓名中包含马的人
	select * from 表名 where name like '%马%'
```

