#### vscode在终端运行脚本时出现“因为在此系统上禁止运行脚本

```
首先关闭vscode,再以管理员的身份运行vscode,然后打开终端执行：
get-ExecutionPolicy，显示的是Restricted，表示状态是禁止的;
再执行：set-ExecutionPolicy RemoteSigned;
然后再执行get-ExecutionPolicy，就显示RemoteSigned;
```

