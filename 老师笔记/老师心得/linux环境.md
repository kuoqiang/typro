1. 关键词 配置多域名，多https服务器

2. 常用命令

   ```
   查看系统版本
   uname -a,  lsb-release -a
   
   查看内存使用情况
   cat /proc/meminfo
   free -h
   
   查看对应的程序进程
   ps aux | grep nginx
   ps aux --sort -rss
   vmstat -s
   
   service nginx start/stop/restart
   ```

   

3. 查找nginx，mysql，apache的配置文件  `find / -name nginx.conf` `find / -name my.cnf` `find / -name httpd.conf`

4. 安装mysql， centos默认的是MariaDB

  ```javascript
  创建一个文件，设置mysql的yum源
  vi /etc/yum.repos.d/mysql-community.repo
  放入下面的内容
  [mysql56-community]
  
  name=MySQL 5.6 Community Server
  
  baseurl=http://repo.mysql.com/yum/mysql-5.6-community/el/7/$basearch/
  
  enabled=1
  
  gpgcheck=0
  
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
  
  安装mysql
  sudo yum install mysql-community-server
  运行mysql服务
  sudo service mysqld start
  ```

  

4. 修改mysql密码，初次登录默认无密码，直接回车进去修改密码  

   `set password for root@localhost = password('123456')`


6. nodejs使用pm2来管理程序，反向代理本机其他端口

   ```
   pm2是一个带有负载均衡功能的node应用的进程管理器，非常适合laaS结构，
   pm2 start server.js --watch --name="test"
   pm2 restart XXX
   pm2 stop XXX
   pm2 delete xxx
   
   负载均衡
   pm2 start server.js -i max， 根据机器CPU的核数，开启对应数目的进程
   
   m2 start app.js -i 4         # cluster mode 模式启动4个app.js的应用实例     # 4个应用程序会自动进行负载均衡
   pm2 start app.js --name="api" # 启动应用程序并命名为 "api"
   pm2 start app.js --watch      # 当文件变化时自动重启应用
   pm2 start/stop/restart  id
   
   开机自动启动
   pm2 save
   pm2 startup centos
   
   监控，日志
   pm2 monit,  pm2 logs
   ```

   

7. 负载均衡(load banlance)

   一个http请求被派发到web服务器的过程就涉及到了负载均衡的实现。负载均衡的基本原理，将任务的处理负载均摊到不同的进程，减少单一进程的负载。在线上环境中，机器宕机或者进程异常会导致服务不可用是常用的现象，线上环境一般是多个服务器提供同样的服务，多个负载均衡器形成一个集群

   对应的负载均衡算法

8. 单机结构，集群结构，分布式结构

   最开的单机结构，所有的代码，前台代码，后台服务器代码，数据库等都放在一台服务器上，缺点明显，业务量增大时，处理不了

   集群(同一个业务，部署在多个服务器上)

   白话就是多个服务器放相同的后台程序或者数据库程序，形成一个集群，根据各个服务器的节点的负载情况，决定将当前的请求交给哪个服务器处理，设计到负载均衡算法，于是就在请求前面有了一个负载均衡服务器。缺点是业务发展到一定程度后，无论怎么增加节点，性能的提升效果不明显，于是就出现了微服务结构

   分布式结构(一个业务拆分为多个子业务，部署在不同的服务器上)

   一个完整的系统，按照业务的功能拆分成一个个独立的子系统，每个子系统就被称为服务，它们之间通过RPC的方式通信。栗子：开发一个商城， 用户服务，产品服务，订单服务，后台管理服务，数据分析服务等等，每一个服务都是一个独立的项目，可以独立运行。系统之间的耦合度降低，复用性更高

9. 反向代理(Reverse Proxy)

   以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给对应的客户端

10. Apache,Nginx, IIS; tomcat,nodejs

    tomcat可以看做Java的应用服务器 ，(apache+jsp)

    nodejs可以看做js的应用服务器，也可以用作服务器，监听本地80端口，但性能很差

    apache/nginx使用C语言开发， nginx一般用来处理静态文件请求和记录web访问日志



### Nginx

1. 修改nginx.conf配置文件，重启nginx服务器

   ```
   // 配置文件路径  /etc/nginx/conf.d
   一般启动命令   service nginx start/stop/restart
   netstat -nplt  查看所有端口的占用
   
   kill -s 9 1234   强制性关闭对应程序的pid, ----- pkill -9 nginx
   /usr/sbin/nginx -t  测试nginx的配置文件是否有问题, 或者使用 nginx -t
   service nginx restart   start/stop
   ```

2. 123