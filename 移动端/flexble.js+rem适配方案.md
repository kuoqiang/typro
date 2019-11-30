#### px转换rem插件

   2.vscode插件   cssrem

​    自动将px转换为rem,使用该插件时html元素中的font-size默认为16px,因此需要修改。

（使用该插件目的仅仅为了方便将px转化为rem，和flexble.js不冲突）

​    需要到设置中的更多设置setting.json中搜索cssrem.rootFontSize，设置完成后重启vscode





##### js引入flexble.js（自动获取屏幕宽度，自动将其分成十份）

   这个文件会在html元素行间样式中自动加上font-size大小，值为当前屏幕大小十分之一，因此对于pc端初始的        font-size修改时应该提升权重（ !important ）
