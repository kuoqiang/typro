设置Chrome启用Flash，修改配置之前先看Chrome的版本，不同版本设置方法不一样。



**## Chrome 69.0之前 ##**
\1. 打开 chrome://settings/content/flash
\2. 禁止网站运行Flash -> 改为“先询问（推荐）”
\3. 允许->添加
\4. 添加网站->添加
依次将常见顶级域名加入允许名单
[*.]com
[*.]net
[*.]org
[*.]cn

**## Chrome 69.0~70.0 ##**
69.0~70.0，Flash权限受到进一步限制，默认仅在当前浏览会话有效。
关闭Ephemeral Flash Permission，才能看到“添加”按钮。

\### 方案1 - 修改用户配置 ###
\1. 打开 chrome://flags/#enable-ephemeral-flash-permission
\2. 把它从Default改为Disabled
\3. 重新打开Chrome，进入 chrome://settings/content/flash
\4. 将域名添加到允许名单

\### 方案2 - 修改快捷方式 ###
\1. 修改快捷方式
修改前：C:\Users\Administrator\AppData\Local\Google\Chrome\Application\chrome.exe
修改后：C:\Users\Administrator\AppData\Local\Google\Chrome\Application\chrome.exe --disable-features=EnableEphemeralFlashPermission
\2. 重新打开Chrome，进入 chrome://settings/content/flash
\3. 将域名添加到允许名单

**## Chrome 71.0 以上 ##**
从71.0开始，Flash插件的Ephemeral模式不可关闭。
修改允许名单，要动用“Chrome政策模板”，对Windows来说最终就是注册表。
**请注意这是一项危险操作：**

新建【.reg】后缀的文件，将下面内容复制进去，保存，然后导入到注册表，重启Chrome即可生效。

```registry
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Policies\Google\Chrome\PluginsAllowedForUrls]
"1"="[*.]com"
"2"="[*.]net"
"3"="[*.]org"
"4"="[*.]cn"
```

写入注册表后，重启Chrome。进入chrome://settings/content/flash即可看到效果。

\## 补充 ##

新建【.reg】后缀的文件，将下面内容复制进去，保存，然后导入到注册表，重启Chrome即可生效。
 按协议允许，而不是域名：

```registry
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Policies\Google\Chrome\PluginsAllowedForUrls]
"1"="https://*"
"2"="http://*"
```



#### 最终方案

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google]

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
"DefaultPluginsSetting"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\PluginsAllowedForUrls]
"1"="http://*"
"2"="https://*"
```

