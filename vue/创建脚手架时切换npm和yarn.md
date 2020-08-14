#### npm和yarn切换创建模板

此文件如果是windows环境，则存在了 c盘用户文件夹下

找到.vuerc文件

"packageManager": "yarn"  //配置使用什么下载vue模板





#### npm ERR! A complete log of this run can be found in: npm ERR!

1. 执行 `npm install npm@latest -g`升级到最新版本
2. 删除本地node_modules 依赖包
3. 执行 `npm cache clean --force` 清理缓存
4. npm install