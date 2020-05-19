
下载mysql.zip压缩文件
解压进目录 mysqld  --initialize-insecure生成data文件夹 -> mysqld --install --> net start mysql
## 安装

### fedora环境
```
更新系统库   dnf -y update

dnf install mariadb mariadb-server;
systemctl start mariadb.service
systtemctl enable mariadb.service
mysql -u roo -p

默认没密码，添加密码
mysql内部     set PASSWORD FOR 'root'@'localhost' = PASSWORD('newPwd');
mysqladmin -u root password oldpwd 'newpwd'
```

wget -r -p -np -k http://es6.ruanyifeng.com


####丢失root密码
关闭mysql进程
mysqld_safe --skip-grant-tables&
mysql -u root mysql
UPDATE user SET password=PASSWORD("123456") WHERE user='root';
FLUSH PRIVILEGES;

### 数据库基本使用
```
安装node
下载.xz文件   xz -d **.tar.xz   然后再用 tar -xvf **.tar.gz
然后通过软连接设置全局环境
ln -s /web/node/bin/node /usr/local/bin/node
ln -s /web/node/bin/npm /usr/local/bin/npm
show databases;  show tables;
create database user;   ---- drop database user;
use user;
create table login (
	id int not unll auto_increment,
	username varchar(32),
	password int
);
create table Person (
	personID int not null AUTO_INCREMENT,
	primary key(personID),
	FirstName varchar(15),
	LastName varchar(15),
	Age int
);

```



## 创建用户

+ 创建, % 通配符表示任意远程主机 ,密码项为空表示可以不要密码

```
create user 'username'@'host' identified by '123456';
create user 'dog'@'localhost' identified by '123456';
create user 'pig'@'%' identified by '';
```

## 授权

+ 授权,privileges用户的操作权限,如select,insert,update等  特殊的一些权限如ALL, *表示所有
```
grant privileges on databasename.tablename to 'username'@'host'

grant select,insert,update on test.user to 'pig'@'%';
grant all on *.* to 'pig'@'%'

让被授权的用户可以给其他用户授权
grant privileges on databasename.tablename to 'username'@'host' with grant option;
```

## 设置与更改用户密码

+ 分当前用户和其他用户

```
set password=password('123');

set password for 'pig'@'%' = password('123');
```

## 撤销用户权限

```
先查看权限 show grant for 'pig'@'%';

revoke select on *.* from 'pig'@'%';
```

## 删除用户

```
drop table 'username'@'host'
```

## 查询

+ 

```
desc mysql.user;
select * from mysql.user;
```

## 删除表

truncate table 清空表，序列重置(从0开始), 删除内容、释放空间但不删除定义
delete table
drop table

### mysql导入脚本

+ `source e:/test/test.sql;  source /home/lei/web/mall.sql` 


### mysql常用sql语句
drop table classname;
truncate table classname;
delete table classname where id = '..'  and name = 'Lucy';   //不带where语句则删除整个表的数据，担保留表的结构


#### 数据库基本操作

```sql
-- 表示单行注释   
/* 用于多行（块）注释  */
-- 一些基本的sql语句的使用
show databases; -- 查看所有的数据库
use mysql_001; -- 使用mysql_001 数据库
show tables; -- 查看所有表
desc users; -- 查看表结构
select * from users;
source e:/test/test.sql; -- 导入sql脚本，这才是工作里面常用的开发方式

-- 对表，数据库的处理
drop table users; -- 删除表， 啥都没有了  老大
truncate users; -- 清空表,自增的序列清0，表结构还在
delete table users; -- 删除内存，不删除定义，不释放空间，一行一行的删，效率比truncate低
```

1. SQL 也是一门语言，也有数据类型，初级先学习 增删改查

   ```sql
   --对数据的处理
   -- 1. 增加(插入数据)， 两种办法，一般用第一种
   insert into users (uname,age,gender) values ('张三', 26, '男');
   --自增的主键，一般可以不写
   insert into users (id,uname,age,gender) values (null,'张三', 26, '男');
   
   insert into users (uname,age,gender) select name, age, gender from account; -- 从一个表中查到数据后 在对应的添加进去
   
   -- 2. 删除
   delete from users where id = '2';
   
   -- 3. 改
   update users set age=99 where id = 6; -- 后面非数字要跟引号
   ```

2. sql的关键在于查询

   ```sql
   -- 4. 查
   -- 这个才是影响我们程序性能的关键， 一般的淘宝，等电商网站，买火车票网站，各种复杂的查询都是 数据库db 程序员做的事情， 不断的优化查询算法，让时间缩短，提高用户体验，更快的将结果返回给后端
   
   ---1. 查询部分行列， 生产环境一定不要用*
   select uname, age from users;
   select uname, age from users where id = 5;
   
   ---2. like模糊查询
   // 表示查询uname字段 第一个子为张的记录
   select uname,age,gender from users where uname like '张%';
   
   ---3. between， in 范围查询
   select uname from users where age between 10 and 30;
   select uname, age from users where age in (11,99);
   
   ---4. 分组查询
   -- 注意分组查询里面不能使用where语句， 要是有条件的话 需要用having
   select uname as '姓名' from users group by id;
   select uname as '姓名' from users group by id having count(age)>0;
   
   ---5. 多表级联查询
   select a.uname,b.account from a,b where a.id = b.id;
   ```

   