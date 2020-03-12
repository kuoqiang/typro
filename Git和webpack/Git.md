#### Git基本工作流程

```
git  版本管理控制系统

git仓库         		暂存区          		工作目录
用于存放提交记录	临时存放被修改文件		被Git管理的项目目录

上传的文件先被存放到暂存区，接着从暂存区存到git仓库

配置提交人姓名:git config --global user.name '提交人姓名'
配置提交人邮箱:git config --global user.email	'邮箱地址'
查看git配置信息:git config --list
```



#### 提交步骤

```
git init 					初始化git仓库

git status 					查看文件状态

git add 文件列表 			  增加文件到暂存区		

git commit -m 提交说明信息	 提交文件

git log 					 查看提交信息
```





#### 回退撤销

```
用暂存区中的文件覆盖工作目录中的文件:  git checkout 文件名

删除暂存区中的文件:git rm --cached 文件名

将git中指定的更新记录恢复，并且覆盖暂存区和工作目录
	git reset --hard commitID
```





#### 分支

```js
保护主分支的稳定性

查看当前分支 git branch

创建开发分支 git branch '新分支名'

切换分支 git checkout '分支名称'

*切换到主分支前开发分支必须提交，否则开发分支的内容会被复制到主分支中


合并分支到主分支(主分支上执行)	git merge 来源分支 
删除分支 					   git branch -d 分支名称(分支被合并后才允许被删除)
强制删除分支					 git branch -D 分支名称


存储临时改动(将当前分支的所有文件复制到剪切板 ): git stash
恢复改动: git stash pop
```

