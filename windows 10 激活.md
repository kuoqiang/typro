当前系统的激活状态，查看方法"WIN+R"打开运行对话框，输入命令slmgr.vbs -xpr

(win + x)快捷键打开命令窗口

管理员方式运行Powershell，然后依（次输入下面三条命令，回车，会看到三条提示语句。

分别为，

slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX

红色字体为激活密钥

弹窗提示：获取密钥成功。

slmgr /skms kms.03k.org

弹窗提示：将服务器名称设置为***成功
slmgr /ato

弹窗提示：提示激活成功，激活到期时间为***

激活密钥可以参考一下内容：

http://www.xitongcheng.com/jiaocheng/xtazjc_article_35407.html

原文链接：https://blog.csdn.net/qq_32670879/article/details/85003949