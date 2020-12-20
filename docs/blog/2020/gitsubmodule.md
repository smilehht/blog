---
title: git submodule
---

# git submodule简单使用方法

添加第三方库

```
git submodule add submodule的仓库地址
```



查看第三方库的状态

```
git submodule status
```



设置新的第三方库地址

````
git submodule set-url newURL
````



克隆项目中包含第三方库的情况

```bash
git clone 项目仓库地址
git submodule init && git submodule update

# 命令缩写，recursive(递归)
git clone 项目仓库地址 --recursive
```



批量更新第三方库

```bash
git submodule foreach <command>

# 批量执行第三方库更新
git submodule foreach git submodule update
```



删除第三方库

```bash
git submodule deinit <submodule-name>
```



其他细节请查看[链接](https://git-scm.com/docs/git-submodule)