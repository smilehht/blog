---
title: 前后端分离部署
date: 2019-04-26 10:55:15
tags:
  - deploy
  - 配置
---

#### 一、为什么要前后端分离部署 —— 解耦
传统的前后端开发模式是前端开发完成后将html、css、js等静态资源传给后端，然后由后端对静态资源进行部署，并配置相应的路径指向对应的html。这种模式存在很大的一个问题是前后端的耦合很紧密，前端修改内容后依靠后端上线(即使后端不改)，或者后端的更改也可能会影响前端。

<!-- more -->

这种耦合度高的模式，在开发、调试、测试、部署等环节都相互制约着，影响着彼此的开发效率，而且出错率高。

在传统模式的基础上衍生出另一种模式，这种模式和前者的区别是css、js等静态资源在cdn(或其他服务器)上部署，html直接引静态资源的路径。相比前者，这种模式做了一些优化，但还不够彻底，依然存在耦合度等问题。

为了解决上述问题，采用前后端分离开发部署的方式。那么，什么是前后端分离开发部署？前后端分离开发部署就是前后并行开发，一般是两个不同的repository，在开发完成后，经过测试、部署后两个可以独立访问。

#### 二、怎样实现前后端分离部署
**前后端分离部署结构图：**

![picture](~@imgUrl/deploy/deploy.png)

**从图中我们可以看出：**
- 1、前后端相互独立，分开部署，前端server提供html、css、js、图片等静态资源，后端提供数据服务，js通过接口将前后端建立连接。
- 2、前后端各有一个服务器。图示中为Nginx服务器，实际中可以为其他服务器，每个服务器为各端服务
- 3、前后端分离部署对用户而言是透明的，无感知的。对于开发人员来说，降低前后端耦合度，各端主要精力放在自身服务上，而不用过多关注对方的变动

#### 三、前后端分离部署应注意的问题
前后端分离部署为开发人员提供了一些便利，但也存在一些问题需要解决：

**跨域**

 - 问题描述：前后端部署在不同的服务器上，隶属不同的域名，在浏览器同源的限制下，前端请求后端接口存在跨域问题
 - 解决方案：
    - 借助nginx反向代理来解决跨域
    - 借助CORS来解决跨域
    - 其他跨域解决方案(自行百度)。。。

1、借助Nginx反向代理来解决跨域

```
// nginx.conf文件
server {

    listen 80; // 默认访问80端口
    server_name XXX.com; // 域名
    root "C:/front_end/build"; // 前端静态文件的存放目录
    location / {
      try_files $uri /index.html;
    }
    
    // nginx的反向代理来解决跨域，'/api'——接口的路径
    location /api {
        // 前端请求路径以/api开头时，Nginx会代理到proxy_pass上
        proxy_pass http://localhost:8082; // 后端运行的端口
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection ‘upgrade’;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
  }
```

Nginx的相关知识，请查阅[前端开发者必备的 Nginx 知识](https://mp.weixin.qq.com/s/BA_JZ_kMBFZBE7jjQDNc1Q)，这篇文章讲的很详细

2、后端处理
前端需要跨域需要后端设置Access-Control-Allow-Origin字段，设置为*或者对应域名

```
Access-Control-Allow-Origin: * // 允许来自任何域名的跨域请求
或
Access-Control-Allow-Origin: http://www.google.com // 允许来自特定域名的跨域请求
```

3、特殊情况

- 最近做的项目是前后端分离部署的，前后端不仅存在跨域问题，而且还需要携带cookie，对于这种情况需要前端在请求头带上`withCredentials: true`，具体的携带方法，不同的请求库设置方式不同，`axios.defaults.withCredentials = true`(axios)，`Vue.http.options.xhr = { withCredentials: true }`(vue-resource)，其他请求库的设置方法自行百度。
- 当withCredentials的情况下，后端要设置Access-Control-Allow-Origin为特定域名的请求，而不能设置为`*`，而应该是具体的域名，而且需要这是Access-Control-Allow-Credentials为true

```
Access-Control-Allow-Origin: http://www.google.com 
Access-Control-Allow-Credentials: true
```
 
**部署**

- 问题描述：前后端上线顺序的问题。前后端在既定的接口服务上线了，但随着后续需求的变化，接口A发生变动，前端需要对改变后接口的处理，存在的问题是：假如后端先上线，那么前端之前的代码并未兼容后端的新接口，会存在一定的问题；假如前端先上线，那么前端请求的接口A还是老的接口，也会存在问题。
- 解决方案：
    - 前后端服务在流量少的时候部署，这时候影响范围小，但仍有风险
    - 前后端服务通过脚本并行部署，这样就不会存在前后不同时上线的问题
    - 其他解决方案。。。
