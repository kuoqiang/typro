### Set

set是ES6提供的一个构造函数，能够造出一种新的数据存储结构

特点：只有属性值，并且属性值唯一

用途：可以转换成数组，其本身具备去重，交集，并集，差集

  var Os = new Set()

  Os.add()       增加Os中的值

  Os.delete()   删除Os中的某些值

  Os.clear()     清除Os

  Os,has()        Os中是否存在某值

转换成数组

Array.from(Os)     将具有迭代接口的非数组转换成数组

[...Os]



### Map

var Om = new Map([[key1,val1],[key2,val2]]);

Om.set(key,val)   在map中设置数据

Om.get(key)         获取map中的数据

Om.has(key)        查询map中是否有名为key的数据，返回布尔值

Om.keys()             返回map的属性名

Om.size                返回map数值的长度