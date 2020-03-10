###### node-sass安装

1. npm环境的配置，就是设置一个淘宝源
   1. `npm config set registry https://registry.npm.taobao.org `
   2. 相当于在全局配置为难.npmrc下面新增一行代码 `registry=https://registry.npm.taobao.org/`
2. 需要用到sass的项目中，都需要安装node-sass，需要翻墙下载(在自己国外的服务器下载后通过sftp复制过来)
   1. node -p "[process.platform, process.arch, process.versions.modules].join('-')"    ---> 得到自己电脑系统的当前需要的版本  如: win32-x64-64
   2. [node-sass下载地址](https://github.com/sass/node-sass/releases)    ---> 下载对应系统的.node版本  如 win32-x64-64_binding.node   储存到一个固定的地方
   3. 修改.npmrc (npm的整体配置文件)， 添加一行  `sass_binary_path=C:/Users/yunnex/.gem/win32-x64-64_binding.node`
   4. 在对应的node-sass目录下面新建 vendor 目录， 之后将win32-x64-64_binding.node 文件，新建win32-x64-64目录， 再在这个目录下面粘贴 binding.node文件  
   5. npm cache clean ， 之后再npm install 就会成功
3. 直接全局指定`node-sass`下载的位置
   1. 使用命令行输入 `npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/`
   2. 上面这个命令最终的结果是在.npmrc配置文件下面添加了一行代码 `sass_binary_site=https://npm.taobao.org/mirrors/node-sass/`
4. 使用cnpm单独安装node-sass
   1. `npm install node-sass`



###### 最终npmrc配置文件

```
registry=https://registry.npm.taobao.org/
#sass_binary_path=C:/Users/admin/.config/win32-x64-64_binding.node
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```





###### npm发布

1. 两个命令`npm adduser;  npm publish`



### npm的配置文件.npmrc

1. 通过命令行 `npm config edit` 就是不知道配置文件也是可以修改的

2. 查找真实的配置文件地址`npm config ls -l`

3. 获取npm全局的node包的位置`npm config get prefix` 还可以使用 `npm root -g`

   ```
   常见命令
   npm init  初始化项目   -y 直接生产默认package.json文件
   npm config edit
   npm config ls -l
   npm config get prefix
   npm root -g
   npm config get userconfig/globalconfig
   
   使用npm config set xxx 修改配置项以后，会将.npmrc文件全部更改，注释全部被删除
   npm config set registry https://registry.npm.taobao.org
   npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
   npm config set sass_binary_path C:/Users/yunnex/.gem/win32-x64-64_binding.node
   
   // 关于npm使用代理
   npm config delete proxy
   npm config set proxy 'http://localhost:1080'
   npm config set 'https-proxy http://localhost:1080'
   ```

   