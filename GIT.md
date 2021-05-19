# git
1. 开源的分布式的版本管理工具 了解svn 集中式的版本管理工具
2. 分布式 每台主机都可以有自己的版本库  集中式 一台主机上有版本库，其他没有
# git本地版本库创建时的一些常见命令
1. git init 初始化一个本地版本库  路径后面多一个master标识 master是版本库的一个默认分支

2. git add filename 把文件添加到版本库（暂存区）

3. git commit -m "message" 将文件修改提交到版本库

4. git status 辅助命令 查看工作区和版本库的状态   git diff 辅助命令 查看文件修改的内容

5. git log 查看提交版本历史记录  git reflog 查看版本改变的历史记录

6. git reset --hard HEAD^ 回退到上一个版本  git reset --hard commitID 回退到指定的版本

7. git restore 文件名  撤销工作区的修改   git restore --staged 文件名 撤销暂存区的修改

8. rm 文件名  从工作区删除文件  git rm 文件名  从版本库删除文件 

9. 创建远程库  
    + 生成密钥  ssh-keygen -t rsa -C "1974451304@qq.com"
    + 把密钥放到github账号下的ssh里
    + 在github上创建一个新的仓库  
    + git remote add origin git@github.com:honnygao/zz2101.git  
    + git push -u origin master
    
10. 分支
    1. git branch 查看分支  *是当前分支
    2. git checkout -b dev 创建并且换分支 dev
    3. git merge dev 合并分支
    
    分支冲突
    
    
