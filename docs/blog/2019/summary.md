---
title: 日常小知识点
date: 2019-08-17 17:05:42
tags:
    - summary
---

# 日常小知识点总结

## 1、图片加载失败解决办法

在实际场景中，我们可能会遇到图片加载失败的情况，如果加载失败有些浏览器会出现裂图，对于用户体验极其不友好，对于这种情况的解决办法是在加载失败后做其他的处理，请看一下代码：

<!-- more -->

``` js
<img src='a.png' onerror='imgError(this)'>

function imgError(target) {
    // 重新给src赋值
    target.src = 'b.png';
    // 防止再次error，触发死循环
    targer.onerror = null;
}

```

## 2、animation动画停留在最后一帧
``` css
animation-fill-mode: forwards;
```


## 3、从url中取value

``` js
getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    //search,查询？后面的参数，并匹配正则
    let r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
```


## 4、获取视频播放进度
1、视频的播放: vedio_dom.play();
2、视频的当前播放时间: vedio_dom.currentTime
3、视频的总时长: vedio_dom.duration
4、视频的播放进度: 每隔一定时间获取currentTime，通过计算currentTime / duration即可得到视频的播放进度

``` js
<!-- vue示例 -->
function countProgress() {
    this.timer = setInterval(() => {
        let vedio = this.$refs.vedio;
        let ratio = this.ratio;
        if (vedio.currentTime && vedio.duration) {
            this.ratio = vedio.currentTime * 100 / vedio.duration;
        }
        // loading状态
        this.isLoading = !this.ratio || ratio == this.ratio;
        if (this.ratio > 99) {
            this.isPlay = false;
            clearInterval(this.timer)
        }
    }, 200)
}
```


## 5、iOS不支持webp解决办法
WebP格式图片是谷歌（google）开发的一种旨在加快图片加载速度的图片格式，图片压缩体积大约只有JPEG的2/3，如果广泛使用webp格式图片能大大提升页面的加载速度，而且可以降低公司服务器的带宽，节约开支。

一切看似web很美好，然鹅，iOS不支持webp，声泪俱下啊。

尽管iOS不支持webp，但是对于国内来说，iOS系统的占比并不高，大多数还是以Android为主，也就是说采用webp格式做性能优化还是有一定价值的，而且即使iOS系统不兼容也可以做兼容嘛。

解决思路：
1、在安卓下采用webp格式图片，在iOS下使用费webp格式图片(前提是公司服务器支持webp格式图片)
2、如果采用webp格式导致图片打不开的情况，可以采用上述**图片加载失败解决办法**解决

## 6、优雅的实现兄弟间的分割线 
在项目中经常会遇到一系列的item之间有一些分割线，或者其他的样式，一般最后一个元素没有样式。

大多数都会首先会给每个元素添加一个样式，然后通过伪元素把最后一元素的样式去掉，具体代码如下：
```
.item {
    border-bottom: 1px solid #ddd;
}

.item:last-child {
    border-bottom: none;
}
```
这样看起来并没有问题，但是我们能不能把代码写的更加优雅些，一句话实现呢？大家都知道，css中有一个兄弟选择器+，可以选择后面的兄弟元素，那么我们通过给每个元素加上border-top，这样通过一句代码实现了分割线，具体代码如下：
``` css
.item + .item {
    border-top: 1px solid #ddd;
}
```