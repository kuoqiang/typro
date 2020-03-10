### git常见命令

1. git init

   ```javascript
   1.项目初始化之后要进行一些配置
   这个配置文件要在 用户目录下查看 C:\Users\你当前登录的用户名  里面的.gitconfig文件夹
   
   git config --global user.name "ice201508"
   git config --global user.email "2235907780@qq.com"
   ```

2. git管理代码的使用步骤

   1. git add ./1.txt 
      1. 这个也可以用  git add ./
      2. 还可以用 git add --all
      3. 查看其他的命令  git add --help
   2. git commit -m ''这里写当前提交的注释
   3. 也可以使用 git commit --all -m  ”这里是将所有修改的文件提交到版本库中“
   4. 白话解释 add， commit
      1. 工作区：就是我们看见的目录，修改文件的地方
      2. 暂存区： add相当于把代码放到一个暂存区， 等待的用户处理
      3. commit相当于生成了一个照片，一个快照

3. git status 查看当前仓库里文件的状态

4. .gitignore文件

   ```
   这个文件表示 被忽略的文件的路径或者文件名
   一般的写法是
   /.idea    // 会忽略.idea文件
   /js       // 会忽略js目录下面所有的文件
   /js/*.js  // 会忽略js目录下面所有后缀名为js的文件
   /.gitignore // 忽略自己
   /node_modules  // 一般这个文件夹是不用上传到仓库里面的，所以会忽略掉
   这个在git add的时候就不会给你提交上去
   git status的时候 也看不到忽略的文件夹或文件
   ```

   

5. git log， git reflog

   ```javascript
   git log --oneline
   git log --help
   git log --graph --pretty=oneline --abbrev-commit  // 看分支的合并图
   git help
   
   git reflog 查看每次提交的版本记录， 可以看到每次提交的版本号
   
   gitk 查看当前仓库的图形界面
   ```

6. 难点 git reset 回退

   ```
   git reset --hard Head
   git reset --hard ddac3d  // 直接回退到某个版本号
   ```

7. 重点--分支

   1. 一个仓库的创建默认有一个.git文件夹，一个主分支master，一个指针HEAD

   ```
   1. 查看分支
   		git branch // 查看本地分支
   		git branch -a // 查看所有分支  -r是查看远程分支
   2. 创建分支
   		git branch dev
   3. 切换分支
   		git checkout dev
   		git checkout master
   4. 合并分支
   		git merge dev --no-ff  // 加上参数能看到曾经的合并历史
   5. 删除分支
   		git branch -d dev //一般开发是合并到主分支没什么问题后，就删除分支
   
   
   //--------------------------5. 难点，重点，工作里面实际的使用场景
   用户A在dev分支里面  修改了代码，  进行了add commit操作
   用户B在master分支里面 修改了代码， 进行了add，commit操作
   
   这个时候在master分支下面， 运行 git merge dev 就会报错conflict，表示两个分支有了冲突， 同一个地方都被别人改过了，这个时候就要去相应的代码里面，去手动的更改，对AB提交的代码在一个文件里面做一个处理之后再add，commit
   
   // 解决冲突
   解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。
   ```

   

   ```
   // 推送分支到远程
   git push origin dev
   将本地的dev分支推送到远程仓库里，并不是所有分支都要推送到上面去，你可以在当前分支下面  在创建一个自己的分支，自己在编辑器里面各种实验各个库和新功能的使用，只在开发分支dev里面写一些工作里面的业务代码
   ```

   



### 远程操作

1. git push, git pull

   ```
   我们的项目之前都是在本地进行一些操作add，commit之类的
   我们只有把它上传到服务器上才有意义，才能是多人协作开发，对每个人提交的代码都有一个管理的作用
   
   1. git add 1.txt
   2. git commit -m '当前提交内容的注释'
   3. 在自己的目录下面进行一个设置
   		git remote add origin "这里是这里仓库的地址"
   		git remote -v  // 查看仓库的远程地址
   4. git push origin master
      推送成功后，可以立刻在GitHub页面中看到远程库的内容已经和本地一模一样：
   
   // 每天我们上班的工作第一件事不是写代码，而是使用git pull命令，同步仓库的代码，也许昨天公司其他同事向仓库里面push了代码，你就要先拉取，再写你自己的代码，不然后面就会有冲突
   git pull
   
   这个分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而SVN在没有联网的时候是不能使用的！当有网络的时候，再把本地提交推送一下就完成了同步
   ```

2. 第二种开发方式

   ```
   一般采用的是这一种， 先在github或者gitee上面创建一个仓库，然后克隆岛本地，这样当前这个文件夹就是一个和线上同步到额版本库，不用git init； 以后add commit push 就可以了， 
   
   git clone "网上github/gitee等的仓库地址"
   
   
   // 这个地址有两种 https 和 SSH
   HTTPS: 不管谁都可以根据url随便克隆，但push的时候需要验证用户名和密码；比人的仓库没有给你权限，你提交不了
   SSH: 这个地址必须是拥有者或管理员才能clone，而且还要配置SSH key；设置好之后，push是不需要用户名和密码的
   ```

   

### SSH

1. 公钥秘钥的配置

   ```
   cd ~/.ssh  //有就删除，需要的是id_rsa.pub里面的公钥
   ssh-keygen -t rsa -C "2235907780@qq.com" 
   //连续按3个回车，赋值id_rsa.pub到github里面，相当于给电脑授予权限
   ssh git@github.com  //显示success表示成功
   ```

2. 标签tag

   1. 标签tag就是一个快照， 某一个具体的commit，是一个有意义的名称版本号

   2. 分支可以移动，标签不能移动

      ```
      1. 新建标签
      		git tag v1.0
      2. 查看所有标签
      		git tag
      		git show v1.0  查看标签的具体信息
      3. 给某个具体的commit id打上标签
      		git tag v0.9 f52c633
      4. 删除标签
      		git tag -d v1.0
      
      标签总是和某个commit挂钩。如果这个commit既出现在master分支，又出现在dev分支，那么在这两个分支上都可以看到这个标签。
      
      // 上面都是本地的命令，下面开发推送到服务器 github上
      git push origin v1.0
      git push origin --tags
      // 如果本地删除了标签，要同步线上
      git tags -d v1.0
      git push origin :refs/tags/v1.0
      ```



### GitHub Pages托管静态网站

1. GitHub Pages是通过GitHub免费托管的公共网页
2. github上创建一个仓库， 名称为  `你的用户名.github.io`
3. 在当前仓库下点击右上角的`settings`按钮
4. 在settings页面里面 找到 GitHub Pages 栏目， 对应的设置一下就可以使用
5. 然后向这个仓库里面上传一些静态资源文件html，css，js等，让后5-10分支就可以访问我们的网站了
6. 也可以将我们自己购买的域名填写到上面去，这样就不用购买服务器了



### 一个电脑设置多个github账户

1. 对每个仓库单独设置一个 用户名/邮箱

   ```
   # 取消全局 用户名/邮箱 配置
   git config –global –-unset user.name
   git config –global –-unset user.email
   # 单独设置每个repo 用户名/邮箱
   git config user.email “xxxx@xx.com”
   git config user.name “xxxx”
   ```



### Git一些问题

1. `.gitignore `文件修改不生效的问题
   1. 把某些目录或文件加入忽略规则，按照上述方法定义后发现并未生效，原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。那么解决方法就是先把本地缓存删除（改变成未被追踪状态），然后再提交
   2. `git rm -r --cached .` 之后再进行`add --> commit`

### 工作流

------

###### 项目经理

###### 小组成员
