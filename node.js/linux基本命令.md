  ###  创建一个目录

mkdir  xxx     创建一个xxx文件

mkdir  -p xx1/xx1    创建一个xx1,并且在xx1里创建一个xx2



### 创建一个文件

​    vi  xxx.txt     创建一个名为xxx的文件并且查看文件内容

​						（有该文件则直接查看内容）

​    ：wq       保存并且退出

​    ：q!         强制退出

​    ctrl + f   向下翻页

​    ctrl + b   向上翻页

​	ctrl + d  向下移动半页

​	ctrl + u  向上移动半页  

​    0             光标移动到行首

   $          	光标移动到行尾

   G              移动到文件最后一行

  /abc          向下查找距离光标最近的abc

 ?abc		   向上查找距离光标最近的abc

 tail  xxx.txt 查看xxx文件的最后10行 （添加-f能够实时刷新）      

cat   xxx.txt  |grep  'xxx'    过滤找出xxx.txt文件中带有'xxx'的行

### 删除一个目录

rmdir  xxx    删除一个空目录xxx

rm  -rf  xxx/    删除整个xxx目录（包括里面所有文件）





### 文件权限

第一个字符  **D表示路径  -表示文件**

第一组：当前所属用户的权限

第二组：当前所属用户的权限

第三组：其他用户的权限

  R:读权限（4）    W:写权限（2）   X:执行权限（1）

rwx   可读可写可执行（7）

-wx  不可读可写可执行（3）

chmod  777   xxx      给xxx文件添加可读可写可执行权限      



pwd     显示当前的路径

ll          显示当前路径下的所有文件信息

ls         显示当前路径下的所有文件名

ls  -al   显示当前路径下的所有文件信息（包括隐藏文件）   



### 用户（用户必须至少属于一个用户组）

useradd  xxx     创建一个用户名为xxx

groupadd  xxx  创建一个用户组名为xxx

passwd xxx      给xxx用户设置一个密码

cat   /etc/group      查看用户组

cat   /etc/passwd   查看用户

useradd -G   b用户组   a用户       将a用户加入到b用户组

userdel      a       删除用户a 

groupdel    a      删除用户组a （不能删除主要用户组）

groups    a          查看用户a属于哪个用户组

usermod    -g   b   a        修改用户a的主要组b

id    a          		查看用户a的详细信息

su   b                 切换到用户b

sudo  su            返回到root用户

exit                     退出当前用户



### 常用命令

lscpu    查看机器cpu信息

df          查看磁盘空间

df -i       查看磁盘索引

ps aux   查看正在运行的程序

 top       产看系统资源占用情况 