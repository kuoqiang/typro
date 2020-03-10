### Git多人协作开发常见命令和流程



###### 一台电脑使用多个github账号

1. 具体命令

   ```
   1. 这是全局的配置，配置我们git clone下拉的仓库，媒体push的时候，默认使用的账户名和密码
   git config --global user.name "ice201508"
   git config --global user.email "2235907780@qq.com"
   git config user.name "ice201508"
   git config user.email "2235907780@qq.com"
   
   2. 多账号配置ssh的话比较麻烦，涉及到在.ssh里面新建一个配置文件config，后面用到再说
   我们这里只需要使用https地址，不用ssh， 只需要在拉取的新仓库下面，再针对每个仓库设置一个临时的name和emeil就可以正常的 push了
   
   git config user.name "jllei"
   git config user.email "414612218@qq.com"
   ```



###### config配置文件

1. 先配置一个成功 `ssh -T git@github.com`

   ```
   # 该文件用于配置私钥对应的22359服务器
   Host git@github.com
   HostName github.com
   User ice201508
   IdentityFile ~/.ssh/id_rsa
   
   # 该文件用于配置私钥对应的4146服务器
   Host git@github.com
   HostName github.com
   User jllei
   IdentityFile ~/.ssh/id_rsa_4146
   
   # 这个是给我们测试jllei的ssh使用
   Host jllei.github.com
   HostName github.com
   IdentityFile ~/.ssh/id_rsa_4146
   
   # gitlab user(yenian.ll@alibaba-inc.com)
   # 建一个gitlab别名，新建的帐号使用这个别名做克隆和更新
   # Host git@gitlab.alibaba-inc.com
   # HostName gitlab.alibaba-inc.com
   # User yenian.ll
   # IdentityFile ~/.ssh/id_rsa
   ```

2. 基本的一些配置

   ```
   //参考文档
   1. 查看当前配置 git config --list
   
   1.取消global
   git config --global --unset user.name
   git config --global --unset user.email
   
   2.设置每个项目repo的自己的user.email
   git config user.name "ice201508"
   git config user.email "2235907780@qq.com"
   
   git config user.name "jllei"
   git config user.email "414612218@qq.com"
   
   git config user.name "ice_90"
   git config user.email "leijiuling@itcast.cn"
   ```

3. 生成另一套rsa公钥和秘钥

   ```
   1.
   ssh-keygen -t rsa -C "414612218@qq.com" // 一定要注意，后面不能直接按回车， 默认的名字是id_rsa, 所以第一个回车哪里， 要手动输入一个新名字， 我这里选择 id_rsa_4146
   
   2.执行 ssh-agent 让 ssh 识别新的私钥，因为默认只读取 id_rsa，为了让 SSH 识别新的私钥，需将其添加到 SSH agent 中
   ssh-agent bash
   ssh-add ~/.ssh/id_rsa_4146
   ```

4. 新建并配置`~/.ssh/config`文件

   1. 具体内容参考上面

   2. 测试我们的配置是否成功

      ```
      ssh -T git@jllei.github.com
      ssh -T git@github.com
      ssh -T git@gitee.com   这个是码云的验证地址
      ```

5. 最后我们在`jllei` 账号拉取仓库后，需要改origin, 也可以说叫克隆下来的项目的 remote “作用域”

   ```
   git remote rm origin
   //  后面的仓库地址还是我们作为合作者的别人的仓库地址
   git remote add origin git@jllei.github.com:ice201508/demo.git 
   git push origin master
   ```

6. 给我们的CMD设置全局代理

   ```
   set http_proxy=http://127.0.0.1:1080
   set https_proxy=http://127.0.0.1:1080
   
   export http_proxy="http://127.0.0.1:1080" 
   export https_proxy="http://127.0.0.1:1080" 
   ```

7. git配置文件

   ```
   git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
   相当于 git lg
   设置别名， 最终在配置文件里面是这种形式
   [alias]  
       st = status  
       ci = commit  
       br = branch  
   ```

   



### pull request 和 issues使用

1. 首先这个pull request是提交我们对fork下面的代码的更改，给别人仓库作者查看了之后合并代码的作用

2. `pull request  和 issue 模板` 

   ```
   1. 先fork别人的代码
   2. 修改--add--commit--push
   3. 去自己的仓库提交pull request
   
   -------------不同分支
   1. git chekout -b leijiuling
   2. 修改--add--commit--push
   3. 去自己的仓库提交merge合并分支 然后pull request
   4. 直接点击就完成了， 会显示
   	jllei wants to merge 2 commits into ice201508:master from jllei:dev
   ```




### github 保护分支

