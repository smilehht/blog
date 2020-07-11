---
title: Require
date: 2017-01-02
lastUpdated: 1524027677000
tags: 
    - require
---


### 1、产生背景
​一个网页文件中引入多个javascript文件时，在页面加载的过程中，页面会停止渲染，加载的文件越多，网页响应的时间越长，而且有些JS文件存在依赖关系，当依赖关系变得复杂时，代码的编写和维护就变得困难。因此，RequireJS应运而生，它主要为了解决两个问题：


<!-- more -->

```
1、实现js文件的异步加载，避免网页失去响应

2、管理模块之间的依赖性，便于代码的编写和维护
```
### 2、概念——异步模块定义

```
​ 1、AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。所有的模块将被异步加载，模块加载不影响后面语句运行，所有依赖某些模块的语句均放置在回调函数中。

​ 2、针对多个模块需要加载多次，产生多次HTTP请求影响网页加载速度的情形，require提供了一个优化工具，当模块部署完毕后，优化工具将多个模块合并在一个文件中，减少HTTP请求数。
```

### 3、主模块中的加载位置的配置，放在主文件最前面，require.js通过回调函数来执行模块中的代码：
​ (1)、加载位置的配置
``` js
require.config({

    ​ baseUrl: “相对路径的前部分”

    ​ paths:{

    ​   “jquery”：“文件名”

    ​ }

​ });
```

​ (2)、加载模块

``` js
require([“需要加载的模块”] , function(对应模块的参数){

    ​ //调用

    ​ 模块名称.方法（参数）;

​ })
```

### 4、定义新模块
​ (1)、无依赖模块的写法
``` js
define(function(){

    ​ function a(){

        ​ dosomething();

    ​ }

​     . . .

    ​ return {

        ​ a:a

    ​ };

​ })
```
​ (2)、有依赖模块的写法
``` js
define([“依赖模块的标识符”]，function(参数名){

    ​ function a(){

    ​   dosomething();

    ​ }

    ​ . . .

    ​ return {

    ​   a:a

    ​ };

​ })
```
5、非规范模块的加载——require.config()对象中加入shim属性
``` js
​ require.config({

    ​ paths:{

    ​   . . .

    ​ }

    ​ shim:{

        ​ ‘backbone’:{

            ​ deps:[‘underscore’ ,‘jquery’ ], //表示依赖项

            ​ exports：‘Backbone’ //输出的变量名，即外部调用的时的名称

        ​ }

    ​ }

​ })
```

6、require.js插件

​ (1)、domready插件：让回调函数在页面DOM加载完成后执行

​ (2)、text和image插件：允许require.js加载文本和图片文件
