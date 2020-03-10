# win10 .net framework 3.5无法安装错误代码0x800F081F

1. 将文件复制到 C 盘的 Windows 文件夹
2. 管理员 cmd 运行 `dism /online /Enable-Feature /FeatureName:NetFx3 /Source:”%windir%” /LimitAccess`
3. 下载的文件为 `microsoft-windows-netfx3-ondemand-package_421a25bf409692045d1cbfab0d99f8def8d95d3f.cab`



### CMD常见命令

1. nslookup 查看对应的域名有没有绑定经过DNS正常解析



### del/rd命令

1. 删除文件

   ```
   del /?  查看删除的相关命令
   del 文件名  直接删除一个文件
   del *js *html *css  表示删除当前目录下的 三类文件
   erase 和del命令一样
   ```

   

2. 删除文件夹

   ```
   rmdir /?  查看相关的命令
   rmdir /s node_modules
   rd /s /q node_modules
   ```




### 常见快捷键

1. 虚拟桌面

   ```
   Win键 + ctrl + D   创建一个新的虚拟桌面
   win键 + Tab        激活任务视图
   ```

2. 常见快捷键

   ```
   win键 + D  显示桌面   ( win键 + M 最小化所有窗口 )
   win键 + E  打开文件管理器(计算机)
   win键 + X  打开高级用户功能
   win键 + R  打开运行窗口
   ```

   