---
title: 常用linux命令
date: 1559962161000
lastUpdated: 1559962161000
---

# 常用linux命令

## 1、文件相关
pwd：查看当前路径

```js
pwd
// 输出：github/blog
```

mkdir：创建文件夹
```js
// 创建blog文件夹
mkdir /Users/hunter/github/blog 
```

cd：切换当前目录
```js
// 切换到blog文件夹下
cd /Users/hunter/github/blog 
```

touch：文件不存在会创建一个新文件
```js
// 创建一个config.js文件
touch config.js
```

rm 用于删除一个文件或者目录
```js
// 删除config.js文件
rm config.js

// 删除递归test文件夹
rm -r test

// 强制递归删除，没有删除提示
rm -rf test 
```

cat：用于连接文件并打印到标准输出设备上
```js
// 将config.js输出到屏幕上
cat config.js

// 新建文件
cat > newfile.js

// 合并文件
cat file1 file2 > file
```

tail：查看文件的内容
```js
// 实时的将config.js的内容输出到屏幕上，f表示循环读取
tail -f config.js

// 实时显示倒数100行
tail -f -n 100 config.js
```

ln：为某一个文件在另外一个位置建立一个同步的链接，便于文件的复用。软链接：类似于快捷方式；硬链接：文件副本的形式存在
```js
ln 参数 源文件或目录 目标文件或目录

// 软链接
ln -s config.js config

// 硬链接
ln config.js config
```

grep：查找文件里符合条件的字符串
```js
grep 参数 查询条件 目标文件或目录

// 查找文件后缀为file且内容包含test的行
grep test *file

// 递归查找test
grep -r test github/blog
```

cp：复制文件或目录
```js
cp 参数 源文件 目标

cp config.js dist/config.js
```

mv：移动文件或文件夹，或者重命名
```js
mv 参数 源文件 目标

// 移动
mv config.js dist/

// 重命名
mv config.js conf.js
```

## 2、网络
ping：检测网络连接和服务器状态
```js
ping ip或域名

ping baidu.com
```

## 3、权限相关
chown：分配权限给用户或组
```js
chown 参数 users 文件或文件夹

chown -R xxx github/blog
```

chmod：更改文件属性和权限，只有管理员账户才有权限用此命令
```js
chmod 777 config.js
```

## 4、进程、cpu、磁盘等
df：磁盘使用情况
```js
df
```

top：占用量较大进程的信息
```js
top
```

ps：查看进程的状态
```js
ps -ef
```