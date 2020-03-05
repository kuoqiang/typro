#### 表的约束

```mysql
#对表中的数据进行限定，保证数据的正确性、有效性和完整性
1.主键约束:primary key
2.非空约束:not null
3.唯一约束:unique
4.外界约束:forign key

	create table 表名(
    	id int primary key,#主键约束，非空且唯一，一个表只有一个主键
        name varchar(32) not null,#非空约束
        phone varchar(20) unique#唯一约束，值不能重复
    )
    
#删除非空约束
	alter table 表名 modify 列名 类型  //直修改类型
	
#删除唯一约束
	alter table 表名 drop index 列名

#删除主键约束
	alter table 表名 drop primary key

#自动增长
 如果某一列是数值类型的，使用 auto_increment 看可以来完成自动增长

#删除自动增长
	alter table stu modify id int

#创建表，添加主键约束，并实现自动增长
	create table stu(
    	id int primary key auto_increment
    )
    
#外键约束
	1.在创建表时，可以添加外键
		create table 表名(
        	...
            外键列 外键类型,
            constraint 外键名称 foreign key(外键列名称) references 关联表名(关联表主键名)
        )
	
#级联更新
	on update cascade

#级联删除
	on delete cascade
```

