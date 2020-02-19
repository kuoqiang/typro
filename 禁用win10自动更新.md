[![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=052269555a4e9258a63486eeac82d1d1/c9fcc3cec3fdfc039e446289d83f8794a4c226c6.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=1)

## 方法一：关闭Windows update服务

1. 

   我们右击【任务栏】空白处，在右键中选择【任务管理器】

   [![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=bb77b5168682b9013dadc333438da97e/10dfa9ec8a136327165b5c029d8fa0ec08fac749.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=2)

2. 

   在【任务管理器】面，选择【服务】选项卡，然后选择下面的【打开服务】

   [![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=36652b00ad8b87d65042ab1f37082860/21a4462309f790521d5bde0f00f3d7ca7bcbd5bf.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=3)

3. 

   这里顺便说一种打开【服务】的快捷方法，大家以后用来打开别的应用也是很方便的。操作方法如下：

   ​    点击任务栏的小娜图标，在弹出页面下面的搜索框输入要搜索的内容，如：服务，直接就可以找到【服务】这一桌面应用，点击就可以打开服务窗口

   [![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=dbd5e7550523dd542173a768e108b3df/4610b912c8fcc3ced33b52029e45d688d43f2003.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=4)

4. 

   在打开的【服务】窗口，我们找到服务“Windows update”，发现它可耻的“正在运行”，并且启动类型还是“手动”，我们右击“Windows update”，选择【属性】

   [![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=a7b7faec22738bd4c421b231918b876c/b3fb43166d224f4a5da7f62205f790529822d1c1.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=5)

5. 

   在打开的【Windows update的属性】窗口的【常规】选项卡，我们将【启动类型】改为【禁用】，然后单击下面的【停止】按钮。以前这样就可以停止更新程序，但是现在还需要一步

   [![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=a30421539422720e7bcee2fa4bca0a3a/b3119313b07eca80cfcbbdd69d2397dda1448331.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=6)

6. 

   选择【恢复】选项卡，将【第一次失败】改为【无操作】，点击【确定】，这样关闭更新后就不会自动启动了

   [![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=9566421e36292df597c3ac158c315ce2/7e3e6709c93d70cf3a4f2d3cf4dcd100baa12b4d.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=7)

   END

## 方法二：组策略禁用更新

1. 

   快捷键“win+r”打开【运行】，在运行文本框输入‘gpedit.msc’后点击【确定】或者回车

   [![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=02429e1725381f309e198da999014c67/730e0cf3d7ca7bcb962b6b00b3096b63f624a849.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=8)

2. 

   在打开的【本地组策略编辑器】界面左侧定位到：计算机配置>管理模板>windows组件>Windows更新，然后双击右侧的【配置自动更新】选项

   [![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=336b72dbba4543a9f51bfacc2e168a7b/7af40ad162d9f2d3d75e88c0a4ec8a136327cc56.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=9)

3. 

   在打开的【配置自动更新】窗口选择【已禁用】，点击【应用】后【确定】，退出就行了

   [![win10自动更新无法关闭的解决方法](https://imgsa.baidu.com/exp/w=500/sign=49532186a4014c08193b28a53a7a025b/0b46f21fbe096b635653f27f01338744ebf8ac53.jpg)](http://jingyan.baidu.com/album/d3b74d641f1c3f1f77e609e9.html?picindex=10)

   END

