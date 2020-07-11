---
title: Nginx
date: 2019-05-06 12:43:41
tags:
    - nginx
    - 服务端配置
---

# Nginx

## 1、为什么需要Nginx
在无Nginx模式下，用户直接访问server，server对每个用户进行响应，当同一时间user的访问量过大时，server就会过载，甚至会宕机，从而导致服务不可用。Tomcat的并发量在500左右，当访问量大于500时，整个服务的稳定性和体验会大打折扣。

<img src="~@imgUrl/nginx/1.png" width = "80%" />

<!-- more -->

当一台服务器处理能力有限的时候，我们可以通过增加server来分担压力，这样并发的压力就会大大降低，而且server的稳定性也会大幅提升。那么对于用户的访问请求应该由哪个server来响应呢，分发服务器Nginx就应运而生了。

Nginx采用反向代理的方式，将用户的请求分发到各个server上，各个server把处理后的结果返回给Nginx，Nginx再返回给用户。Nginx在整个过程中分发请求，作为负载均衡器。

<img src="~@imgUrl/nginx/2.png" width = "80%" />


## 2、启动与关闭
**1、启动Nginx**

``` js
nginx -c xxx/xxx/nginx.conf
```

**2、关闭Nginx**

``` js
# 查看Nginx进程号
ps -ef|grep nginx

# 杀死Nginx进程
kill -QUIT 进程id
```

**3、重启Nginx** —— 修改配置后重新加载生效

``` js
nginx -s reload
```

## 3、通过不同端口配置虚拟机

``` js
http {
    # 端口1
    server {
        listen 80;
        server_name localhost;
        location / {
            # 设置根文件夹
            root html_80;
            index index.html index.htm
        }
    }
    
    
    # 端口2
    server {
        listen 81;
        server_name localhost;
        location / {
            # 设置根文件夹
            root html_81;
            index index.html index.htm
        }
    }
}
```
## 4、通过域名配置虚拟机

* 不同的域名可通过绑定host来测试

``` js
http {
    # server1
    server {
        listen 80;
        server_name 域名1;
        location / {
            # 设置根文件夹
            root html_80;
            index index.html index.htm
        }
    }
    
    
    # server2
    server {
        listen 81;
        server_name 域名2;
        location / {
            # 设置根文件夹
            root html_81;
            index index.html index.htm
        }
    }
}
```
## 5、反向代理与负载均衡
* upstream 配置服务器具体地址，负载均衡配置不可或缺的部分

``` js
http {
    
    # 提供服务的server
    upstream server_address {
        server ip1:port1;
        server ip2:port2;
        ...
        # weight为权重，默认权重为1，其他配置含义：在20s(fail_timeout)内失败3次(max_fails)表示该主机不可用，使用其他主机
        server ipN:portN weight=2 max_fails=3 fail_timeout=20s;
    }
    # server1
    server {
        listen 80;
        server_name 域名1;
        location / {
            # 提供服务的server
            proxy_pass  server_address;
            index index.html index.htm
        }
    }
}
```

## 6、实现主备 —— 双机热备
* Question：为什么需要双机热备？
* 在上述的结构中，一台Nginx服务器负责所有server的转发任务，为防止Nginx服务器发生故障，提高Nginx服务的稳定性，需要提供一台备用的Nginx服务器，主服务器为master，备用服务器为backup，配置两台Nginx构建出高可用负载均衡的服务器。这种结构一般在超大并发量上场景中使用，并发量较小的单台Nginx即可(Nginx的最大并发量为5万)。

<img src="~@imgUrl/nginx/3.png" width = "80%" />