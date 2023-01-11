---
slug: git-blog
title: git常见问题
tags: [git, github]
---

# 合并多个commit：
```bash
git log -4 # 4表示显示4条记录
# 记录
'''
85d5d8fa468b06bb9a62fafde01d80cbb7396682 # 我改的
621ca4121f971d9604e395556763551427d799d9 # 我改的
f744d2e91916ab7831f3a7695d1d1825916db164 # 我改的
5c135e49e683563fa470d7f5c281050ec1d73af9 # 我改的
295ac3b842b4ecb6eff1c9954a281a4606a8bc84 # 别人改的
'''

# 方法1.
git reset --soft 295ac3b842b4ecb6eff1c9954a281a4606a8bc84 # 别人改的commitID

# 方法2.
git rebase -i HEAD~4

git add -u
git commit -m "msg"
git push <...> -f #强制push
```
# 提交PR时，重复出现已经MR的commit信息，干扰diff查看
原因是没有对upstream进行rebase，进行`git rebase upstream master` 并处理冲突即可。

# git常用命令
```bash
git checkout -b branch-name # 新建分支并切换
git checkout branch-name # 切换到目标分支
git checkout -b branch-name origin/up-branch-name #新建分支并拉取远程分支
git branch # 查看所有本地分支
git branch -D # 直接删除本地分支
git reset --soft commitID # 撤销commit并将改动放到暂存区
git log -[number] # 查看log记录，显示number条
git log --oneline # 查看log记录，仅显示简单信息
git log --graph # 查看log记录，显示关系图
git commit --amend # 将暂存区的改动追加进上一次commit
```